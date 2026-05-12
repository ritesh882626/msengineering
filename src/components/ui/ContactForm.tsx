"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { requirementTypes } from "@/constants/siteData";

const inputClass =
  "min-h-12 border-0 border-b border-line bg-transparent px-0 text-base text-ink outline-none transition placeholder:text-muted focus:border-yellow focus:ring-0";

function Field({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <label className="grid gap-3 text-sm font-semibold text-ink">
      {label}
      {children}
    </label>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="border border-line bg-paper p-6 sm:p-10"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Full Name">
          <input autoComplete="name" className={inputClass} name="name" required type="text" />
        </Field>
        <Field label="Company Name">
          <input autoComplete="organization" className={inputClass} name="company" type="text" />
        </Field>
        <Field label="Phone Number">
          <input autoComplete="tel" className={inputClass} name="phone" required type="tel" />
        </Field>
        <Field label="Email Address">
          <input autoComplete="email" className={inputClass} name="email" type="email" />
        </Field>
        <Field label="Requirement Type">
          <select className={inputClass} defaultValue="" name="requirement" required>
            <option disabled value="">
              Select requirement
            </option>
            {requirementTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project Location">
          <input className={inputClass} name="location" type="text" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message">
            <textarea className={`${inputClass} min-h-32 resize-y py-3`} name="message" />
          </Field>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button className="w-full sm:w-auto" type="submit">
          Submit Requirement
        </Button>
        {submitted ? <p className="text-sm font-semibold text-charcoal">Thank you. Your requirement has been noted for discussion.</p> : null}
      </div>
    </form>
  );
}
