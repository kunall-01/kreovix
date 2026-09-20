import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Monitor,
  Smartphone,
  Users,
  Cpu,
  Code2,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/* ================================
   SLIDES
================================= */

const heroSlides = [
  {
    category: "Custom Software",
    icon: Code2,
    title: "Software that works the way your business already does.",
    description:
      "No forcing your process into someone else's template. We map your actual workflow first, then build around it.",
    spec: ["Workflow mapping", "Data model design", "Internal tooling"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business team collaborating in a modern office environment",
  },
  {
    category: "Web Development",
    icon: Monitor,
    title: "Web platforms built for the load you'll actually see.",
    description:
      "From dashboards to full business platforms, architected to hold up past the demo and into real daily use.",
    spec: ["Frontend", "API layer", "Database"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professionals collaborating on a digital product in a studio",
  },
  {
    category: "Mobile Applications",
    icon: Smartphone,
    title: "One idea, turned into an app people open every day.",
    description:
      "Native-feeling apps across iOS and Android, sharing logic without sharing compromises.",
    spec: ["iOS", "Android", "Shared logic core"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Designer and developer reviewing a mobile app mockup",
  },
  {
    category: "MLM Software",
    icon: Users,
    title: "Compensation engines that hold up past 10,000 members.",
    description:
      "Binary, matrix and hybrid plans with genealogy, wallets, and payouts built for a compliance audit, not a demo.",
    spec: ["Genealogy tree", "E-wallet", "Payout engine"],
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business consultation and strategic planning session",
  },
  {
    category: "AI & Blockchain",
    icon: Cpu,
    title: "Emerging tech, scoped to where it earns its place.",
    description:
      "Applied AI and on-chain systems where they remove real work or add real proof — not features for a features page.",
    spec: ["Model pipeline", "Smart contract", "On-chain ledger"],
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Technology team reviewing strategy and system architecture",
  },
];

const stats = [
  { value: "500+", label: "Clients served" },
  { value: "1,000+", label: "Projects delivered" },
  { value: "50+", label: "Industries" },
  { value: "10+", label: "Countries" },
  { value: "99%", label: "On-time delivery" },
];

const clientLogos = ["NetGrow", "ShopEase", "FinTrack", "EduLearn", "Kitchenova", "AirVow"];

const AUTOPLAY_MS = 6000;

function HeroSection() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const glowRef = useRef(null);
  const targetRef = useRef({ x: -9999, y: -9999 });
  const currentRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused]);

  // Smooth, glide-following cursor glow (lerped every frame instead of snapping to the cursor)
  useEffect(() => {
    const animate = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;
      cur.x += (tgt.x - cur.x) * 0.12;
      cur.y += (tgt.y - cur.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.setProperty("--mx", `${cur.x}px`);
        glowRef.current.style.setProperty("--my", `${cur.y}px`);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const active = heroSlides[slide];
  const ActiveIcon = active.icon;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseLeave = () => {
    setPaused(false);
    targetRef.current = { x: -9999, y: -9999 };
  };

  return (
    <section
      className="kv relative overflow-hidden bg-[var(--color-cream)]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .kv { font-family: 'Plus Jakarta Sans', sans-serif; }

        .kv-pattern-bg {
          background:
            radial-gradient(circle at top left, rgba(96,36,30,0.04), transparent 32%),
            linear-gradient(135deg, rgba(255,255,255,0.3), rgba(96,36,30,0.02));
        }

        .kv-dots-base {
          background-image: radial-gradient(rgba(96,36,30,0.08) 1.4px, transparent 1.4px);
          background-size: 22px 22px;
        }

        .kv-glow {
          background:
            radial-gradient(circle at var(--mx, -9999px) var(--my, -9999px), rgba(231,123,73,0.12), transparent 18%),
            radial-gradient(circle at 50% 30%, rgba(231,123,73,0.08), transparent 22%);
          opacity: 1;
        }

        @keyframes kvPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(231,123,73,0.45); }
          70% { box-shadow: 0 0 0 6px rgba(231,123,73,0); }
        }
        .kv-pulse-dot { animation: kvPulse 2s ease-out infinite; }
      `}</style>

      <div className="kv-pattern-bg pointer-events-none absolute inset-0 opacity-100" />
      <div className="kv-dots-base pointer-events-none absolute inset-0 opacity-70" />
      <div ref={glowRef} className="kv-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border-[16px] border-[rgba(96,36,30,0.06)]" />
      <div className="pointer-events-none absolute -left-28 bottom-[-160px] h-[360px] w-[360px] rounded-full border-[14px] border-[rgba(96,36,30,0.06)]" />
      <div className="pointer-events-none absolute left-[38%] top-[10%] h-[220px] w-[220px] rounded-full bg-[rgba(231,123,73,0.08)] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-18">
        {/* ============ LEFT — copy ============ */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.category}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/90 px-4 py-1.5 text-[13px] font-semibold text-[var(--color-maroon)] shadow-[0_2px_10px_rgba(96,36,30,0.06)]">
                <span className="kv-pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--color-orange)]" />
                {active.category}
              </span>

              <h1 className="mt-6 max-w-[620px] text-[46px] font-extrabold leading-[0.9] tracking-[-0.06em] text-[var(--color-ink)] sm:text-[62px] lg:text-[82px]">
                {active.title}
              </h1>

              <p className="mt-6 max-w-[500px] text-[18px] leading-[1.7] text-[var(--color-muted)]">
                {active.description}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link
                  to="/contact"
                  className="group inline-flex h-[58px] items-center gap-2.5 rounded-[18px] bg-[var(--color-maroon)] px-8 text-[16px] font-bold text-white shadow-[0_14px_28px_rgba(96,36,30,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-maroon-dark)]"
                >
                  Start your project
                  <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="text-[16px] font-bold text-[var(--color-ink)] underline decoration-[var(--color-orange)] decoration-2 underline-offset-[6px]"
                >
                  See what we've shipped
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-5">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(96,36,30,0.25)] bg-white/60 text-[var(--color-maroon)] transition-colors hover:bg-[var(--color-maroon)] hover:text-white"
                >
                  <ArrowLeft size={16} />
                </button>

                <div className="flex items-center gap-2.5">
                  {heroSlides.map((s, i) => (
                    <button
                      key={s.category}
                      type="button"
                      aria-label={`Go to ${s.category}`}
                      onClick={() => setSlide(i)}
                      className={`h-[3px] rounded-full transition-all duration-300 ${
                        i === slide ? "w-9 bg-[var(--color-maroon)]" : "w-4 bg-[rgba(96,36,30,0.2)]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => setSlide((s) => (s + 1) % heroSlides.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(96,36,30,0.25)] bg-white/60 text-[var(--color-maroon)] transition-colors hover:bg-[var(--color-maroon)] hover:text-white"
                >
                  <ArrowRight size={16} />
                </button>

                <span className="ml-1 text-[12.5px] font-bold tracking-[0.05em] text-[rgba(96,36,30,0.45)]">
                  {String(slide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ============ RIGHT — matted, duotone image + floating spec card ============ */}
        <div className="relative mx-auto w-full max-w-[460px]">
          {/* stacked layered cards behind, like mounted prints */}
          <div className="absolute -bottom-4 -right-4 -z-20 h-full w-full rotate-[2deg] rounded-[32px] bg-[rgba(96,36,30,0.12)]" />
          <div className="absolute -bottom-7 -right-7 -z-10 h-full w-full rotate-[4deg] rounded-[32px] bg-[rgba(231,123,73,0.18)]" />

          {/* matte frame */}
          <div className="relative rounded-[34px] border border-[rgba(96,36,30,0.12)] bg-[var(--color-white)] p-3 shadow-[var(--shadow-strong)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-[var(--color-cream-alt)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.imageAlt}
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1.02 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{
                    opacity: { duration: 0.6, ease: "easeOut" },
                    scale: { duration: AUTOPLAY_MS / 1000, ease: "linear" },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* brand duotone wash — keeps every photo feeling like it belongs to Kreovix */}
              <div
                className="pointer-events-none absolute inset-0 mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(96,36,30,0.55) 0%, rgba(149,39,29,0.25) 45%, rgba(231,123,73,0.18) 100%)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(23,9,10,0.65)] via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/90 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.04em] text-[var(--color-maroon)] shadow-[0_10px_18px_rgba(0,0,0,0.10)] backdrop-blur-md">
                {active.category}
              </div>

              {/* corner registration marks — small, quiet, on-brand */}
              <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-white/50" />
              <span className="pointer-events-none absolute bottom-5 right-4 h-4 w-4 border-b-2 border-r-2 border-white/40" />
            </div>
          </div>

          {/* floating glass spec card, overlapping the frame */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`spec-${active.category}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="absolute -bottom-8 left-1/2 w-[86%] -translate-x-1/2 rounded-[22px] border border-white/40 bg-[rgba(247,240,234,0.9)] p-5 shadow-[0_24px_50px_rgba(96,36,30,0.18)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-maroon)] text-white">
                  <ActiveIcon size={17} strokeWidth={1.8} />
                </div>
                <p className="text-[11.5px] font-bold uppercase tracking-[0.06em] text-[var(--color-maroon-mid)]">
                  {active.category}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {active.spec.map((line) => (
                  <span
                    key={line}
                    className="rounded-full border border-[rgba(96,36,30,0.12)] bg-[var(--color-cream)] px-3 py-1.5 text-[12.5px] font-semibold text-[var(--color-ink)]"
                  >
                    {line}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;