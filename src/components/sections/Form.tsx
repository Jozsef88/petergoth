"use client";

import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  goal: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  goal: "",
};

export default function Form() {
  const [form, setForm] = useState<FormData>(initialData);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(values: FormData) {
    if (!values.name.trim() || !values.email.trim() || !values.phone.trim() || !values.goal.trim()) {
      return "Kérlek, tölts ki minden mezőt.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email.trim())) {
      return "Adj meg egy érvényes email címet.";
    }

    return "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Nem sikerült elküldeni az űrlapot.");
      }

      setSuccess("Köszönöm, hamarosan felveszem veled a kapcsolatot.");
      setForm(initialData);
    } catch {
      setError("Hiba történt küldés közben. Kérlek, próbáld újra.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section" id="form">
      <div className="section-shell">
        <div className="glass form-box card edge-glint fade-in-up fade-in-delay-2 relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-6 hidden h-28 w-28 text-[rgba(110,242,178,0.11)] md:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M2.8 12h18.4" strokeLinecap="round" />
            <path d="M8 8v8" strokeLinecap="round" />
            <path d="M16 8v8" strokeLinecap="round" />
            <circle cx="8" cy="12" r="3.1" />
            <circle cx="16" cy="12" r="3.1" />
          </svg>

          <h2 className="relative z-10 text-sm font-medium uppercase tracking-[0.12em] text-[var(--accent)]">Jelentkezés</h2>
          <p className="relative z-10 mt-3 max-w-2xl text-[var(--text-dim)]">
            Írd meg röviden, miben szeretnél változást, és amint tudok, visszajelzek.
          </p>

          <form className="relative z-10 mt-7 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
            <label className="grid gap-1">
              <span className="text-sm text-[var(--text-dim)]">Név</span>
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="input"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-[var(--text-dim)]">E-mail</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="input"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-[var(--text-dim)]">Telefon</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
              className="input"
            />
          </label>

          <label className="grid gap-1 sm:row-span-2">
            <span className="text-sm text-[var(--text-dim)]">Üzenet</span>
            <textarea
              value={form.goal}
              onChange={(event) => setForm((prev) => ({ ...prev, goal: event.target.value }))}
              rows={5}
              className="input h-full min-h-[132px] resize-none"
            />
          </label>

          {error ? <p className="sm:col-span-2 text-sm text-[#fda4a4]">{error}</p> : null}
          {success ? <p className="sm:col-span-2 text-sm text-[#86efac]">{success}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="button sm:col-span-2 mt-2 inline-flex w-full items-center justify-center text-sm disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Küldés..." : "Elküldöm"}
          </button>
          </form>
        </div>
      </div>
    </section>
  );
}
