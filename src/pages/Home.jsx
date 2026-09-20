import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Monitor,
  Smartphone,
  Users,
  Cpu,
  Blocks,
  Code2,
  ArrowUpRight,
  Compass,
  Hammer,
  Rocket,
  LifeBuoy,
  Target,
  Plus,
  Minus,
} from "lucide-react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

/* ================================
   CONTENT
================================= */

const capabilities = [
  {
    icon: Cpu,
    title: "AI Solutions",
    desc: "We build automation and applied-AI features that remove real manual work from a workflow — forecasting, document extraction, support triage, recommendation logic. Scoped tight enough that it ships, not a research project.",
    featured: true,
  },
  {
    icon: Users,
    title: "MLM Software",
    desc: "Binary, matrix, board and hybrid compensation engines with genealogy trees, e-wallets, and payout logic that holds up under a compliance audit — not a demo that breaks past 10,000 members.",
    featured: true,
  },
  {
    icon: Monitor,
    title: "Web Development",
    desc: "Full-stack applications, built for the load you'll actually see.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Native-feeling Android and iOS from one codebase, no compromise on UX.",
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    desc: "Smart contracts for the parts of your product that need trustless proof.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Purpose-built systems for workflows off-the-shelf tools don't fit.",
  },
];

const process = [
  { icon: Compass, title: "Discover", desc: "We map the real workflow — constraints, edge cases, who touches this system daily." },
  { icon: Target, title: "Architect", desc: "Data model and integration boundaries get fixed before any UI is built." },
  { icon: Hammer, title: "Build", desc: "Short cycles, working software reviewed weekly. Nothing goes dark for a month." },
  { icon: Rocket, title: "Ship", desc: "Staged rollout with a rollback plan, not one high-stakes go-live." },
  { icon: LifeBuoy, title: "Support", desc: "The engineers who built it stay reachable after launch." },
];

const caseStudies = [
  {
    name: "NetGrow",
    type: "MLM platform",
    narrative:
      "A binary-plan network had outgrown its spreadsheet-driven payout process. We rebuilt the commission engine and genealogy tree from scratch, with same-day payout runs and full audit trails.",
    metrics: [
      { value: "6-fig", label: "active members supported" },
      { value: "Same-day", label: "payout processing" },
    ],
    color: "var(--color-maroon)",
  },
  {
    name: "FinTrack",
    type: "Finance management platform",
    narrative:
      "Reconciliation was an overnight batch job that broke whenever volume spiked. We re-architected it to run continuously, and it's held up through two external audit cycles since.",
    metrics: [
      { value: "Minutes", label: "not overnight batches" },
      { value: "2 audits", label: "passed since launch" },
    ],
    color: "var(--color-maroon-mid)",
  },
  {
    name: "ShopEase",
    type: "E-commerce platform",
    narrative:
      "Catalog and checkout were rebuilt ahead of a flash-sale season, with load testing baked into the build cycle rather than bolted on the week before launch.",
    metrics: [{ value: "Zero", label: "downtime during peak sale" }],
    color: "var(--color-orange)",
  },
  {
    name: "EduLearn",
    type: "Learning management system",
    narrative:
      "A multi-campus institution needed one system for course delivery and grading across departments that had each been running their own tools.",
    metrics: [{ value: "1", label: "system, multiple campuses" }],
    color: "var(--color-maroon-dark)",
  },
];

const testimonials = [
  {
    quote:
      "Kreovix delivered our MLM platform ahead of schedule, and it has scaled cleanly as our network grew past six figures of active members. The commission engine has never needed a manual correction.",
    name: "Rohit Malhotra",
    role: "Founder, NetGrow",
    featured: true,
  },
  {
    quote:
      "The team felt like an extension of ours — clear updates, real ownership of the outcome, not just the ticket.",
    name: "Ananya Sharma",
    role: "COO, ShopEase",
  },
  {
    quote:
      "Transparent from the first call to launch. Stable through two audit cycles now.",
    name: "David Kim",
    role: "CEO, FinTrack",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A focused web or mobile build usually runs 6–12 weeks. MLM platforms and custom systems with a heavier data model run 3–6 months. We give you a real range after the discovery stage, not before.",
  },
  {
    q: "Do you work with an existing codebase, or only greenfield?",
    a: "Most of our engagements are on an existing codebase — extending a platform, fixing a system that's fallen behind, or replacing one module at a time rather than a full rewrite.",
  },
  {
    q: "What happens after launch?",
    a: "The same engineers who built your system stay on for support — bug fixes, small iterations, and monitoring. You're not handed off to a separate support queue.",
  },
  {
    q: "Can you handle compliance-heavy MLM compensation plans?",
    a: "Yes — binary, matrix, board, and hybrid plans, with the audit trail and payout logic built to hold up under regulatory review, not just a demo.",
  },
  {
    q: "Do you sign an NDA before discovery calls?",
    a: "Yes, as standard practice. We'll send one over before any details of your business or product are discussed.",
  },
];

