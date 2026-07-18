import { motion } from "framer-motion";
import {
  BookOpenCheck,
  GraduationCap,
  Heart,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./AboutTeam.css";
import teamImg from "../../assets/Team.png";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 170, top: "2%", left: "-3%", speed: 0.28, float: 18, dur: 8 },
  { type: "blob", color: "var(--color-gold-light)", size: 150, bottom: "8%", right: "-2%", speed: 0.22, float: 16, dur: 9 },
  { type: "star", color: "var(--color-gold)", size: 30, top: "18%", right: "7%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "var(--color-secondary)", size: 18, bottom: "22%", left: "8%", speed: 0.48, float: 20, dur: 6, opacity: 0.7 },
];

const QUALITIES = [
  {
    icon: GraduationCap,
    tone: "primary",
    title: "Bachelor's Qualified",
    text: "Every teacher holds a Bachelor's degree in Early Years Education or an equivalent professional qualification.",
  },
  {
    icon: BookOpenCheck,
    tone: "secondary",
    title: "Child Development Focused",
    text: "A deep understanding of child development, learning psychology, and age-appropriate teaching methodologies.",
  },
  {
    icon: RefreshCcw,
    tone: "gold",
    title: "Continuously Trained",
    text: "Regular participation in training sessions and workshops to stay updated with the latest research.",
  },
  {
    icon: ShieldCheck,
    tone: "orange",
    title: "Truly Invested",
    text: "Educators who are genuinely invested in your child's success, sharing Veena's passion for early learning.",
  },
];

export default function AboutTeam() {
  return (
    <section className="ateam" id="our-team">
      <FloatingShapes items={SHAPES} />
      <motion.span
        className="ateam__chip ateam__chip--a"
        aria-hidden="true"
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={18} strokeWidth={1.8} />
      </motion.span>

      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Qualified, Caring, Committed"
          title="Our Team"
          description="A preschool is only as good as its educators. At Kayo International, we take immense pride in our team of dedicated teachers and caregivers who share Veena's passion for early childhood development."
        />

        <div className="ateam__intro">
          <motion.div
            className="ateam__art"
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="ateam__art-frame" aria-hidden="true" />
            <div className="ateam__art-photo">
              <img src={teamImg} alt="Qualified early years teachers at Kayo International Preschool" className="ateam__art-img" />
            </div>
            <span className="ateam__art-badge">
              <Heart size={15} strokeWidth={2.4} /> Our lovely team
            </span>
            <span className="sr-only">
              Qualified early years teachers conducting interactive session at Kayo International
              Preschool Perungudi
            </span>
          </motion.div>

          <div className="ateam__copy">
            <Reveal y={16} delay={0.06}>
              <p className="ateam__lead">
                We believe that understanding child development, learning psychology, and
                age-appropriate teaching methodologies is essential to providing the quality of care
                your child deserves.
              </p>
            </Reveal>
            <Reveal y={16} delay={0.1}>
              <p className="ateam__note">
                When you choose Kayo, you are choosing a preschool with qualified teachers in Chennai
                who are truly invested in your child&rsquo;s success.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="ateam__wave">
          {QUALITIES.map((q, i) => (
            <motion.div
              className={`ateam__card ateam__card--${q.tone}`}
              key={q.title}
              initial={{ opacity: 0, y: 40, rotate: i % 2 ? 4 : -4, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: i * 0.08 }}
              whileHover={{ rotate: 0, y: -10, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 18 } }}
            >
              <motion.span
                className="ateam__card-icon"
                whileHover={{ rotate: [0, -12, 8, 0], scale: 1.12 }}
                transition={{ duration: 0.5 }}
              >
                <q.icon strokeWidth={1.8} />
              </motion.span>
              <h3>{q.title}</h3>
              <p>{q.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <svg className="ateam__wave-svg" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,44 C240,84 480,88 720,54 C960,20 1200,6 1440,48 L1440,90 L0,90 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
