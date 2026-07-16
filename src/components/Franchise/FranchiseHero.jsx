import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, ShieldCheck, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import "./FranchiseHero.css";
import heroBg from "../../assets/francisses.png";

const EASE = [0.16, 1, 0.3, 1];

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "No Royalty Fees" },
  { icon: TrendingUp, label: "2X ROI Potential" },
  { icon: Award, label: "10+ Years Trusted Brand" },
];

export default function FranchiseHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <section className="fr-hero" ref={ref}>
      <div className="fr-hero__bg" aria-hidden="true">
        <motion.img src={heroBg} alt="" className="fr-hero__bg-img" style={{ y: bgY }} />
        <span className="fr-hero__bg-overlay" />
      </div>
      <div className="fr-hero__backdrop" aria-hidden="true">
        <span className="fr-hero__blob fr-hero__blob--a" />
        <span className="fr-hero__blob fr-hero__blob--b" />
      </div>

      <div className="container fr-hero__inner">
        <nav className="fr-hero__crumb" aria-label="Breadcrumb">
          <Link to="/">
            <Home size={13} strokeWidth={2.2} /> Home
          </Link>
          <span>/</span>
          <span>Franchise</span>
        </nav>

        <motion.span
          className="eyebrow fr-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Franchise Opportunity in India
        </motion.span>

        <motion.h1
          className="fr-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
        >
          Own a Kayo International Preschool Franchise — Let&rsquo;s Grow Together
        </motion.h1>

        <motion.p
          className="fr-hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
        >
          Are you an aspiring entrepreneur looking for a meaningful business venture in the rapidly
          growing early childhood education sector? Kayo International welcomes passionate
          individuals to join our expanding family through our preschool franchise opportunity in
          India. With over a decade of trusted experience, a proven NURTURE Lab curriculum, and a
          reputation built on genuine parent trust, we offer franchise partners a pathway to build
          a successful, rewarding preschool business.
        </motion.p>

        <motion.div
          className="fr-hero__highlights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.26, ease: EASE }}
        >
          {HIGHLIGHTS.map((h, i) => (
            <span className="fr-hero__chip" key={h.label} style={{ "--i": i }}>
              <h.icon size={16} strokeWidth={2} />
              {h.label}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="#enquiry"
          className="btn btn-primary fr-hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.34, ease: EASE }}
        >
          Enquire Now
        </motion.a>
      </div>
    </section>
  );
}
