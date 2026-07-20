import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Sparkles, GraduationCap, Hand } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingShapes from "../common/FloatingShapes";
import Magnetic from "../common/Magnetic";
import "./CurriculumHero.css";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 180, top: "4%", left: "-3%", speed: 0.3, float: 20, dur: 8 },
  { type: "blob", color: "var(--color-secondary-light)", size: 150, bottom: "8%", right: "-2%", speed: 0.24, float: 16, dur: 9 },
  { type: "cloud", color: "var(--color-surface)", size: 72, top: "9%", left: "8%", speed: 0.18, float: 14, dur: 10, opacity: 0.9 },
  { type: "cloud", color: "var(--color-gold-light)", size: 52, top: "26%", right: "5%", speed: 0.22, float: 12, dur: 9, opacity: 0.85, delay: 1 },
  { type: "star", color: "var(--color-gold)", size: 32, top: "14%", right: "9%", speed: 0.38, float: 18, dur: 6, rotate: 16, spin: true },
  { type: "star", color: "var(--color-orange)", size: 20, top: "42%", left: "5%", speed: 0.46, float: 16, dur: 7, rotate: -14, delay: 0.6, className: "curr-hero__twinkle" },
  { type: "star", color: "var(--color-secondary-dark)", size: 15, bottom: "30%", right: "22%", speed: 0.34, float: 14, dur: 6.5, spin: true, opacity: 0.7 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "22%", left: "7%", speed: 0.44, float: 14, dur: 5, opacity: 0.8 },
  { type: "plus", color: "var(--color-primary)", size: 14, top: "12%", left: "37%", speed: 0.5, float: 18, dur: 6, opacity: 0.5, delay: 0.4 },
  { type: "dot", color: "var(--color-secondary)", size: 18, top: "30%", left: "12%", speed: 0.5, float: 22, dur: 6, opacity: 0.7 },
  { type: "dot", color: "var(--color-gold)", size: 12, top: "50%", right: "12%", speed: 0.56, float: 20, dur: 5.5, opacity: 0.6, delay: 0.8 },
  { type: "dot", color: "var(--color-primary-light)", size: 20, bottom: "40%", left: "18%", speed: 0.4, float: 16, dur: 7, opacity: 0.5 },
  { type: "ring", color: "var(--color-primary)", size: 40, bottom: "18%", left: "15%", speed: 0.3, float: 12, dur: 8, opacity: 0.3 },
  { type: "triangle", color: "var(--color-secondary-dark)", size: 20, top: "22%", left: "24%", speed: 0.42, float: 15, dur: 6, rotate: 20, opacity: 0.45 },
  { type: "squiggle", color: "var(--color-primary)", size: 70, bottom: "16%", right: "14%", speed: 0.3, float: 12, dur: 7, opacity: 0.4 },
  { type: "squiggle", color: "var(--color-secondary)", size: 54, top: "7%", right: "27%", speed: 0.26, float: 10, dur: 8, opacity: 0.32, delay: 0.5 },
];

const BLOCKS_STAGGER = {
  hidden: {},
  show: { transition: { delayChildren: 0.35, staggerChildren: 0.07 } },
};

/* Entrance is opacity-only so the staggered reveal composes with (never fights)
   the CSS `hero-bob` idle animation that owns each block button's transform. */
const BLOCK_FADE = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: EASE } },
};
const BLOCK_POP = BLOCK_FADE;

const LETTERS = [
  { letter: "N", word: "Nurturing", tone: "primary" },
  { letter: "U", word: "Unique", tone: "secondary" },
  { letter: "R", word: "Resources", tone: "gold" },
  { letter: "T", word: "Through", tone: "orange" },
  { letter: "U", word: "Understanding", tone: "primary" },
  { letter: "R", word: "Respect &", tone: "secondary" },
  { letter: "E", word: "Exploration", tone: "gold" },
];

