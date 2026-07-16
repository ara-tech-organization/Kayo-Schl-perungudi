import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import logo from "../../assets/Logo.png";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  {
    label: "About",
    to: "/about-us",
    children: [
      { to: "/about-us", label: "Our Story" },
      { to: "/curriculum", label: "Curriculum" },
      { to: "/franchise", label: "Franchise" },
    ],
  },
  {
    label: "Careers",
    to: "/careers",
    children: [
      { to: "/careers", label: "Job Openings" },
      { to: "/family-connect", label: "Family Connect" },
      { to: "/policies", label: "Policies" },
    ],
  },
  { to: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileGroup, setMobileGroup] = useState(null);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function openDropdown(label) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown(label);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setDropdown(null), 150);
  }

  function isGroupActive(link) {
    if (!link.children) return false;
    return link.children.some((c) => pathname === c.to || pathname.startsWith(c.to + "/"));
  }

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Kayo International Preschool" className="navbar__logo" />
        </NavLink>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="navbar__group"
                onMouseEnter={() => openDropdown(link.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={`navbar__link navbar__link--trigger ${
                    isGroupActive(link) ? "is-active" : ""
                  }`}
                  aria-expanded={dropdown === link.label}
                  onClick={() => setDropdown((d) => (d === link.label ? null : link.label))}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    strokeWidth={2.3}
                    className={`navbar__chevron ${dropdown === link.label ? "is-open" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {dropdown === link.label && (
                    <motion.div
                      className="navbar__dropdown"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {link.children.map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          className={({ isActive }) =>
                            `navbar__dropdown-link ${isActive ? "is-active" : ""}`
                          }
                          onClick={() => setDropdown(null)}
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="navbar__actions">
          <a href="tel:+919884004650" className="navbar__phone">
            <Phone size={16} strokeWidth={2} />
            <span>+91 98840 04650</span>
          </a>
          <Link to="/contact-us" className="btn btn-primary navbar__cta">
            Start Today
          </Link>
          <button
            type="button"
            className="navbar__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container navbar__mobile-inner">
              {LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="navbar__mobile-group">
                    <button
                      type="button"
                      className={`navbar__mobile-link navbar__mobile-link--trigger ${
                        isGroupActive(link) ? "is-active" : ""
                      }`}
                      aria-expanded={mobileGroup === link.label}
                      onClick={() =>
                        setMobileGroup((g) => (g === link.label ? null : link.label))
                      }
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`navbar__chevron ${
                          mobileGroup === link.label ? "is-open" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileGroup === link.label && (
                        <motion.div
                          className="navbar__mobile-submenu"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {link.children.map((c) => (
                            <NavLink
                              key={c.to}
                              to={c.to}
                              className={({ isActive }) =>
                                `navbar__mobile-sublink ${isActive ? "is-active" : ""}`
                              }
                              onClick={() => setOpen(false)}
                            >
                              {c.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) => `navbar__mobile-link ${isActive ? "is-active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <a href="tel:+919884004650" className="navbar__mobile-link">
                <Phone size={16} /> +91 98840 04650
              </a>
              <Link to="/contact-us" className="btn btn-primary" onClick={() => setOpen(false)}>
                Start Today
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