/* ================================
   PAGE
================================= */

function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [pausedTestimonials, setPausedTestimonials] = useState(false);

  useEffect(() => {
    if (pausedTestimonials) return;
    const t = setInterval(() => setTestimonialSlide((s) => (s + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [pausedTestimonials]);

  const visibleTestimonials = Array.from(
    { length: testimonials.length },
    (_, index) => testimonials[(testimonialSlide + index) % testimonials.length]
  );

  return (
    <>
      <HeroSection />

      {/* ================================
          CAPABILITIES — bento grid
      ================================= */}
      <section className="kv relative overflow-hidden bg-[var(--color-cream-alt)] py-28">
        <div className="kv-dots pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <div className="max-w-[560px]">
            <p className="text-[13.5px] font-bold uppercase tracking-[0.08em] text-[var(--color-maroon)]">What we build</p>
            <h2 className="mt-3 text-[38px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[var(--color-ink)] sm:text-[50px]">
              We build software that keeps business moving
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, desc, featured }) => (
              <div
                key={title}
                className={`border border-[rgba(96,36,30,0.12)] bg-[var(--color-white)] p-8 shadow-[var(--shadow-soft)] ${
                  featured ? "rounded-[28px]" : "rounded-2xl"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-maroon)] text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className={`mt-6 font-bold text-[var(--color-ink)] ${featured ? "text-[21px]" : "text-[17.5px]"}`}>
                  {title}
                </h3>
                <p className={`mt-3 leading-[1.7] text-[var(--color-muted)] ${featured ? "text-[15px] max-w-[440px]" : "text-[14px]"}`}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          PROCESS
      ================================= */}
      <section className="kv bg-[var(--color-cream)] py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-[560px]">
            <p className="text-[13.5px] font-bold text-[var(--color-maroon)]">How we work</p>
            <h2 className="mt-3 text-[34px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] sm:text-[40px]">
              The same five stages, every engagement
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-[rgba(23,19,26,0.15)] lg:block" />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {process.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-cream)] text-[var(--color-ink)]">
                    <Icon size={19} strokeWidth={2} />
                  </div>
                  <p className="mt-5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-[var(--color-maroon)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-[17px] font-bold text-[var(--color-ink)]">{title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.65] text-[var(--color-muted)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          CASE STUDIES
      ================================= */}
      <section className="kv bg-[var(--color-cream-alt)] py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-[520px]">
              <p className="text-[13.5px] font-bold uppercase tracking-[0.08em] text-[var(--color-orange)]">Case studies</p>
              <h2 className="mt-3 text-[38px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[var(--color-ink)] sm:text-[48px]">
                Real products, real operations, real results
              </h2>
            </div>
            <Link to="/portfolio" className="shrink-0 text-[14.5px] font-bold text-[var(--color-maroon)] underline decoration-[rgba(96,36,30,0.4)] underline-offset-4">
              View full portfolio
            </Link>
          </div>

          <div className="mt-16 flex flex-col gap-16">
            {caseStudies.map(({ name, type, narrative, metrics, color }, i) => (
              <div
                key={name}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className="flex h-[240px] items-center justify-center rounded-[28px] shadow-[0_20px_50px_rgba(96,36,30,0.14)]"
                  style={{ background: `linear-gradient(135deg, ${color} 0%, var(--color-ink) 100%)` }}
                >
                  <span className="text-[16px] font-extrabold tracking-[-0.01em] text-white/85">{name}</span>
                </div>

                <div>
                  <p className="text-[13px] font-bold text-[var(--color-orange)]">{type}</p>
                  <h3 className="mt-2 text-[24px] font-extrabold tracking-[-0.01em] text-[var(--color-ink)]">{name}</h3>
                  <p className="mt-4 max-w-[480px] text-[15px] leading-[1.75] text-[var(--color-muted)]">{narrative}</p>

                  <div className="mt-6 flex flex-wrap gap-8 border-t border-[rgba(96,36,30,0.15)] pt-6">
                    {metrics.map(({ value, label }) => (
                      <div key={label}>
                        <p className="text-[20px] font-extrabold text-[var(--color-maroon)]">{value}</p>
                        <p className="text-[12.5px] text-[var(--color-muted-2)]">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          TESTIMONIALS — light
      ================================= */}
      <section
        className="kv bg-[var(--color-cream)] py-28"
        onMouseEnter={() => setPausedTestimonials(true)}
        onMouseLeave={() => setPausedTestimonials(false)}
      >
        <div className="mx-auto max-w-[1240px] px-6">
          <p className="text-[13.5px] font-bold uppercase tracking-[0.08em] text-[var(--color-maroon)]">Client voices</p>
          <div className="mt-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialSlide}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-8 lg:grid-cols-3"
              >
                {visibleTestimonials.map(({ quote, name, role, featured }) => (
                  <div
                    key={`${name}-${role}`}
                    className={`rounded-[28px] border border-[rgba(96,36,30,0.12)] bg-[var(--color-white)] p-8 shadow-[var(--shadow-soft)] ${
                      featured ? "lg:col-span-2" : ""
                    }`}
                  >
                    <span className="text-[42px] font-extrabold leading-none text-[var(--color-orange)]">&ldquo;</span>
                    <p className={`mt-2 leading-[1.75] text-[var(--color-muted)] ${featured ? "text-[18px]" : "text-[14.5px]"}`}>
                      {quote}
                    </p>
                    <p className="mt-6 text-[14px] font-bold text-[var(--color-ink)]">{name}</p>
                    <p className="text-[12.5px] text-[var(--color-muted-2)]">{role}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={`${testimonial.name}-${index}`}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setTestimonialSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === testimonialSlide ? "w-8 bg-[var(--color-maroon)]" : "w-2.5 bg-[rgba(96,36,30,0.2)]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          FAQ
      ================================= */}
      <section className="kv bg-[var(--color-cream-alt)] py-28">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="text-center text-[13.5px] font-bold uppercase tracking-[0.08em] text-[var(--color-maroon)]">Questions</p>
          <h2 className="mt-3 text-center text-[40px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[var(--color-ink)] sm:text-[48px]">
            Before you reach out
          </h2>

          <div className="mt-12 flex flex-col divide-y divide-[rgba(96,36,30,0.12)] rounded-[20px] border border-[rgba(96,36,30,0.12)] bg-white px-6">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-maroon)]"
                  >
                    <span className="text-[16px] font-bold text-[var(--color-ink)]">{item.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(96,36,30,0.25)] text-[var(--color-maroon)]">
                      {open ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="max-w-[620px] overflow-hidden pb-6 text-[14.5px] leading-[1.75] text-[var(--color-muted)]"
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================
          CTA — the one deliberate dark moment
      ================================= */}
      <section className="kv relative overflow-hidden bg-[var(--color-maroon-dark)] py-28 text-center text-[var(--color-cream-alt)]">
        <div className="kv-dots pointer-events-none absolute inset-0 opacity-[0.12] invert" />
        <div className="relative mx-auto max-w-[600px] px-6">
          <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-[40px]">
            Ready to build something that scales?
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.7] text-[rgba(255,255,255,0.8)]">
            Tell us what the system needs to do. We'll reply within one
            business day with a straight answer on scope and timeline.
          </p>
          <Link
            to="/contact"
            className="group mt-9 inline-flex h-[54px] items-center gap-2.5 rounded-2xl bg-[var(--color-orange)] px-8 text-[15px] font-bold text-[var(--color-maroon-dark)] transition-all duration-200 hover:-translate-y-0.5"
          >
            Get a free consultation
            <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;