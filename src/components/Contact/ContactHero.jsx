import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Home,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingShapes from "../common/FloatingShapes";
import "./ContactHero.css";

const EASE = [0.16, 1, 0.3, 1];

const HEADING_WORDS = ["Let's", "Start", "a", "Happy", "Conversation"];
const HIGHLIGHT_WORDS = new Set(["Happy", "Conversation"]);

const HERO_SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 170, top: "8%", right: "5%", speed: 0.32, float: 20, dur: 8 },
  { type: "blob", color: "var(--color-secondary-light)", size: 120, bottom: "18%", left: "1%", speed: 0.28, float: 16, dur: 7 },
  { type: "ring", color: "var(--color-secondary)", size: 84, top: "60%", right: "10%", speed: 0.44, float: 14, dur: 6, opacity: 0.5 },
  { type: "dot", color: "var(--color-orange)", size: 22, top: "22%", left: "44%", speed: 0.5, float: 22, dur: 5, opacity: 0.9 },
  { type: "star", color: "var(--color-gold)", size: 36, top: "14%", left: "5%", speed: 0.3, float: 16, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-secondary-dark)", size: 22, top: "44%", left: "3%", speed: 0.4, float: 14, dur: 5 },
  { type: "squiggle", color: "var(--color-primary)", size: 70, top: "72%", left: "42%", speed: 0.26, float: 12, dur: 7, opacity: 0.5 },
  { type: "cloud", color: "var(--color-surface)", size: 62, top: "12%", left: "60%", speed: 0.22, float: 14, dur: 9 },
];

const CHANNELS = [
  {
    icon: Phone,
    tone: "gold",
    tilt: -3,
    label: "Call Us",
    value: "+91 98840 04650",
    href: "tel:+919884004650",
  },
  {
    icon: MessageCircle,
    tone: "green",
    tilt: 2.5,
    label: "WhatsApp",
    value: "Chat instantly",
    href: "https://wa.me/919884004650",
  },
  {
    icon: Mail,
    tone: "purple",
    tilt: -2,
    label: "Email",
    value: "Drop us a line",
    href: "mailto:chnperungudi@kayointernational.in",
  },
];

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 24, rotate: -2 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__backdrop" aria-hidden="true">
        <span className="contact-hero__mesh" />
        <span className="contact-hero__grain" />
      </div>
      <FloatingShapes items={HERO_SHAPES} className="contact-hero__shapes" />

      <div className="container contact-hero__grid">
        <div className="contact-hero__copy">
          <motion.nav
            className="contact-hero__crumb"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Contact Us</span>
          </motion.nav>

          <motion.span
            className="contact-hero__eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
          >
            <Sparkles size={14} strokeWidth={2.4} /> We&rsquo;d Love to Hear From You
          </motion.span>

          <motion.h1 variants={wordContainer} initial="hidden" animate="show">
            {HEADING_WORDS.map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <motion.span
                  variants={wordItem}
                  className={`contact-hero__word ${HIGHLIGHT_WORDS.has(word) ? "contact-hero__hl" : ""}`}
                >
                  {word}
                </motion.span>
                {i < HEADING_WORDS.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </motion.h1>

          <motion.p
            className="contact-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          >
            Choosing the right preschool is one of the most important decisions you&rsquo;ll make for
            your child. So reach out, ask us anything, and visit our Perungudi campus &mdash; we&rsquo;re
            here with warmth, honesty, and transparency. Pick whichever way feels easiest.
          </motion.p>

          <motion.div
            className="contact-hero__chips"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.65 } } }}
          >
            {CHANNELS.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className={`contact-hero__chip contact-hero__chip--${c.tone}`}
                style={{ "--tilt": `${c.tilt}deg` }}
                variants={{
                  hidden: { opacity: 0, y: 20, rotate: c.tilt * 2, scale: 0.9 },
                  show: {
                    opacity: 1,
                    y: 0,
                    rotate: c.tilt,
                    scale: 1,
                    transition: { type: "spring", stiffness: 200, damping: 15 },
                  },
                }}
                whileHover={{ rotate: 0, y: -8, scale: 1.05 }}
              >
                <span className="contact-hero__chip-icon">
                  <c.icon size={18} strokeWidth={2} />
                </span>
                <span className="contact-hero__chip-text">
                  <strong>{c.label}</strong>
                  <small>{c.value}</small>
                </span>
                <ArrowUpRight size={16} className="contact-hero__chip-arrow" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="contact-hero__promise"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: EASE }}
          >
            <span className="contact-hero__promise-pulse" aria-hidden="true" />
            <Clock size={15} strokeWidth={2.2} />
            We usually reply within <strong>a few hours</strong> during preschool hours.
          </motion.div>
        </div>
      </div>

      <svg
        className="contact-hero__wave"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C240,60 480,4 720,20 C960,36 1200,58 1440,28 L1440,60 L0,60 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
