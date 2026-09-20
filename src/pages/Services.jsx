import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  Users,
  Cpu,
  Blocks,
  Code2,
  Check,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    desc: "Modern, scalable and high-performance web applications built with the latest frameworks.",
    points: [
      "Custom web applications",
      "E-commerce platforms",
      "Progressive web apps",
      "API integrations",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android & iOS apps with seamless user experience, from concept to app store launch.",
    points: [
      "Native iOS & Android apps",
      "Cross-platform development",
      "App store optimization",
      "Ongoing maintenance",
    ],
  },
  {
    icon: Users,
    title: "MLM Software",
    desc: "All types of MLM plans with advanced features, dashboards, and payout automation.",
    points: [
      "Binary, matrix & unilevel plans",
      "Real-time genealogy trees",
      "Automated commission payouts",
      "Multi-currency & multi-language",
    ],
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    desc: "Smart AI tools to automate workflows, surface insights, and accelerate your business.",
    points: [
      "Custom AI/ML models",
      "Chatbots & virtual assistants",
      "Predictive analytics",
      "Process automation",
    ],
  },
  {
    icon: Blocks,
    title: "Blockchain / Web3",
    desc: "Secure and transparent blockchain solutions, from smart contracts to full dApps.",
    points: [
      "Smart contract development",
      "Crypto wallets & exchanges",
      "NFT marketplaces",
      "Tokenomics design",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored software for your unique business needs, built to fit how your team works.",
    points: [
      "Enterprise software",
      "Internal tools & dashboards",
      "Legacy system modernization",
      "Third-party integrations",
    ],
  },
];

const process = [
  { step: "01", title: "Discover", desc: "We learn your goals, users, and constraints." },
  { step: "02", title: "Design", desc: "We map the experience before writing code." },
  { step: "03", title: "Build", desc: "Agile sprints with regular, visible progress." },
  { step: "04", title: "Launch & Support", desc: "We stay on after launch to help you grow." },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="End-to-end technology services for every stage of growth"
        description="From your first line of code to enterprise-scale systems, we build the software that moves your business forward."
        crumb="Services"
      />

      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-main grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, desc, points }) => (
            <div
              key={title}
              className="interactive rounded-[24px] border border-[rgba(96,36,30,0.08)] bg-[var(--color-white)] p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-[rgba(96,36,30,0.08)] text-[var(--color-maroon)]">
                  <Icon size={24} strokeWidth={2} />
                </div>
              </div>

              <h3 className="mt-6 text-[19px] font-bold text-[var(--color-ink)]">
                {title}
              </h3>

              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-muted)]">
                {desc}
              </p>

              <ul className="mt-5 flex flex-col gap-2.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-[14px] text-[var(--color-muted)]"
                  >
                    <Check size={15} className="shrink-0 text-[var(--color-maroon)]" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-bold text-[var(--color-maroon)]"
              >
                Get a Quote
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[var(--color-cream-alt)]">
        <div className="container-main">
          <div className="mx-auto max-w-[560px] text-center">
            <span className="section-label">How We Work</span>
            <h2 className="section-heading mt-5 text-[32px] sm:text-[36px] text-[var(--color-ink)]">
              A simple, transparent process
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, desc }) => (
              <div
                key={step}
                className="rounded-[22px] border border-[rgba(96,36,30,0.08)] bg-[var(--color-white)] p-7 shadow-[var(--shadow-soft)]"
              >
                <p className="text-[26px] font-extrabold text-[rgba(96,36,30,0.25)]">
                  {step}
                </p>
                <p className="mt-3 text-[16px] font-bold text-[var(--color-ink)]">
                  {title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-muted-2)]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-main">
          <div className="flex flex-col items-center gap-6 rounded-[32px] bg-gradient-to-br from-[var(--color-maroon)] to-[var(--color-maroon-dark)] px-8 py-14 text-center sm:px-16">
            <h2 className="max-w-[520px] text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white sm:text-[34px]">
              Not sure which service you need?
            </h2>
            <p className="max-w-[440px] text-[15px] leading-relaxed text-white/60">
              Tell us what you're trying to build — we'll recommend the right
              approach.
            </p>
            <Link
              to="/contact"
              className="group mt-2 inline-flex h-[54px] items-center gap-2.5 rounded-[18px] bg-white px-8 text-[15px] font-bold text-[var(--color-maroon)] transition-all duration-300 hover:-translate-y-[1px]"
            >
              Talk to Our Team
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;