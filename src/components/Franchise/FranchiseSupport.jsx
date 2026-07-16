import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ClipboardList,
  Compass,
  Megaphone,
  NotebookPen,
  Plus,
  UsersRound,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import "./FranchiseSupport.css";
import supportImg from "../../assets/Francis.png";

const EASE = [0.16, 1, 0.3, 1];

const SUPPORT = [
  {
    icon: Compass,
    title: "Setup Guidance",
    text: "End-to-end support choosing your location, designing your centre and preparing for launch.",
  },
  {
    icon: NotebookPen,
    title: "Curriculum & Academic Support",
    text: "Full access to our proprietary NURTURE Lab curriculum and academic planning resources.",
  },
  {
    icon: UsersRound,
    title: "Teacher Training & Recruitment",
    text: "Help hiring the right educators, plus structured training aligned to Kayo's teaching standards.",
  },
  {
    icon: ClipboardList,
    title: "Operations & Administration",
    text: "Guidance on daily operations, administration, compliance and centre management systems.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Admissions Support",
    text: "Launch campaigns, local marketing playbooks and admissions guidance to fill your centre.",
  },
];

export default function FranchiseSupport() {
  const [active, setActive] = useState(0);

  return (
    <section className="fr-support" id="support">
      <svg
        className="fr-support__wave"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,64 C240,110 480,0 720,32 C960,64 1200,110 1440,48 L1440,0 L0,0 Z"
          fill="var(--color-bg)"
        />
      </svg>

      <div className="fr-support__backdrop" aria-hidden="true">
        <span className="fr-support__blob fr-support__blob--b" />
      </div>

      <div className="container fr-support__grid">
        <SectionHeading
          align="left"
          eyebrow="You're Never Alone"
          title="Our Comprehensive Support System"
          description="From the moment you sign on, our head office team works alongside you — covering every part of building and running a successful centre."
        />

        <div className="fr-support__art-wrap">
          <img src={supportImg} alt="We've Got You Covered — Kayo International support team" className="fr-support__art-img" />
        </div>

        <div className="fr-support__accordion">
          {SUPPORT.map((s, i) => {
            const isOpen = active === i;
            return (
              <div className={`fr-support__item ${isOpen ? "is-open" : ""}`} key={s.title}>
                <button
                  type="button"
                  className="fr-support__row"
                  aria-expanded={isOpen}
                  onClick={() => setActive(isOpen ? null : i)}
                >
                  <span className="fr-support__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="fr-support__icon">
                    <s.icon strokeWidth={1.7} />
                  </span>
                  <span className="fr-support__title">{s.title}</span>
                  <motion.span
                    className="fr-support__toggle"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <Plus size={18} strokeWidth={2.3} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="fr-support__panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <p>{s.text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
