import { motion } from "framer-motion";
import { Award, HeartHandshake, Star, Users2 } from "lucide-react";
import FloatingShapes from "../common/FloatingShapes";
import Counter from "../common/Counter";
import { ROLES } from "./careersData";
import "./CareersHighlights.css";

const STATS = [
  { icon: Star, value: 4.9, decimals: 1, suffix: "★", label: "Google rating from families who trust us", tone: "gold", tilt: -3 },
  { icon: Award, value: 10, suffix: "+", label: "Years of trusted preschool excellence", tone: "secondary", tilt: 2.4 },
  { icon: Users2, value: ROLES.length, suffix: "+", label: "Open role types across teaching & admin", tone: "orange", tilt: -2 },
  { icon: HeartHandshake, value: 100, suffix: "%", label: "Founder-led culture that values educators", tone: "cream", tilt: 3 },
];

const SHAPES = [
  { type: "ring", color: "rgba(255,255,255,0.5)", size: 88, top: "-8%", left: "7%", speed: 0.4, float: 16, dur: 7 },
  { type: "star", color: "var(--color-gold)", size: 32, top: "16%", right: "6%", speed: 0.34, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "rgba(255,255,255,0.55)", size: 18, bottom: "18%", left: "4%", speed: 0.46, float: 20, dur: 5 },
  { type: "plus", color: "rgba(255,255,255,0.42)", size: 22, bottom: "12%", right: "14%", speed: 0.42, float: 14, dur: 6 },
];

export default function CareersHighlights() {
  return (
    <section className="cr-stats">
      <span className="cr-stats__pattern" aria-hidden="true" />
      <FloatingShapes items={SHAPES} />

      <div className="container cr-stats__inner">
        <motion.p
          className="cr-stats__kicker"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          A workplace educators are proud to grow with
        </motion.p>

        <div className="cr-stats__grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className={`cr-stats__card cr-stats__card--${s.tone}`}
              initial={{ opacity: 0, y: 40, rotate: s.tilt * 2.4, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotate: s.tilt, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: i * 0.08 }}
              whileHover={{ rotate: 0, y: -8, scale: 1.04, transition: { type: "spring", stiffness: 300, damping: 18 } }}
            >
              <span className="cr-stats__tape" aria-hidden="true" />
              <motion.span
                className="cr-stats__icon"
                whileHover={{ rotate: [0, -12, 8, 0], scale: 1.12 }}
                transition={{ duration: 0.5 }}
              >
                <s.icon strokeWidth={1.8} fill={s.icon === Star ? "currentColor" : "none"} />
              </motion.span>
              <strong>
                <Counter value={s.value} suffix={s.suffix || ""} decimals={s.decimals || 0} />
              </strong>
              <span className="cr-stats__label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
