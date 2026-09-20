import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Target,
  Eye,
  HeartHandshake,
  Award,
  Users,
  Globe,
  Clock,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "1,000+", label: "Projects Delivered" },
  { icon: Globe, value: "10+", label: "Countries" },
  { icon: Clock, value: "8+", label: "Years of Experience" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To help businesses of every size automate, scale, and lead confidently in a digital-first world through dependable software.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the technology partner businesses trust for their most ambitious ideas, across every industry we serve.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    desc: "Transparency, craftsmanship, and long-term partnership guide every project we take on, from the first call to launch and beyond.",
  },
];

const timeline = [
  {
    year: "2017",
    title: "Kreovix is founded",
    desc: "Started as a small web development studio working with local businesses.",
  },
  {
    year: "2019",
    title: "Mobile & MLM expansion",
    desc: "Grew into mobile app development and launched our first MLM software suite.",
  },
  {
    year: "2022",
    title: "AI & Blockchain practice",
    desc: "Built dedicated teams for AI-powered products and Web3 solutions.",
  },
  {
    year: "2026",
    title: "500+ clients across 10+ countries",
    desc: "Now a full-spectrum technology partner serving startups and enterprises worldwide.",
  },
];

const team = [
  { name: "Arjun Verma", role: "Founder & CEO" },
  { name: "Riya Kapoor", role: "Head of Engineering" },
  { name: "Sameer Khan", role: "Head of Design" },
  { name: "Kavya Nair", role: "Head of AI" },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Kreovix"
        title="A technology partner built on trust and craftsmanship"
        description="We're a team of engineers, designers, and strategists who help businesses turn ideas into scalable digital products."
        crumb="About"
      />

      {/* Stats */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="container-main grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-[22px] border border-[rgba(96,36,30,0.08)] bg-[var(--color-white)] py-8 text-center shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[rgba(96,36,30,0.08)] text-[var(--color-maroon)]">
                <Icon size={22} strokeWidth={2} />
              </div>
              <p className="text-[24px] font-extrabold text-[var(--color-ink)]">
                {value}
              </p>
              <p className="text-[13.5px] text-[var(--color-muted-2)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[var(--color-cream-alt)]">
        <div className="container-main grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="section-label">Our Story</span>

            <h2 className="section-heading text-[32px] sm:text-[36px] text-[var(--color-ink)]">
              Building digital products businesses can rely on
            </h2>

            <p className="mt-5 text-[15.5px] leading-relaxed text-[var(--color-muted)]">
              Kreovix started with a simple belief: software should make a
              business faster, not slower. What began as a small web
              development studio has grown into a full-spectrum technology
              partner — spanning web, mobile, MLM, AI, and blockchain — while
              keeping the same close, transparent way of working with every
              client.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--color-muted)]">
              Today we work with founders, operators, and enterprise teams
              across 10+ countries, delivering software that's built to last
              well beyond launch day.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex h-[52px] items-center gap-2.5 rounded-[18px] bg-[var(--color-maroon)] px-7 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(96,36,30,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-maroon-dark)]"
            >
              Work With Us
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="interactive rounded-[28px] bg-gradient-to-br from-[var(--color-maroon)] to-[var(--color-maroon-dark)] p-10 shadow-[var(--shadow-strong)]">
              <p className="text-[15px] leading-relaxed text-white/70">
                "We measure success by how long our clients stay with us —
                not just by how fast we ship."
              </p>
              <p className="mt-6 text-[14px] font-bold text-white">
                Arjun Verma
              </p>
              <p className="text-[13px] text-white/50">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-main">
          <div className="mx-auto max-w-[560px] text-center">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-heading text-[32px] sm:text-[36px] text-[var(--color-ink)]">
              Mission, vision & values
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="interactive rounded-[22px] border border-[rgba(96,36,30,0.08)] bg-[var(--color-white)] p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[rgba(96,36,30,0.08)] text-[var(--color-maroon)]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-[17px] font-bold text-[var(--color-ink)]">
                  {title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-muted-2)]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[var(--color-cream-alt)]">
        <div className="container-main">
          <span className="section-label">Our Journey</span>
          <h2 className="section-heading mt-5 max-w-[500px] text-[32px] sm:text-[36px] text-[var(--color-ink)]">
            From a small studio to a global technology partner
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {timeline.map(({ year, title, desc }) => (
              <div
                key={year}
                className="rounded-[22px] border border-[rgba(96,36,30,0.08)] bg-[var(--color-white)] p-7 shadow-[var(--shadow-soft)]"
              >
                <p className="text-[22px] font-extrabold text-[var(--color-maroon)]">
                  {year}
                </p>
                <p className="mt-3 text-[15px] font-bold text-[var(--color-ink)]">
                  {title}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--color-muted-2)]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-main">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="section-label">Leadership</span>
              <h2 className="section-heading mt-5 text-[32px] sm:text-[36px] text-[var(--color-ink)]">
                The people behind Kreovix
              </h2>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.map(({ name, role }, i) => (
              <div key={name} className="text-center">
                <div
                  className="mx-auto flex h-[110px] w-[110px] items-center justify-center rounded-full text-[24px] font-extrabold text-white"
                  style={{
                    background: [
                      "var(--color-maroon)",
                      "var(--color-maroon-mid)",
                      "var(--color-orange)",
                      "var(--color-maroon-dark)",
                    ][i],
                  }}
                >
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="mt-4 text-[15px] font-bold text-[var(--color-ink)]">
                  {name}
                </p>
                <p className="text-[13px] text-[var(--color-muted-2)]">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;