export default function CurriculumHero() {
  const [active, setActive] = useState(null);
  const current = active !== null ? LETTERS[active] : null;

  return (
    <section className="curr-hero">
      <div className="curr-hero__backdrop" aria-hidden="true">
        <span className="curr-hero__mesh" />
        <span className="curr-hero__grain" />
      </div>
      <FloatingShapes items={SHAPES} />

      <div className="container curr-hero__inner">
        {/* ---- Left: copy ---- */}
        <div className="curr-hero__copy">
          <motion.nav
            className="curr-hero__crumb"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Curriculum</span>
          </motion.nav>

          <motion.span
            className="eyebrow curr-hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.04, ease: EASE }}
          >
            <Sparkles size={14} strokeWidth={2.2} /> The NURTURE Lab Curriculum
          </motion.span>

          <motion.h1
            className="curr-hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
          >
            Where <span className="curr-hero__mark">Montessori Meets STEM</span> in Chennai
          </motion.h1>

          <motion.p
            className="curr-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
          >
            At KAYO International, every child is born with extraordinary potential. Our NURTURE Lab
            curriculum in Perungudi is an innovative fusion of Montessori methodology, STEM education,
            play-based learning and Howard Gardner&rsquo;s Multiple Intelligence Theory — designed to
            unlock that potential from the earliest years. A Montessori preschool Chennai families
            trust, serving Perungudi, OMR, Thoraipakkam and Sholinganallur.
          </motion.p>

          <motion.div
            className="curr-hero__founder"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: EASE }}
          >
            <span className="curr-hero__founder-badge" aria-hidden="true">
              <GraduationCap size={20} strokeWidth={1.9} />
            </span>
            <p>
              Created under the guidance of our founder <strong>Veena Sundaramurthy</strong> — a
              qualified professional in Early Childhood Education &amp; Child Psychology — the
              curriculum adapts to your child&rsquo;s unique learning style, never a rigid framework.
            </p>
          </motion.div>
        </div>

        {/* ---- Right: interactive block play-mat ---- */}
        <motion.div
          className="curr-hero__stage"
          initial={{ opacity: 0, y: 28, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
        >
          <Magnetic as="span" strength={0.4} className="curr-hero__stage-tag" aria-hidden="true">
            <Hand size={14} strokeWidth={2.2} /> Play with the blocks
          </Magnetic>

          <p className="curr-hero__stage-title">
            The name <strong>NURTURE</strong> says it all
          </p>

          <motion.div
            className="curr-hero__blocks"
            variants={BLOCKS_STAGGER}
            initial="hidden"
            animate="show"
          >
            {LETTERS.map((l, i) => (
              <motion.button
                type="button"
                key={`${l.letter}-${i}`}
                variants={BLOCK_POP}
                whileHover={{
                  y: [0, -16, 0, -7, -4],
                  rotate: [0, 8, -6, 4, 0],
                  scale: [1, 1.1, 1.02, 1.06, 1.05],
                  transition: { duration: 0.6, ease: EASE },
                }}
                whileFocus={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                style={{ "--bob-delay": `${i * -0.5}s` }}
                className={`curr-hero__block curr-hero__block--${l.tone} ${
                  active === i ? "is-active" : ""
                }`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onBlur={() => setActive(null)}
                aria-label={`${l.letter} — ${l.word}`}
              >
                <span className="curr-hero__block-face">{l.letter}</span>
                <span className="curr-hero__block-word">{l.word}</span>
              </motion.button>
            ))}
          </motion.div>

          <p className="curr-hero__reveal" aria-live="polite">
            {current ? (
              <>
                <b>{current.letter}</b> is for {current.word.replace(/\s*&\s*$/, "")}
              </>
            ) : (
              "Nurturing Unique Resources Through Understanding, Respect & Exploration"
            )}
          </p>
        </motion.div>
      </div>

      <svg className="curr-hero__wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,36 C240,68 480,8 720,26 C960,44 1200,64 1440,30 L1440,70 L0,70 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
