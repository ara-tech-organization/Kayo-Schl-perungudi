import { Fragment, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Home, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "../common/Magnetic";
import FloatingShapes from "../common/FloatingShapes";
import Counter from "../common/Counter";
import "./CareersHero.css";
import heroImage from "../../assets/1.png";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-secondary-light)", size: 180, top: "2%", right: "3%", speed: 0.32, float: 20, dur: 8 },
  { type: "blob", color: "var(--color-primary-light)", size: 140, bottom: "12%", left: "-2%", speed: 0.26, float: 16, dur: 9 },
  { type: "ring", color: "var(--color-secondary)", size: 88, top: "56%", right: "9%", speed: 0.42, float: 14, dur: 6, opacity: 0.5 },
  { type: "star", color: "var(--color-gold)", size: 36, top: "14%", left: "5%", speed: 0.3, float: 16, dur: 6, rotate: 16 },
  { type: "star", color: "var(--color-orange)", size: 24, bottom: "20%", right: "18%", speed: 0.46, float: 20, dur: 7, rotate: -18 },
  { type: "plus", color: "var(--color-primary)", size: 22, top: "40%", left: "3%", speed: 0.4, float: 14, dur: 5, opacity: 0.8 },
  { type: "dot", color: "var(--color-orange)", size: 22, top: "26%", left: "46%", speed: 0.5, float: 22, dur: 5, opacity: 0.85 },
  { type: "squiggle", color: "var(--color-primary)", size: 70, top: "72%", left: "40%", speed: 0.28, float: 12, dur: 7, opacity: 0.45 },
];

const HEADING_WORDS = ["Meaningful", "Preschool", "Teaching", "Careers", "in", "Chennai"];
const HIGHLIGHT_WORDS = new Set(["Teaching", "Careers"]);

const STATS = [
  { value: 4.9, decimals: 1, suffix: "★", label: "Google rating" },
  { value: 10, suffix: "+", label: "Years trusted" },
  { value: 12, suffix: "+", label: "Open roles" },
];

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 24, rotate: -3 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function CareersHero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const tiltX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 140, damping: 16 });
  const tiltY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 140, damping: 16 });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <section className="cr-hero">
      <div className="cr-hero__backdrop" aria-hidden="true">
        <span className="cr-hero__mesh" />
        <span className="cr-hero__grain" />
      </div>
      <FloatingShapes items={SHAPES} />

      <div className="container cr-hero__inner">
        <div className="cr-hero__text">
          <motion.nav
            className="cr-hero__crumb"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Careers</span>
          </motion.nav>

          <motion.span
            className="cr-hero__eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          >
            <Sparkles size={14} strokeWidth={2.4} /> Join Team Kayo
          </motion.span>

          <motion.h1 className="cr-hero__title" variants={wordContainer} initial="hidden" animate="show">
            {HEADING_WORDS.map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <motion.span
                  variants={wordItem}
                  className={`cr-hero__word ${HIGHLIGHT_WORDS.has(word) ? "cr-hero__word--mark" : ""}`}
                >
                  {word}
                </motion.span>
                {i < HEADING_WORDS.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </motion.h1>

          <motion.p
            className="cr-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55, ease: EASE }}
          >
            Searching for early childhood educator jobs on OMR, Montessori teacher jobs in Chennai,
            or a preschool teaching career in Perungudi where you are valued, supported, and
            inspired every single day? Team Kayo is waiting for you.
          </motion.p>

          <motion.div
            className="cr-hero__cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
          >
            <Magnetic strength={0.3}>
              <a href="#apply" className="btn btn-primary">
                Apply Now <ArrowRight size={18} />
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a href="#roles" className="btn btn-outline">
                <MessageCircle size={18} /> View Open Roles
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            className="cr-hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          >
            {STATS.map((s, i) => (
              <div className="cr-hero__stat" key={s.label}>
                <strong>
                  <Counter value={s.value} suffix={s.suffix || ""} decimals={s.decimals || 0} />
                </strong>
                <span>{s.label}</span>
                {i < STATS.length - 1 && <i className="cr-hero__stat-div" aria-hidden="true" />}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="cr-hero__visual"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ perspective: 1200 }}
        >
          <span className="cr-hero__visual-back" aria-hidden="true" />
          <motion.span
            className="cr-hero__dash"
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="cr-hero__card"
            style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
          >
            <img src={heroImage} alt="Educators nurturing young learners at Kayo International, Perungudi Chennai" className="cr-hero__card-img" />
            <span className="cr-hero__card-tint" aria-hidden="true" />
            <span className="cr-hero__card-glow" aria-hidden="true" />
          </motion.div>

          <motion.span
            className="cr-hero__tag"
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            <Sparkles size={13} strokeWidth={2.4} /> We&rsquo;re Hiring
          </motion.span>

          <motion.div
            className="cr-hero__badge cr-hero__badge--rating"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.6, ease: EASE },
              y: { duration: 4.5, delay: 1.1, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="cr-hero__badge-icon">
              <Star size={18} strokeWidth={2} fill="currentColor" />
            </span>
            <span>
              <strong>4.9★ Rated</strong>
              <span>by our families</span>
            </span>
          </motion.div>

          <motion.div
            className="cr-hero__badge cr-hero__badge--safe"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.7, ease: EASE },
              y: { duration: 5, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="cr-hero__badge-icon cr-hero__badge-icon--secondary">
              <ShieldCheck size={18} strokeWidth={2} />
            </span>
            <span>
              <strong>Founder-Led</strong>
              <span>culture that cares</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      <svg className="cr-hero__wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,32 C240,60 480,4 720,20 C960,36 1200,58 1440,28 L1440,60 L0,60 Z" fill="var(--color-bg)" />
      </svg>
    </section>
  );
}
