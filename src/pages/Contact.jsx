import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@kreovix.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Malviya Nagar, Jaipur, Rajasthan, India",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat, 10:00 AM – 7:00 PM IST",
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's talk about your project"
        description="Tell us a bit about what you're building and we'll get back to you within one business day."
        crumb="Contact"
      />

      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-main grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <div>
            <div className="flex flex-col gap-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[rgba(96,36,30,0.08)] text-[var(--color-maroon)]">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-semibold text-[var(--color-muted-2)]">
                      {label}
                    </p>
                    <p className="mt-1 text-[15.5px] font-bold text-[var(--color-ink)]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-[22px] border border-[rgba(96,36,30,0.08)]">
              <iframe
                title="Kreovix Location"
                src="https://www.google.com/maps?q=Malviya%20Nagar%20Jaipur&output=embed"
                className="h-[260px] w-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[28px] border border-[rgba(96,36,30,0.08)] bg-[var(--color-white)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(96,36,30,0.08)] text-[var(--color-maroon)]">
                  <Mail size={26} />
                </div>
                <h3 className="mt-6 text-[20px] font-bold text-[var(--color-ink)]">
                  Message sent
                </h3>
                <p className="mt-2 max-w-[320px] text-[14.5px] leading-relaxed text-[var(--color-muted-2)]">
                  Thanks for reaching out — our team will get back to you
                  within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-[14px] font-semibold text-[var(--color-ink)]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-2 h-[52px] w-full rounded-[14px] border border-[rgba(96,36,30,0.12)] bg-[var(--color-cream)] px-4 text-[14.5px] text-[var(--color-ink)] outline-none transition-colors focus:border-[rgba(96,36,30,0.4)]"
                    />
                  </div>

                  <div>
                    <label className="text-[14px] font-semibold text-[var(--color-ink)]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="mt-2 h-[52px] w-full rounded-[14px] border border-[rgba(96,36,30,0.12)] bg-[var(--color-cream)] px-4 text-[14.5px] text-[var(--color-ink)] outline-none transition-colors focus:border-[rgba(96,36,30,0.4)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-[14px] font-semibold text-[var(--color-ink)]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="mt-2 h-[52px] w-full rounded-[14px] border border-[rgba(96,36,30,0.12)] bg-[var(--color-cream)] px-4 text-[14.5px] text-[var(--color-ink)] outline-none transition-colors focus:border-[rgba(96,36,30,0.4)]"
                    />
                  </div>

                  <div>
                    <label className="text-[14px] font-semibold text-[var(--color-ink)]">
                      Service Needed
                    </label>
                    <select
                      className="mt-2 h-[52px] w-full rounded-[14px] border border-[rgba(96,36,30,0.12)] bg-[var(--color-cream)] px-4 text-[14.5px] text-[var(--color-ink)] outline-none transition-colors focus:border-[rgba(96,36,30,0.4)]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>MLM Software</option>
                      <option>AI Solutions</option>
                      <option>Blockchain / Web3</option>
                      <option>Custom Software</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[14px] font-semibold text-[var(--color-ink)]">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full resize-none rounded-[14px] border border-[rgba(96,36,30,0.12)] bg-[var(--color-cream)] p-4 text-[14.5px] text-[var(--color-ink)] outline-none transition-colors focus:border-[rgba(96,36,30,0.4)]"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 flex h-[54px] items-center justify-center gap-2.5 rounded-[18px] bg-[var(--color-maroon)] text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(96,36,30,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-maroon-dark)]"
                >
                  Send Message
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;