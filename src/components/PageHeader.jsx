import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function PageHeader({ eyebrow, title, description, crumb }) {
  return (
    <section className="tech-grid relative overflow-hidden border-b border-[rgba(96,36,30,0.10)] bg-[var(--color-cream-alt)] pt-[150px] pb-20">
      <div
        className="pointer-events-none absolute -top-24 right-[-120px] h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(231,123,73,0.35) 0%, rgba(96,36,30,0) 70%)",
        }}
      />

      <div className="container-main relative">
        {eyebrow && (
          <span className="inline-block rounded-full bg-[rgba(96,36,30,0.08)] px-4 py-1.5 text-[13px] font-semibold tracking-[-0.01em] text-[var(--color-maroon)]">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-5 max-w-[620px] text-[42px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)] sm:text-[52px]">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-[540px] text-[16px] leading-relaxed text-[var(--color-muted)]">
            {description}
          </p>
        )}

        <div className="mt-7 flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-muted-2)]">
          <Link to="/" className="transition-colors hover:text-[var(--color-maroon)]">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-[var(--color-maroon)]">{crumb}</span>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;