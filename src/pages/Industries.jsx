import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ShoppingCart,
  Stethoscope,
  Landmark,
  GraduationCap,
  Building2,
  Plane,
  UtensilsCrossed,
  Factory,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const industries = [
  {
    icon: ShoppingCart,
    name: "E-Commerce & Retail",
    desc: "Storefronts, marketplaces, and inventory systems that convert and scale.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    desc: "Patient portals, telemedicine, and compliant health-record systems.",
  },
  {
    icon: Landmark,
    name: "Finance & Fintech",
    desc: "Secure payment systems, lending platforms, and financial dashboards.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Learning management systems and platforms for institutes and cohorts.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    desc: "Listing platforms, CRM tools, and virtual tour experiences.",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    desc: "Booking engines, itinerary planners, and guest experience apps.",
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Delivery",
    desc: "Ordering platforms, delivery logistics, and kitchen management tools.",
  },
  {
    icon: Factory,
    name: "Manufacturing & Logistics",
    desc: "Supply chain tracking, inventory automation, and fleet management.",
  },
];

function Industries() {
  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        title="Software experience across 50+ industries"
        description="Every industry has its own rules and workflows. We bring domain-aware engineering to each one we work in."
        crumb="Industries"
      />

      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-main grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="interactive rounded-[22px] border border-[rgba(96,36,30,0.08)] bg-[var(--color-white)] p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[rgba(96,36,30,0.08)] text-[var(--color-maroon)]">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-[16px] font-bold text-[var(--color-ink)]">
                {name}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-muted-2)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[var(--color-cream-alt)]">
        <div className="container-main flex flex-col items-center gap-6 text-center">
          <span className="section-label">Don't See Your Industry?</span>
          <h2 className="section-heading max-w-[520px] text-[32px] sm:text-[36px] text-[var(--color-ink)]">
            We adapt to your business, not the other way around
          </h2>
          <Link
            to="/contact"
            className="group mt-2 inline-flex h-[54px] items-center gap-2.5 rounded-[18px] bg-[var(--color-maroon)] px-8 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(96,36,30,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-maroon-dark)]"
          >
            Tell Us About Your Business
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

export default Industries;