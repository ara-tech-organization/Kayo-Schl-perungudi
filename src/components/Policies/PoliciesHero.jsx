import { motion } from "framer-motion";
import {
  Home,
  Sparkles,
  Phone,
  ArrowDown,
  FileCheck2,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import policiesImage from "../../assets/3.png";
import "./PoliciesHero.css";

const EASE = [0.16, 1, 0.3, 1];

const STATS = [
  { value: "12", label: "Documented Policies" },
  { value: "24/7", label: "Campus Safety" },
  { value: "10+", label: "Years of Trust" },
];

export default function PoliciesHero() {
  return (
    <section className="pol-hero">
      <div className="pol-hero__wash" aria-hidden="true" />

      <div className="container pol-hero__inner">
        <div className="pol-hero__copy">
          <nav className="pol-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Policies</span>
          </nav>

          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Safety, Transparency &amp; Peace of Mind
          </motion.span>

          <motion.h1
            className="pol-hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
          >
            Our Preschool Policies — Safety, Transparency &amp; Peace of Mind
          </motion.h1>

          <motion.p
            className="pol-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
          >
            At KAYO INTERNATIONAL, we believe every parent deserves complete clarity about how we
            care for their children. Over the past decade, we have earned the trust of Chennai
            families by placing child safety, hygiene, and open communication at the centre of
            everything we do. Our policies are designed to exceed parent expectations — creating a
            secure environment where children explore, learn, and grow with confidence.
          </motion.p>

          <motion.div
            className="pol-hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: EASE }}
          >
            <a href="tel:+919884004650" className="btn btn-primary">
              <Phone size={17} strokeWidth={2.2} /> Call Now
            </a>
            <a href="#policies" className="pol-hero__jump">
              Explore Our Policies
              <span className="pol-hero__jump-icon">
                <ArrowDown size={15} strokeWidth={2.2} />
              </span>
            </a>
          </motion.div>

          <motion.div
            className="pol-hero__stats"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32, ease: EASE }}
          >
            {STATS.map((s) => (
              <div className="pol-hero__stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="pol-hero__visual"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          <span className="pol-hero__ring" aria-hidden="true" />

          <div className="pol-hero__art">
            <img
              src={policiesImage}
              alt="Kayo International staff and families together at a school event"
              className="pol-hero__image"
            />
            <div className="pol-hero__image-badge">Family-First Safety Standards</div>
          </div>

          <motion.div
            className="pol-hero__floater pol-hero__floater--transparency"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.55, ease: EASE },
              y: { duration: 4.5, delay: 1.1, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="pol-hero__floater-icon">
              <FileCheck2 size={18} strokeWidth={2} />
            </span>
            <span>
              <strong>100% Transparent</strong>
              <span>Every policy, plainly shared</span>
            </span>
          </motion.div>

          <motion.div
            className="pol-hero__floater pol-hero__floater--rating"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.65, ease: EASE },
              y: { duration: 5, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="pol-hero__floater-icon pol-hero__floater-icon--secondary">
              <Star size={18} strokeWidth={2} />
            </span>
            <span>
              <strong>4.9★ Rated</strong>
              <span>By Chennai families</span>
            </span>
          </motion.div>

          <span className="pol-hero__sparkle" aria-hidden="true">
            <Sparkles size={20} strokeWidth={1.6} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
