import { motion } from "framer-motion";
import {
  ClipboardList,
  Compass,
  HeartHandshake,
  Megaphone,
  NotebookPen,
  Sparkles,
  UsersRound,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FloatingShapes from "../common/FloatingShapes";
import "./FranchiseSupport.css";

const SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 28, top: "18%", right: "5%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "var(--color-secondary)", size: 18, bottom: "14%", left: "6%", speed: 0.48, float: 20, dur: 6, opacity: 0.6 },
  { type: "plus", color: "var(--color-orange)", size: 20, top: "28%", left: "4%", speed: 0.42, float: 14, dur: 5, opacity: 0.7 },
  { type: "cloud", color: "var(--color-surface)", size: 60, top: "10%", left: "42%", speed: 0.24, float: 14, dur: 9 },
];

const SUPPORT = [
  { icon: Compass, tone: "primary", title: "Setup Guidance", text: "Choosing your location, designing your centre and prepping for launch." },
  { icon: NotebookPen, tone: "secondary", title: "Curriculum", text: "Full access to our NURTURE Lab curriculum and planning resources." },
  { icon: UsersRound, tone: "gold", title: "Teacher Training", text: "Hiring the right educators and training them to Kayo's standards." },
  { icon: ClipboardList, tone: "orange", title: "Operations", text: "Daily operations, admin, compliance and centre management." },
  { icon: Megaphone, tone: "primary", title: "Marketing", text: "Launch campaigns and admissions playbooks to fill your centre." },
];

const BOB = [4.6, 5.2, 4.3, 5.5, 4.9];

export default function FranchiseSupport() {
  return (
    <section className="fr-support" id="support">
      <svg className="fr-support__wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,64 C240,110 480,0 720,32 C960,64 1200,110 1440,48 L1440,0 L0,0 Z" fill="var(--color-bg)" />
      </svg>

      <div className="fr-support__backdrop" aria-hidden="true">
        <span className="fr-support__blob fr-support__blob--b" />
      </div>
      <FloatingShapes items={SHAPES} />

      <div className="container fr-support__inner">
        <SectionHeading
          align="center"
          eyebrow="You're Never Alone"
          title="Our Comprehensive Support System"
          description="From the moment you sign on, our head office lifts every part of your journey — from setup to admissions."
        />

        <div className="fr-support__balloons">
          {SUPPORT.map((s, i) => (
            <motion.div
              key={s.title}
              className="fr-support__cell"
              initial={{ opacity: 0, y: 54, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: (i % 5) * 0.08 }}
            >
              <motion.article
                className={`fr-support__balloon fr-support__balloon--${s.tone}`}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: BOB[i], repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.07 }}
              >
                <span className="fr-support__shine" aria-hidden="true" />
                <span className="fr-support__num" aria-hidden="true">{i + 1}</span>
                <span className="fr-support__balloon-icon">
                  <s.icon strokeWidth={1.8} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="fr-support__knot" aria-hidden="true" />
                <span className="fr-support__string" aria-hidden="true" />
              </motion.article>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="fr-support__ground"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="fr-support__bunting" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
          </span>
          <span className="fr-support__ground-pattern" aria-hidden="true" />

          <span className="fr-support__confetti fr-support__confetti--a" aria-hidden="true" />
          <span className="fr-support__confetti fr-support__confetti--b" aria-hidden="true" />
          <span className="fr-support__confetti fr-support__confetti--c" aria-hidden="true" />

          <div className="fr-support__ground-copy">
            <span className="fr-support__ground-badge">
              <HeartHandshake size={15} strokeWidth={2} /> Our Head Office Team
            </span>
            <strong>We hold every balloon up with you!</strong>
            <p>Whatever you need to grow your centre, our friendly team is right there holding it up with you.</p>
          </div>

          <motion.span
            className="fr-support__ground-spark"
            aria-hidden="true"
            animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={18} strokeWidth={1.8} />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
