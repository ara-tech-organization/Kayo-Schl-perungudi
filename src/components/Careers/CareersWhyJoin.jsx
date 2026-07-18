import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  HandMetal,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FloatingShapes from "../common/FloatingShapes";
import "./CareersWhyJoin.css";

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 150, top: "6%", left: "1%", speed: 0.3, float: 18, dur: 8 },
  { type: "star", color: "var(--color-gold)", size: 28, top: "18%", right: "4%", speed: 0.36, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "var(--color-secondary)", size: 18, bottom: "16%", right: "9%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "22%", left: "5%", speed: 0.42, float: 14, dur: 5, opacity: 0.7 },
];

const REASONS = [
  {
    icon: HeartHandshake,
    tone: "purple",
    tilt: -2,
    title: "A Founder-Led Culture, Every Day",
    text: "Our founders shape a culture that puts both children and educators first — not a distant policy, but how we run every single centre.",
  },
  {
    icon: ShieldCheck,
    tone: "green",
    tilt: 2,
    title: "10+ Years of Trusted Excellence",
    text: "Join a preschool with over a decade of proven results and genuine trust from families across Chennai.",
  },
  {
    icon: Star,
    tone: "gold",
    tilt: -2,
    title: "A 4.9★ Google-Rated School",
    text: "Be part of a team that families consistently rate as warm, safe, and outstanding.",
  },
  {
    icon: Sparkles,
    tone: "orange",
    tilt: 2,
    title: "Work That Matters, Every Day",
    text: "Help nurture confident, curious, happy learners and see the impact of your work unfold in real time.",
  },
  {
    icon: Users,
    tone: "green",
    tilt: -2,
    title: "Valued & Supported Educators",
    text: "You are never on your own — our team culture is built on encouragement, respect, and genuine day-to-day support.",
  },
  {
    icon: GraduationCap,
    tone: "purple",
    tilt: 2,
    title: "Room to Grow Your Career",
    text: "Build a deeply rewarding path with a school invested in your growth as much as the children's.",
  },
];

export default function CareersWhyJoin() {
  const trackRef = useRef(null);

  function nudge(dir) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 380), behavior: "smooth" });
  }

  // auto-slide: gently advance every few seconds, loop back at the end, and
  // pause while the visitor is hovering or dragging the deck.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let paused = false;
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("pointerdown", pause);
    window.addEventListener("pointerup", resume);

    const id = setInterval(() => {
      if (paused) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const step = Math.min(el.clientWidth * 0.8, 380);
      if (el.scrollLeft >= maxScroll - 8) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3200);

    return () => {
      clearInterval(id);
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("pointerdown", pause);
      window.removeEventListener("pointerup", resume);
    };
  }, []);

  return (
    <section className="crw" id="why-kayo">
      <span className="deco-blob crw__blob crw__blob--a" aria-hidden="true" />
      <span className="deco-blob crw__blob crw__blob--b" aria-hidden="true" />
      <FloatingShapes items={SHAPES} />

      <div className="container crw__inner">
        <div className="crw__head">
          <SectionHeading
            align="left"
            eyebrow="Why Team Kayo"
            title="A Preschool Career Where You Are Valued"
            description="From Perungudi to every corner of OMR, Team Kayo is built on the belief that great educators deserve a school that genuinely supports them."
          />

          <div className="crw__nav" aria-hidden="true">
            <button type="button" className="crw__nav-btn" onClick={() => nudge(-1)} aria-label="Previous reason">
              <ArrowLeft size={20} strokeWidth={2.2} />
            </button>
            <button type="button" className="crw__nav-btn" onClick={() => nudge(1)} aria-label="Next reason">
              <ArrowRight size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div className="crw__deck-wrap">
          <motion.div
            className="crw__deck"
            ref={trackRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {REASONS.map((r, i) => (
              <motion.article
                key={r.title}
                className={`crw__card crw__card--${r.tone}`}
                style={{ "--tilt": `${r.tilt}deg` }}
                initial={{ opacity: 0, y: 40, rotate: r.tilt * 2.4, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, rotate: r.tilt, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 120, damping: 14, delay: (i % 3) * 0.08 }}
                whileHover={{ rotate: 0, y: -10, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 18 } }}
              >
                <span className="crw__tape" aria-hidden="true" />
                <motion.span
                  className="crw__icon"
                  whileHover={{ rotate: [0, -12, 8, 0], scale: 1.12 }}
                  transition={{ duration: 0.5 }}
                >
                  <r.icon strokeWidth={1.8} />
                </motion.span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <span className="crw__card-tag">Reason {String(i + 1).padStart(2, "0")}</span>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <p className="crw__hint">
          <HandMetal size={16} strokeWidth={2} />
          Drag or swipe to explore all six reasons
        </p>
      </div>
    </section>
  );
}
