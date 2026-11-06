import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Check, Loader2, Phone, MapPin, Languages } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import ContactChannels from "@/components/site/ContactChannels";
import { Image } from "@/components/ui/image";
import { ASSETS } from "@/content/assets";
import { PHONES } from "@/content/contact";
import { createContactRequest } from "@/lib/server-fns";
import { useLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const FIELD =
  "mt-2 w-full border border-titanium/20 bg-ink px-3.5 py-3 text-sm text-platinum placeholder:text-titanium/35 transition-colors focus:border-cyan focus:outline-none";

function Field({ label, children, required }) {
  return (
    <label className="block">
      <span className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-titanium/50">
        {label}
        {required && <span className="ml-1 text-cyan">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function ContactPage() {
  const { t, locale } = useLocale();
  const contact = t.pages.contact;
  const submit = useServerFn(createContactRequest);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    organization: "",
    country: "",
    interest: "",
    message: "",
    consent: false,
  });
  const [validationError, setValidationError] = useState("");

  const mutation = useMutation({
    mutationFn: (payload) => submit({ data: payload }),
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      !form.full_name.trim() ||
      !form.email.trim() ||
      !form.interest ||
      form.message.trim().length < 10 ||
      !form.consent
    ) {
      setValidationError(contact.form.validationError);
      return;
    }
    setValidationError("");
    mutation.mutate({ ...form, locale });
  };

  const done = mutation.isSuccess;

  return (
    <>
      <PageHero
        label={contact.hero.label}
        title={contact.hero.title}
        intro={contact.hero.intro}
        meta={contact.hero.meta}
      />

      <section className="border-b border-titanium/12 py-16 md:py-24">
        <div className="ph-container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            {done ? (
              <div className="border border-cyan/40 bg-cyan/[0.06] p-8">
                <span className="flex h-10 w-10 items-center justify-center border border-cyan/60 text-cyan">
                  <Check className="h-4 w-4" />
                </span>
                <h2 className="mt-6 font-heading text-2xl font-semibold text-platinum">
                  {contact.form.successTitle}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-titanium/75">
                  {contact.form.successText}
                </p>
                <p className="mt-6 font-mono text-[0.5rem] uppercase tracking-[0.22em] text-titanium/45">
                  REF · {mutation.data?.id?.slice(0, 8)?.toUpperCase()}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
                <Field label={contact.form.name} required>
                  <input
                    className={FIELD}
                    value={form.full_name}
                    onChange={(e) => update("full_name", e.target.value)}
                    autoComplete="name"
                    required
                  />
                </Field>
                <Field label={contact.form.email} required>
                  <input
                    className={FIELD}
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    autoComplete="email"
                    required
                  />
                </Field>
                <Field label={contact.form.organization}>
                  <input
                    className={FIELD}
                    value={form.organization}
                    onChange={(e) => update("organization", e.target.value)}
                    autoComplete="organization"
                  />
                </Field>
                <Field label={contact.form.country}>
                  <input
                    className={FIELD}
                    value={form.country}
                    onChange={(e) => update("country", e.target.value)}
                    autoComplete="country-name"
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label={contact.form.interest} required>
                    <select
                      className={cn(FIELD, "appearance-none")}
                      value={form.interest}
                      onChange={(e) => update("interest", e.target.value)}
                      required
                    >
                      <option value="">{contact.form.selectInterest}</option>
                      {contact.categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label={contact.form.message} required>
                    <textarea
                      className={cn(FIELD, "min-h-[168px] resize-y leading-relaxed")}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder={contact.form.messagePlaceholder}
                      required
                    />
                  </Field>
                </div>

                <label className="flex items-start gap-3 sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#19A8E0]"
                  />
                  <span className="text-[0.8125rem] leading-relaxed text-titanium/70">
                    {contact.form.consent}
                  </span>
                </label>

                {(validationError || mutation.isError) && (
                  <p className="border-l border-destructive pl-3 font-mono text-[0.625rem] uppercase leading-loose tracking-[0.14em] text-destructive sm:col-span-2">
                    {validationError || contact.form.errorText}
                  </p>
                )}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="ph-focus inline-flex items-center gap-3 bg-platinum px-7 py-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {mutation.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                    {mutation.isPending ? contact.form.submitting : contact.form.submit}
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className="border border-titanium/15 bg-graphite/40 p-7 md:p-8">
            <figure className="relative mb-7 aspect-square w-full overflow-hidden border border-titanium/12">
              <Image
                src={ASSETS.lockupDark}
                alt="PentaHydra emblem radiating secured network pathways"
                className="h-full w-full"
                fittingType="fill"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <span className="absolute left-3 top-3 h-3.5 w-3.5 border-l border-t border-cyan/60" />
              <span className="absolute right-3 top-3 h-3.5 w-3.5 border-r border-t border-cyan/60" />
            </figure>
            <h2 className="font-heading text-lg font-semibold uppercase tracking-wide text-platinum">
              {contact.direct.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-titanium/70">{contact.direct.text}</p>
            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <div>
                  <dt className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-titanium/45">
                    {contact.direct.phoneLabel}
                  </dt>
                  <dd className="mt-2 space-y-3">
                    {PHONES.map((phone) => (
                      <a
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        className="ph-focus flex flex-col gap-1"
                      >
                        <span className="text-sm text-platinum transition-colors hover:text-cyan">
                          {phone.display}
                        </span>
                        <span className="font-mono text-[0.4375rem] uppercase tracking-[0.22em] text-titanium/40">
                          {phone.area}
                        </span>
                      </a>
                    ))}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <div>
                  <dt className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-titanium/45">
                    {contact.direct.locationLabel}
                  </dt>
                  <dd className="mt-1.5 text-sm text-titanium/85">{contact.direct.location}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Languages className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <div>
                  <dt className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-titanium/45">
                    {contact.direct.languageLabel}
                  </dt>
                  <dd className="mt-1.5 text-sm text-titanium/85">{contact.direct.language}</dd>
                </div>
              </div>
            </dl>
            <p className="mt-8 border-t border-titanium/12 pt-4 font-mono text-[0.5rem] uppercase leading-loose tracking-[0.18em] text-titanium/40">
              {t.ui.scopeNote}
            </p>
          </aside>
        </div>
      </section>

      <ContactChannels />
    </>
  );
}