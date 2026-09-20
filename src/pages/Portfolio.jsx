import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const filters = ["All", "Web", "Mobile", "MLM", "AI", "Blockchain"];

const projects = [
  { name: "FinTrack", tag: "Finance Management Platform", category: "Web" },
  { name: "EduLearn", tag: "Learning Management System", category: "Web" },
  { name: "NetGrow", tag: "MLM Platform", category: "MLM" },
  { name: "ShopEase", tag: "E-Commerce Platform", category: "Web" },
  { name: "MediConnect", tag: "Telehealth Mobile App", category: "Mobile" },
  { name: "ChainTrace", tag: "Supply Chain Ledger", category: "Blockchain" },
  { name: "InsightAI", tag: "Sales Forecasting Tool", category: "AI" },
  { name: "TripEase", tag: "Travel Booking App", category: "Mobile" },
  { name: "WealthMatrix", tag: "Binary MLM Platform", category: "MLM" },
];

function Portfolio() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Our Portfolio"
        title="Projects that create real value"
        description="A look at the products we've designed, built, and shipped for clients across industries."
        crumb="Portfolio"
      />

      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-main">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all duration-300 ${
                  active === filter
                    ? "bg-[var(--color-maroon)] text-white shadow-[0_8px_18px_rgba(96,36,30,0.18)]"
                    : "border border-[rgba(96,36,30,0.15)] text-[var(--color-ink)] hover:bg-[rgba(96,36,30,0.05)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map(({ name, tag }, i) => (
              <div
                key={name}
                className="interactive overflow-hidden rounded-[22px] border border-[rgba(96,36,30,0.08)] bg-[var(--color-white)] shadow-[var(--shadow-soft)]"
              >
                <div
                  className="flex h-[170px] items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${
                      ["var(--color-maroon)", "var(--color-maroon-dark)", "var(--color-maroon-mid)", "var(--color-maroon-dark)"][i % 4]
                    } 0%, var(--color-ink) 100%)`,
                  }}
                >
                  <span className="text-[13px] font-semibold tracking-[0.02em] text-white/30">
                    {name} Preview
                  </span>
                </div>

                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-[16px] font-bold text-[var(--color-ink)]">
                      {name}
                    </p>
                    <p className="text-[13px] text-[var(--color-muted-2)]">{tag}</p>
                  </div>

                  <Link
                    to="/contact"
                    aria-label={`Enquire about ${name}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(96,36,30,0.08)] text-[var(--color-maroon)] transition-colors duration-300 hover:bg-[var(--color-maroon)] hover:text-white"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-cream-alt)]">
        <div className="container-main flex flex-col items-center gap-6 text-center">
          <h2 className="section-heading max-w-[520px] text-[32px] sm:text-[36px] text-[var(--color-ink)]">
            Have a project in mind?
          </h2>
          <Link
            to="/contact"
            className="group inline-flex h-[54px] items-center gap-2.5 rounded-[18px] bg-[var(--color-maroon)] px-8 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(96,36,30,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-maroon-dark)]"
          >
            Start Your Project
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Portfolio;