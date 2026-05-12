import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { requirementTypes } from "@/constants/homepageData";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Get in Touch with MS Engineering"
              description="Tell us what you are planning to build or upgrade. We will help you map the plant type, workflow, and technical direction."
            />
            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-lg border border-borderSteel bg-industrial p-5">
                <Phone aria-hidden="true" className="h-6 w-6 shrink-0 text-steel" />
                <div>
                  <h3 className="font-display text-lg font-semibold">Phone</h3>
                  <a className="mt-1 block text-muted hover:text-steel" href="tel:+919560443119">
                    +91 95604 43119
                  </a>
                  <a className="mt-1 block text-muted hover:text-steel" href="tel:+919818845807">
                    +91 9818845807
                  </a>
                </div>
              </div>
              <div className="flex gap-4 rounded-lg border border-borderSteel bg-industrial p-5">
                <MapPin aria-hidden="true" className="h-6 w-6 shrink-0 text-steel" />
                <div>
                  <h3 className="font-display text-lg font-semibold">Address</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Khasra No. 990/336/1, Near Basai Flyover, Basai Village, Sector 9B, Gurugram, Haryana 122006
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-lg border border-borderSteel bg-industrial p-5 shadow-technical sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Name
                <input className="min-h-11 rounded-md border border-borderSteel bg-white px-4 outline-none focus:border-steel focus:ring-2 focus:ring-steel/20" name="name" type="text" autoComplete="name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Company Name
                <input className="min-h-11 rounded-md border border-borderSteel bg-white px-4 outline-none focus:border-steel focus:ring-2 focus:ring-steel/20" name="company" type="text" autoComplete="organization" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Phone Number
                <input className="min-h-11 rounded-md border border-borderSteel bg-white px-4 outline-none focus:border-steel focus:ring-2 focus:ring-steel/20" name="phone" type="tel" autoComplete="tel" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Email
                <input className="min-h-11 rounded-md border border-borderSteel bg-white px-4 outline-none focus:border-steel focus:ring-2 focus:ring-steel/20" name="email" type="email" autoComplete="email" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal sm:col-span-2">
                Requirement Type
                <select className="min-h-11 rounded-md border border-borderSteel bg-white px-4 outline-none focus:border-steel focus:ring-2 focus:ring-steel/20" name="requirement" defaultValue="">
                  <option value="" disabled>
                    Select requirement
                  </option>
                  {requirementTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal sm:col-span-2">
                Message
                <textarea className="min-h-32 rounded-md border border-borderSteel bg-white px-4 py-3 outline-none focus:border-steel focus:ring-2 focus:ring-steel/20" name="message" />
              </label>
            </div>
            <Button type="submit" variant="dark" className="mt-6 w-full sm:w-auto">
              Submit Requirement
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
