import { motion } from "framer-motion";
import { Home, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/1.png";
import "./CareersHero.css";

const EASE = [0.16, 1, 0.3, 1];

const BADGES = [
  { icon: Star, value: "4.9★", label: "Google Rating", top: "10%", left: "-8%", rotate: -6 },
  { icon: ShieldCheck, value: "10+", label: "Years Trusted", top: "72%", left: "58%", rotate: 5 },
];

export default function CareersHero() {
  return (
    <section className="cr-hero">
      <div className="container cr-hero__inner">
        <div className="cr-hero__visual" aria-hidden="true">
          <span className="cr-hero__frame-backing" />

          <div className="cr-hero__frame">
            <img src={heroImage} alt="" className="cr-hero__frame-img" />
            <span className="cr-hero__frame-tint" />
          </div>

          <span className="cr-hero__frame-tag">
            <Sparkles size={13} strokeWidth={2.2} />
            We're Hiring
          </span>

          {BADGES.map((b, i) => (
            <motion.div
              key={b.label}
              className="cr-hero__badge"
              style={{ top: b.top, left: b.left, "--badge-rotate": `${b.rotate}deg` }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: EASE }}
              whileHover={{ scale: 1.06 }}
            >
              <span className="cr-hero__badge-icon">
                <b.icon strokeWidth={1.8} />
              </span>
              <strong>{b.value}</strong>
              <span>{b.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="cr-hero__text">
          <nav className="cr-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Careers</span>
          </nav>

          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Join Team Kayo
          </motion.span>

          <motion.h1
            className="cr-hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
          >
            Meaningful Preschool Teaching Careers in Chennai
          </motion.h1>

          <motion.p
            className="cr-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
          >
            If you have been searching for early childhood educator jobs on OMR, Montessori
            teacher jobs in Chennai, or a preschool teaching career in Perungudi where you are
            valued, supported, and inspired every single day, Team Kayo is waiting for you.
          </motion.p>

          <motion.p
            className="cr-hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: EASE }}
          >
            Join a preschool with 10+ years of trusted excellence, a 4.9★ Google rating, and a
            founder-led culture that puts both children and educators first.
          </motion.p>

          <motion.div
            className="cr-hero__cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: EASE }}
          >
            <a href="#apply" className="btn btn-primary cr-hero__cta">
              Apply Now
            </a>
            <a href="#roles" className="btn btn-outline cr-hero__cta">
              View Open Roles
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
