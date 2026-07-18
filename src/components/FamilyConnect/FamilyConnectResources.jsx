import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BellRing,
  BookOpen,
  DoorOpen,
  HeartPulse,
  MessageSquareWarning,
  Plus,
  Smile,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./FamilyConnectResources.css";

const POLICIES = [
  {
    icon: DoorOpen,
    tone: "primary",
    title: "Settling-in Policy",
    text: "We request parents to stay with their child during the initial settling-in period to ensure a smooth, comfortable transition into the preschool environment.",
  },
  {
    icon: HeartPulse,
    tone: "secondary",
    title: "Health Policy",
    text: "Detailed protocols for maintaining hygiene, preventing infection spread, and managing illness — including our hand-washing routines, sanitisation practices, and first-aid preparedness.",
  },
  {
    icon: UserCheck,
    tone: "gold",
    title: "Children Collection Policy",
    text: "Clear guidelines for safe pickup procedures to ensure every child leaves our premises only in the care of authorised individuals.",
  },
  {
    icon: MessageSquareWarning,
    tone: "orange",
    title: "Comments & Complaints",
    text: "A transparent process for raising concerns, with a commitment to resolution within 5 working days.",
  },
  {
    icon: Smile,
    tone: "primary",
    title: "Behaviour Management",
    text: "Our compassionate, age-appropriate approach to supporting children through behavioural challenges.",
  },
];

const SHAPES = [
  { type: "dot", color: "var(--color-secondary)", size: 16, top: "12%", right: "5%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
  { type: "plus", color: "var(--color-orange)", size: 20, bottom: "16%", left: "4%", speed: 0.42, float: 14, dur: 6, opacity: 0.7 },
  { type: "star", color: "var(--color-gold)", size: 24, top: "20%", left: "3%", speed: 0.34, float: 18, dur: 6, rotate: 16 },
];

export default function FamilyConnectResources() {
  const [open, setOpen] = useState(0);

  return (
    <section className="fc-resources" id="resources">
      <span className="deco-blob fc-resources__blob" aria-hidden="true" />
      <FloatingShapes items={SHAPES} />

      <div className="container fc-resources__inner">
        <SectionHeading
          eyebrow="Information at Your Fingertips"
          title="Parent Resources"
          description={
            <>
              We encourage all families to review our{" "}
              <Link to="/policies" className="fc-resources__policy-link">
                Kayo Policies page
              </Link>
              , which outlines important guidelines across several key areas.
            </>
          }
        />

        <div className="fc-resources__grid">
          <div className="fc-resources__accordion">
            {POLICIES.map((p, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={p.title} delay={0.05 * i} y={20}>
                  <div className={`fc-resources__item fc-resources__item--${p.tone} ${isOpen ? "is-open" : ""}`}>
                    <button
                      type="button"
                      className="fc-resources__question"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="fc-resources__q-icon">
                        <p.icon strokeWidth={1.7} />
                      </span>
                      <span className="fc-resources__q-label">{p.title}</span>
                      <span className="fc-resources__toggle">
                        <Plus size={18} strokeWidth={2.4} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="fc-resources__answer-wrap"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p className="fc-resources__answer">{p.text}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="fc-resources__side">
            <Reveal y={24} className="fc-resources__note fc-resources__note--handbook">
              <span className="fc-resources__note-tape" aria-hidden="true" />
              <span className="fc-resources__note-icon">
                <BookOpen strokeWidth={1.6} />
              </span>
              <h3>Parent Handbook</h3>
              <p>
                Every enrolled family receives a detailed parent handbook covering everything from
                daily routines and uniform guidelines to celebration policies and emergency
                procedures.
              </p>
            </Reveal>

            <Reveal y={24} delay={0.1} className="fc-resources__note fc-resources__note--updates">
              <span className="fc-resources__note-tape" aria-hidden="true" />
              <span className="fc-resources__note-icon">
                <BellRing strokeWidth={1.6} />
              </span>
              <h3>Regular Policy Updates</h3>
              <p>
                Whenever we update our curriculum, policies, or procedures, we ensure all families
                are informed through the appropriate channels. We welcome questions and feedback at
                any time.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
