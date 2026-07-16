import { NavLink } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/Logo.png";
import "./Footer.css";

const PROGRAMMES = ["Day Care", "Playgroup", "Nursery", "LKG", "UKG", "Primary Enrichment"];

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15.5 8.5h-2c-.55 0-1 .45-1 1V12h3l-.4 3h-2.6v7h-3v-7H7.5v-3h2v-2.2C9.5 7.24 11.24 5.5 13.8 5.5h1.7v3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.3 9.5v5l4.4-2.5-4.4-2.5Z" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="6.3" cy="6.6" r="1.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.8 10.2h3v9.3h-3v-9.3Zm5.8 0h2.9v1.3h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.66 2 3.66 4.6v5h-3v-4.4c0-1.05-.02-2.4-1.46-2.4-1.47 0-1.7 1.15-1.7 2.33v4.47h-3v-9.35Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
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
                <link.icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
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
          <span>Heart crafted by Ara Sisover Technology</span>
        </div>
      </div>
    </footer>
  );
}
