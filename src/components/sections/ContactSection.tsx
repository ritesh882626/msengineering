import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { requirementTypes } from "@/constants/homepageData";

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-3 text-sm font-semibold text-ink">
      {label}
      {children}
    </label>
  );
}

const inputClass =
  "min-h-12 border-0 border-b border-line bg-transparent px-0 text-base text-ink outline-none transition placeholder:text-muted focus:border-yellow focus:ring-0";

export function ContactSection() {
  return (
    <section id="contact" className="bg-paper py-20 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 bg-yellow" />
              Contact
            </p>
            <h2 className="font-display text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Get in Touch with MS Engineering
            </h2>
            <p className="mt-7 text-lg leading-8 text-muted">
              Tell us about your electroplating plant requirement and our team will help you understand the right solution.
            </p>
            <div className="mt-10 border-t border-line">
              <div className="border-b border-line py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Phone</p>
                <a className="mt-3 block text-lg font-semibold text-ink hover:text-deepYellow" href="tel:+919560443119">
                  +91 95604 43119
                </a>
                <a className="mt-1 block text-lg font-semibold text-ink hover:text-deepYellow" href="tel:+919818845807">
                  +91 9818845807
                </a>
              </div>
              <div className="border-b border-line py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Address</p>
                <p className="mt-3 text-base leading-7 text-charcoal">
                  Khasra No. 990/336/1, Near Basai Flyover, Basai Village, Sector 9B, Gurugram, Haryana 122006
                </p>
              </div>
            </div>
          </div>

          <form className="border border-line bg-warm p-6 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-2">
              <Field label="Name">
                <input autoComplete="name" className={inputClass} name="name" type="text" />
              </Field>
              <Field label="Company Name">
                <input autoComplete="organization" className={inputClass} name="company" type="text" />
              </Field>
              <Field label="Phone Number">
                <input autoComplete="tel" className={inputClass} name="phone" type="tel" />
              </Field>
              <Field label="Email">
                <input autoComplete="email" className={inputClass} name="email" type="email" />
              </Field>
              <Field label="Requirement Type">
                <select className={inputClass} defaultValue="" name="requirement">
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
              <Field label="Message">
                <textarea className={`${inputClass} min-h-28 resize-y py-3`} name="message" />
              </Field>
            </div>
            <Button className="mt-10 w-full sm:w-auto" type="submit">
              Submit Requirement
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
