import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Network,
  GitBranch,
  Grid3x3,
  Wallet,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const products = [
  {
    icon: Network,
    name: "Kreovix MLM Suite",
    tag: "Binary, Matrix & Unilevel",
    desc: "A ready-to-launch MLM platform with genealogy trees, e-wallets, and automated payouts — customizable to any compensation plan.",
  },
  {
    icon: Wallet,
    name: "PayFlow",
    tag: "Payments & Wallet System",
    desc: "A white-label wallet and payment gateway built for platforms that need multi-currency transactions and instant settlements.",
  },
  {
    icon: ShoppingBag,
    name: "ShopEase Commerce",
    tag: "E-Commerce Engine",
    desc: "A headless commerce engine with inventory, multi-vendor support, and built-in marketing tools for growing online stores.",
  },
  {
    icon: GraduationCap,
    name: "EduLearn LMS",
    tag: "Learning Management",
    desc: "A learning management system with live classes, assessments, and certification — used by institutes and corporate teams alike.",
  },
  {
    icon: Grid3x3,
    name: "NetGrow CRM",
    tag: "Sales & Network CRM",
    desc: "A CRM purpose-built for network marketing and direct sales teams to track leads, teams, and performance in one place.",
  },
  {
    icon: GitBranch,
    name: "ChainTrace",
    tag: "Blockchain Ledger",
    desc: "A permissioned blockchain ledger for supply chain and asset tracking, with a dashboard built for non-technical teams.",
  },
];

function Products() {
  return (
    <>
      <PageHeader
        eyebrow="Our Products"
        title="Ready-made platforms you can launch and customize"
        description="Beyond custom development, we maintain a suite of proven products businesses use to launch faster."
        crumb="Products"
      />

      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-main grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map(({ icon: Icon, name, tag, desc }) => (
            <div
              key={name}
              className="interactive flex flex-col rounded-[24px] border border-[rgba(96,36,30,0.08)] bg-[var(--color-white)] p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[rgba(96,36,30,0.08)] text-[var(--color-maroon)]">
                <Icon size={24} strokeWidth={2} />
              </div>

              <h3 className="mt-6 text-[18px] font-bold text-[var(--color-ink)]">
                {name}
              </h3>

              <span className="mt-1.5 inline-block w-fit rounded-full bg-[rgba(96,36,30,0.08)] px-3 py-1 text-[12px] font-semibold text-[var(--color-maroon)]">
                {tag}
              </span>

              <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-[var(--color-muted)]">
                {desc}
              </p>

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-bold text-[var(--color-maroon)]"
              >
                Request a Demo
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[var(--color-cream-alt)]">
        <div className="container-main flex flex-col items-center gap-6 text-center">
          <span className="section-label">Need Something Custom?</span>
          <h2 className="section-heading max-w-[520px] text-[32px] sm:text-[36px] text-[var(--color-ink)]">
            Every product can be tailored to your exact requirements
          </h2>
          <p className="max-w-[460px] text-[15.5px] leading-relaxed text-[var(--color-muted)]">
            Start with a proven foundation and we'll customize the features,
            branding, and integrations around your business.
          </p>
          <Link
            to="/contact"
            className="group mt-2 inline-flex h-[54px] items-center gap-2.5 rounded-[18px] bg-[var(--color-maroon)] px-8 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(96,36,30,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-maroon-dark)]"
          >
            Get a Quote
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

export default Products;