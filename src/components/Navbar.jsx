import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Industries", path: "/industries" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(96,36,30,0.08)] bg-[var(--color-cream)] text-[var(--color-ink)] shadow-[0_10px_28px_rgba(44,14,11,0.06)] backdrop-blur-xl">
      <div className="container-main">
        <div className="flex h-[86px] items-center justify-between">
          {/* ================================
              LOGO
          ================================= */}

          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <img
              src="/logo.png"
              alt="Kreovix Software Solutions"
              className="h-[52px] w-auto object-contain"
            />
          </Link>

          {/* ================================
              DESKTOP NAVIGATION
          ================================= */}

          <nav className="hidden lg:flex items-center gap-[30px]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  relative
                  py-2
                  text-[15px]
                  font-semibold
                  tracking-[-0.01em]
                  transition-colors
                  duration-300

                  ${
                    isActive
                      ? "text-[var(--color-ink)]"
                      : "text-[rgba(23,19,26,0.7)] hover:text-[var(--color-maroon)]"
                  }

                  after:absolute
                  after:left-0
                  after:-bottom-[2px]
                  after:h-[2px]
                  after:rounded-full
                  after:bg-[var(--color-orange)]
                  after:transition-all
                  after:duration-300

                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* ================================
              RIGHT SIDE
          ================================= */}

          <div className="hidden lg:flex items-center gap-5">
            {/* Search */}

            <button
              type="button"
              aria-label="Search"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-[var(--color-ink)]
                transition-all
                duration-300
                hover:bg-[rgba(96,36,30,0.06)]
                hover:text-[var(--color-maroon)]
              "
            >
              <Search size={21} strokeWidth={2} />
            </button>

            {/* Get a Quote */}

            <Link
              to="/contact"
              className="
                group
                flex
                h-[52px]
                shrink-0
                items-center
                justify-center
                gap-2.5
                rounded-[18px]
                bg-[var(--color-maroon)]
                !px-8
                !py-8
                text-[15px]
                font-bold
                leading-none
                tracking-[-0.01em]
                text-white
                shadow-[0_10px_24px_rgba(96,36,30,0.18)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[var(--color-maroon-dark)]
              "
            >
              <span className="!text-white">Get a Quote</span>

              <ArrowUpRight
                size={17}
                strokeWidth={2.3}
                className="
                  !text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                "
              />
            </Link>
          </div>

          {/* ================================
              MOBILE MENU BUTTON
          ================================= */}

          <button
            type="button"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[rgba(96,36,30,0.12)]
              text-[var(--color-ink)]
              transition-all
              duration-300
              hover:bg-[rgba(96,36,30,0.04)]
              lg:hidden
            "
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ================================
            MOBILE NAVIGATION
        ================================= */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            lg:hidden

            ${
              mobileOpen
                ? "max-h-[600px] opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <nav className="border-t border-[rgba(255,255,255,0.08)] pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3.5
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? "bg-[rgba(96,36,30,0.06)] text-[var(--color-ink)]"
                      : "text-[rgba(23,19,26,0.7)] hover:bg-[rgba(96,36,30,0.04)] hover:text-[var(--color-maroon)]"
                  }
                `
                }
              >
                <span>{item.name}</span>

                <ArrowUpRight size={16} strokeWidth={2} />
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                mt-4
                flex
                h-[52px]
                items-center
                justify-center
                gap-2
                rounded-[18px]
                bg-[var(--color-maroon)]
                px-8
                py-8
                text-sm
                font-bold
                text-white
                shadow-[0_10px_24px_rgba(96,36,30,0.16)]
                transition-all
                duration-300
                hover:bg-[var(--color-maroon-dark)]
              "
            >
              <span className="text-white">Get a Quote</span>

              <ArrowUpRight size={17} className="text-white" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
