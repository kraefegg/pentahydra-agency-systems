import { getRequest, getResponseStatus } from "@tanstack/react-start/server";

function scrubSecrets(text, env) {
  const secrets = Object.values(env)
    .filter((v) => typeof v === "string" && v.length >= 8)
    .sort((a, b) => b.length - a.length);
  return secrets.reduce((scrubbed, secret) => scrubbed.replaceAll(secret, "[redacted]"), text);
}

function cutBytes(text, maxBytes) {
  const bytes = new TextEncoder().encode(text);
  if (bytes.length <= maxBytes) return text;
  let end = maxBytes;
  while (end > 0 && (bytes[end] & 0xc0) === 0x80) end--;
  return new TextDecoder().decode(bytes.subarray(0, end));
}

function cutStack(stack) {
  const cut = cutBytes(stack, 4096);
  const lineEnd = cut === stack ? -1 : cut.lastIndexOf("\n");
  return lineEnd > 0 ? cut.slice(0, lineEnd) : cut;
}

export const recordFunctionError = (error, serverFnMeta) => {
  try {
    if (error instanceof Response) return;
    const status = getResponseStatus();
    if (status < 500) return;
    const request = getRequest();
    const env = request?.cloudflare?.env ?? {};
    const scrub = (t) => scrubSecrets(t, env);
    console.error("[Server Function Error]", {
      fn: serverFnMeta?.name ?? serverFnMeta?.id,
      status: status >= 400 ? status : 500,
      message: cutBytes(scrub(error?.message ?? String(error)), 500),
      stack: error?.stack ? cutStack(scrub(error.stack)) : undefined,
    });
  } catch {
    // Never throw from error reporting
  }
};

export const recordRequestError = (request, error) => {
  try {
    if (error instanceof Response) return;
    const status = error?.status ?? error?.statusCode;
    if (!Number.isInteger(status) || status < 400 || status > 599) return;
    const env = request?.cloudflare?.env ?? {};
    const scrub = (t) => scrubSecrets(t, env);
    console.error("[Request Error]", {
      status: status >= 500 ? status : 500,
      message: cutBytes(scrub(error?.message ?? String(error)), 500),
      stack: error?.stack ? cutStack(scrub(error.stack)) : undefined,
    });
  } catch {
    // Never throw from error reporting
  }
};

export const recordRouteError = (request, error, route) => {
  try {
    const env = request?.cloudflare?.env ?? {};
    const scrub = (t) => scrubSecrets(t, env);
    console.error("[Route Error]", {
      route,
      status: 500,
      message: cutBytes(scrub(error?.message ?? String(error)), 500),
      stack: error?.stack ? cutStack(scrub(error.stack)) : undefined,
    });
  } catch {
    // Never throw from error reporting
  }
};

export const recordErrorResponse = (request, result) => {
  try {
    const status = result?.response?.status;
    if (!(status >= 500)) return;
    const env = request?.cloudflare?.env ?? {};
    const scrub = (t) => scrubSecrets(t, env);
    console.error("[Error Response]", {
      status,
      message: "5xx response returned",
    });
  } catch {
    // Never throw from error reporting
  }
};