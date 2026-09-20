import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

/* ================================
   INLINE SOCIAL ICONS
   (lucide-react dropped brand/logo
   icons in newer versions, so these
   are plain inline SVGs instead)
================================= */

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.35C16.2 4.3 15.2 4.2 14 4.2c-2.4 0-4 1.45-4 4.1V10.5H7.5v3H10V21h3.5z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 3H21l-6.9 7.9L22.2 21h-6.4l-5-6.5L4.9 21H2.8l7.4-8.5L2.2 3h6.5l4.5 6 5.7-6Zm-1.1 16.2h1.2L7.3 4.7H6l11.8 14.5Z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5A1.96 1.96 0 1 0 5.28 7.4a1.96 1.96 0 0 0-.03-3.9ZM20.44 20h-3.37v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.5V8.5h3.23v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.43 0 4.46 2.26 4.46 5.19V20Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const linkGroups = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Industries", path: "/industries" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", path: "/services" },
      { name: "Mobile App Development", path: "/services" },
      { name: "MLM Software", path: "/products" },
      { name: "AI Solutions", path: "/services" },
      { name: "Blockchain / Web3", path: "/services" },
    ],
  },
];

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
];

function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,var(--color-maroon)_0%,var(--color-maroon-dark)_100%)] text-white">
      <div className="container-main">
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Kreovix Software Solutions"
                className="h-[46px] w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-5 max-w-[320px] text-[15px] leading-relaxed text-white/55">
              We help businesses automate, grow and lead in a digital-first
              world with web, mobile, MLM, AI and blockchain solutions.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:border-[rgba(231,123,73,0.45)] hover:bg-[var(--color-maroon)] hover:text-white"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-[14px] font-bold text-white">
                {group.title}
              </h4>

              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-1 text-[14.5px] text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[14px] font-bold text-white">Get in Touch</h4>

            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3 text-[14.5px] text-white/55">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[var(--color-orange)]" />
                <span>Malviya Nagar, Jaipur, Rajasthan, India</span>
              </li>

              <li className="flex items-center gap-3 text-[14.5px] text-white/55">
                <Phone size={17} className="shrink-0 text-[var(--color-orange)]" />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3 text-[14.5px] text-white/55">
                <Mail size={17} className="shrink-0 text-[var(--color-orange)]" />
                <span>hello@kreovix.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-[13.5px] text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Kreovix Software Solutions. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;