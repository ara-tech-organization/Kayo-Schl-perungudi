import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, DoorOpen, Heart, Home, MessageCircle, MessageSquareText, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "../common/Magnetic";
import FloatingShapes from "../common/FloatingShapes";
import Counter from "../common/Counter";
import "./FamilyConnectHero.css";
import photoMain from "../../assets/Family connect.png";
import photoB from "../../assets/Team.png";
import photoC from "../../assets/2.png";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 170, top: "4%", left: "-2%", speed: 0.3, float: 20, dur: 8 },
  { type: "blob", color: "var(--color-secondary-light)", size: 140, bottom: "14%", right: "-3%", speed: 0.24, float: 16, dur: 9 },
  { type: "star", color: "var(--color-gold)", size: 32, top: "16%", right: "12%", speed: 0.36, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "24%", left: "6%", speed: 0.44, float: 14, dur: 5, opacity: 0.8 },
  { type: "dot", color: "var(--color-secondary)", size: 18, top: "34%", left: "42%", speed: 0.5, float: 22, dur: 6, opacity: 0.7 },
  { type: "squiggle", color: "var(--color-primary)", size: 66, bottom: "18%", left: "38%", speed: 0.3, float: 12, dur: 7, opacity: 0.4 },
];

const HEADING_WORDS = ["Family", "Connect", "—", "Where", "Parents", "Are", "True", "Partners"];
const HIGHLIGHT_WORDS = new Set(["True", "Partners"]);

const STATS = [
  { icon: Star, value: 4.9, decimals: 1, suffix: "★", label: "Family rating" },
  { icon: Users, value: 1000, suffix: "+", label: "Happy families" },
  { icon: Home, value: 10, suffix: "+", label: "Years together" },
];

const wordContainer = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } } };
const wordItem = {
  hidden: { opacity: 0, y: 24, rotate: -3 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function FamilyConnectHero() {
  return (
    <section className="fc-hero">
      <div className="fc-hero__backdrop" aria-hidden="true">
        <span className="fc-hero__mesh" />
        <span className="fc-hero__grain" />
      </div>
      <FloatingShapes items={SHAPES} />

      <div className="container fc-hero__inner">
        <div className="fc-hero__text">
          <motion.nav
            className="fc-hero__crumb"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Family Connect</span>
          </motion.nav>

          <motion.span
            className="fc-hero__eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          >
            <Heart size={13} strokeWidth={2.6} /> Family Engagement at Kayo
          </motion.span>

          <motion.h1 className="fc-hero__title" variants={wordContainer} initial="hidden" animate="show">
            {HEADING_WORDS.map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <motion.span
                  variants={wordItem}
                  className={`fc-hero__word ${HIGHLIGHT_WORDS.has(word) ? "fc-hero__word--mark" : ""}`}
                >
                  {word}
                </motion.span>
                {i < HEADING_WORDS.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </motion.h1>

          <motion.p
            className="fc-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.6, ease: EASE }}
          >
            At Kayo International, parents are never spectators — they are active partners in every
            child&rsquo;s journey. Our Family Connect programme is one of the most comprehensive
            parent-involvement experiences a preschool in Chennai has to offer.
          </motion.p>

          <motion.div
            className="fc-hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          >
            {STATS.map((s) => (
              <span className="fc-hero__stat" key={s.label}>
                <span className="fc-hero__stat-icon">
                  <s.icon size={16} strokeWidth={2} fill={s.icon === Star ? "currentColor" : "none"} />
                </span>
                <strong>
                  <Counter value={s.value} suffix={s.suffix || ""} decimals={s.decimals || 0} />
                </strong>
                <small>{s.label}</small>
              </span>
            ))}
          </motion.div>

          <motion.div
            className="fc-hero__cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
          >
            <Magnetic strength={0.3}>
              <a href="/#enquiry" className="btn btn-primary">
                Book a Visit <ArrowRight size={18} />
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a href="https://wa.me/919884004650" target="_blank" rel="noreferrer" className="btn btn-outline">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="fc-hero__collage"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          <motion.div
            className="fc-hero__photo fc-hero__photo--b"
            initial={{ rotate: 6 }}
            animate={{ rotate: 5 }}
            whileHover={{ rotate: 0, y: -8, transition: { type: "spring", stiffness: 220, damping: 16 } }}
          >
            <img src={photoB} alt="" aria-hidden="true" />
          </motion.div>

          <motion.div
            className="fc-hero__photo fc-hero__photo--c"
            initial={{ rotate: -7 }}
            animate={{ rotate: -5 }}
            whileHover={{ rotate: 0, y: -8, transition: { type: "spring", stiffness: 220, damping: 16 } }}
          >
            <img src={photoC} alt="" aria-hidden="true" />
          </motion.div>

          <motion.div
            className="fc-hero__photo fc-hero__photo--a"
            initial={{ rotate: -2 }}
            animate={{ rotate: -1.5 }}
            whileHover={{ rotate: 0, y: -8, transition: { type: "spring", stiffness: 220, damping: 16 } }}
          >
            <span className="fc-hero__tape" aria-hidden="true" />
            <img
              src={photoMain}
              alt="Parents and children connecting together at Kayo International Preschool, Perungudi Chennai"
            />
            <span className="fc-hero__caption">Together, every day &hearts;</span>
          </motion.div>

          <motion.div
            className="fc-hero__badge fc-hero__badge--chat"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.7, ease: EASE },
              y: { duration: 5, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <MessageSquareText size={18} strokeWidth={2} />
            <span>Daily updates</span>
          </motion.div>

          <motion.div
            className="fc-hero__badge fc-hero__badge--door"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.85, ease: EASE },
              y: { duration: 4.6, delay: 1.1, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <DoorOpen size={18} strokeWidth={2} />
            <span>Open-door policy</span>
          </motion.div>

          <motion.span
            className="fc-hero__heart"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, -8, 8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.9 },
              scale: { duration: 0.5, delay: 0.9 },
              rotate: { duration: 5, delay: 1.4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Heart size={20} strokeWidth={2.4} fill="currentColor" />
          </motion.span>
        </motion.div>
      </div>

      <svg className="fc-hero__wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,40 C240,100 480,0 720,30 C960,60 1200,110 1440,50 L1440,100 L0,100 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
