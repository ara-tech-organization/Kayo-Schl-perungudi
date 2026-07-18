import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FloatingShapes from "../common/FloatingShapes";
import { ROLES } from "./careersData";
import "./CareersRoles.css";

const TONES = ["primary", "secondary", "gold", "orange"];
const TILTS = [-3, 2.4, -1.6, 3, -2.2, 1.8, -2.8, 1.4];
const SIZES = ["md", "lg", "sm", "md", "sm", "lg", "md", "sm", "lg", "md", "sm", "md"];

const SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 26, top: "12%", left: "4%", speed: 0.34, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "var(--color-primary)", size: 16, bottom: "14%", right: "6%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
  { type: "squiggle", color: "var(--color-secondary)", size: 62, top: "74%", left: "7%", speed: 0.3, float: 12, dur: 7, opacity: 0.5 },
  { type: "plus", color: "var(--color-orange)", size: 20, top: "24%", right: "5%", speed: 0.42, float: 14, dur: 6, opacity: 0.7 },
];

const EASE = [0.16, 1, 0.3, 1];

export default function CareersRoles() {
  return (
    <section className="cr-roles" id="roles">
      <svg className="cr-roles__wave-top" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,0 L1440,0 L1440,46 C1210,96 1010,18 760,48 C520,77 250,30 0,64 Z"
          fill="var(--color-bg)"
        />
      </svg>
      <span className="cr-roles__board-grain" aria-hidden="true" />
      <FloatingShapes items={SHAPES} />

      <div className="container cr-roles__inner">
        <SectionHeading
          eyebrow="Now Hiring"
          title="Open Positions at Our Perungudi Campus"
          description="We are growing our teaching, activity, and administrative teams. Tap a note to apply — we'd love to meet you."
        />

        <motion.span
          className="cr-roles__count"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          <span className="cr-roles__pulse" aria-hidden="true" />
          {ROLES.length} roles open right now
        </motion.span>

        <div className="cr-roles__wall">
          {ROLES.map((r, i) => (
            <motion.a
              key={r.title}
              href="#apply"
              className={`cr-roles__note cr-roles__note--${TONES[i % TONES.length]} cr-roles__note--${SIZES[i % SIZES.length]}`}
              style={{ "--tilt": `${TILTS[i % TILTS.length]}deg` }}
              initial={{ opacity: 0, y: 26, scale: 0.8, rotate: TILTS[i % TILTS.length] * 2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: TILTS[i % TILTS.length] }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 150, damping: 14, delay: (i % 4) * 0.06 }}
              whileHover={{ rotate: 0, y: -10, scale: 1.05, transition: { type: "spring", stiffness: 320, damping: 18 } }}
            >
              <span className="cr-roles__pin" aria-hidden="true" />
              <span className="cr-roles__note-icon">
                <r.icon strokeWidth={1.8} />
              </span>
              <span className="cr-roles__note-title">{r.title}</span>
              <span className="cr-roles__note-apply">
                Apply <ArrowUpRight size={14} strokeWidth={2.4} />
              </span>
              <span className="cr-roles__note-fold" aria-hidden="true" />
            </motion.a>
          ))}
        </div>

        <motion.p
          className="cr-roles__foot"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Don&rsquo;t see your exact role? We&rsquo;d still love to hear from you —{" "}
          <a href="#apply">send us your resume</a>.
        </motion.p>
      </div>

      <svg className="cr-roles__wave-bottom" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,100 L1440,100 L1440,52 C1210,2 1010,80 760,50 C520,21 250,68 0,36 Z"
          fill="var(--color-bg-alt)"
        />
      </svg>
    </section>
  );
}
