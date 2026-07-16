import { NavLink } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/Logo.png";
import "./Footer.css";

const PROGRAMMES = ["Day Care", "Playgroup", "Nursery", "LKG", "UKG", "Primary Enrichment"];

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="24" fill="currentColor" />
      <path
        fill="#fff"
        d="M26.5 39V25.5H31l.8-5.3h-5.3v-3.4c0-1.5.8-3 3.3-3h2.3V9.3c-.4-.1-1.9-.3-3.7-.3-3.7 0-6.2 2.2-6.2 6.5v3.7H18v5.3h4.4V39h4.1Z"
      />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
      />
      <circle cx="24" cy="24" r="7.2" fill="none" stroke="currentColor" strokeWidth="3.2" />
      <circle cx="33.2" cy="14.8" r="2.3" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="20" fill="#fff" />
      <rect x="11" y="13" width="26" height="22" rx="6" fill="currentColor" />
      <path fill="#fff" d="M21 19.5v9l8-4.5-8-4.5Z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="24" fill="currentColor" />
      <circle cx="16.2" cy="17" r="2.6" fill="#fff" />
      <path
        fill="#fff"
        d="M13.8 21.2h4.8V34h-4.8V21.2Zm7.6 0h4.6v1.8h.1c.6-1.2 2.2-2.4 4.5-2.4 4.8 0 5.6 3.1 5.6 7V34h-4.8v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V34h-4.8V21.2Z"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/kayoschools/", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/kayoschools/", icon: InstagramIcon },
  { label: "YouTube", href: "http://youtube.com/@KayoInternational", icon: YouTubeIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/kayo-international-school/",
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Kayo International Preschool" className="footer__logo" />
          <p>
            A warm, stimulating home for children aged 6 months to 12 years in Perungudi,
            Chennai &mdash; trusted by 1,000+ families for over a decade.
          </p>
          <div className="footer__social">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/curriculum">Curriculum</NavLink>
          <NavLink to="/services">Programmes</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>

        <div className="footer__col">
          <h4>Programmes</h4>
          {PROGRAMMES.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>

        <div className="footer__col footer__contact">
          <h4>Visit Us</h4>
          <span>
            <MapPin size={17} strokeWidth={1.8} />
            No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai - 600096
          </span>
          <a href="tel:+919884004650">
            <Phone size={17} strokeWidth={1.8} />
            +91 98840 04650
          </a>
          <a href="mailto:chnperungudi@kayointernational.in">
            <Mail size={17} strokeWidth={1.8} />
            chnperungudi@kayointernational.in
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>&copy; {new Date().getFullYear()} Kayo International Preschool &amp; DayCare. All rights reserved.</span>
          <span>Perungudi &middot; Nanmangalam &middot; Pallikaranai &middot; Palavakkam &middot; Taramani</span>
        </div>
      </div>
    </footer>
  );
}
