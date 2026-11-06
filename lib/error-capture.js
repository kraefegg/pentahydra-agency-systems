import { isNotFound, isRedirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { recordErrorResponse, recordFunctionError, recordRequestError } from "@/lib/error-capture.server";

const isControlFlow = (error) => error instanceof Response || isRedirect(error) || isNotFound(error);

export const errorCaptureFunctionMiddleware = createMiddleware({ type: "function" }).server(
  async ({ next, serverFnMeta }) => {
    try {
      return await next();
    } catch (error) {
      if (!isControlFlow(error)) recordFunctionError(error, serverFnMeta);
      throw error;
    }
  },
);

export const errorCaptureRequestMiddleware = createMiddleware({ type: "request" }).server(
  async ({ next, request, handlerType }) => {
    let result;
    try {
      result = await next();
    } catch (error) {
      if (handlerType !== "serverFn" && !isControlFlow(error)) recordRequestError(request, error);
      throw error;
    }
    if (handlerType !== "serverFn") recordErrorResponse(request, result);
    return result;
  },
);