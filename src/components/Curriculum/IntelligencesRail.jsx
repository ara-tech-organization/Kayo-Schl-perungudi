import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpenText,
  Calculator,
  Leaf,
  Music,
  PersonStanding,
  Shapes,
  UserCircle,
  Users,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./IntelligencesRail.css";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-gold-light)", size: 170, top: "6%", right: "-4%", speed: 0.26, float: 18, dur: 8 },
  { type: "cloud", color: "var(--color-secondary-light)", size: 84, top: "12%", left: "4%", speed: 0.2, float: 16, dur: 9, opacity: 0.7 },
  { type: "star", color: "var(--color-primary)", size: 30, bottom: "16%", left: "6%", speed: 0.38, float: 18, dur: 6, rotate: -16, opacity: 0.65 },
  { type: "star", color: "var(--color-gold)", size: 22, top: "18%", right: "12%", speed: 0.34, float: 16, dur: 7, spin: true, opacity: 0.7 },
  { type: "dot", color: "var(--color-orange)", size: 18, top: "26%", left: "10%", speed: 0.48, float: 20, dur: 6, opacity: 0.6 },
  { type: "plus", color: "var(--color-secondary)", size: 26, bottom: "22%", right: "7%", speed: 0.44, float: 18, dur: 7, rotate: 20, opacity: 0.55 },
  { type: "triangle", color: "var(--color-primary-light)", size: 30, bottom: "10%", right: "24%", speed: 0.3, float: 22, dur: 8, rotate: 18, opacity: 0.6 },
  { type: "squiggle", color: "var(--color-orange)", size: 74, top: "44%", right: "3%", speed: 0.5, float: 14, dur: 7, opacity: 0.5 },
  { type: "ring", color: "var(--color-primary)", size: 40, bottom: "34%", left: "3%", speed: 0.4, float: 20, dur: 9, opacity: 0.5 },
  { type: "ring", color: "var(--color-secondary)", size: 28, top: "8%", left: "22%", speed: 0.28, float: 14, dur: 8, rotate: 12, opacity: 0.42 },
  { type: "dot", color: "var(--color-gold)", size: 12, top: "58%", left: "13%", speed: 0.46, float: 16, dur: 5, opacity: 0.5 },
  { type: "star", color: "var(--color-orange)", size: 16, bottom: "8%", left: "42%", speed: 0.36, float: 18, dur: 6, spin: true, opacity: 0.5 },
  { type: "plus", color: "var(--color-primary)", size: 18, top: "40%", left: "1%", speed: 0.4, float: 16, dur: 7, rotate: -16, opacity: 0.4 },
];

const TONES = ["primary", "secondary", "gold", "orange"];

const INTELLIGENCES = [
  {
    icon: BookOpenText,
    tag: "Word Smart",
    short: "Word",
    title: "Verbal-Linguistic",
    text: "Storytelling circles, phonics, vocabulary games, show-and-tell and poetry recitation build strong language skills in children who learn best through words.",
  },
  {
    icon: Calculator,
    tag: "Number Smart",
    short: "Number",
    title: "Logical-Mathematical",
    text: "Sorting activities, pattern games, building challenges and Montessori maths materials develop reasoning and problem-solving in children who think logically.",
  },
  {
    icon: Shapes,
    tag: "Picture Smart",
    short: "Picture",
    title: "Visual-Spatial",
    text: "Arty Crafty sessions, block building, puzzles and drawing activities let children express themselves visually through colour, shape and design.",
  },
  {
    icon: Music,
    tag: "Music Smart",
    short: "Music",
    title: "Musical-Rhythmic",
    text: "Music and movement sessions, rhythmic activities, instruments, and our Bharatanatyam and Western Dance programmes develop a natural feel for melody and rhythm.",
  },
  {
    icon: PersonStanding,
    tag: "Body Smart",
    short: "Body",
    title: "Bodily-Kinesthetic",
    text: "Outdoor play, yoga, Kayo Sports, sandpit, splash pool and climbing equipment give active learners endless ways to explore through movement.",
  },
  {
    icon: Users,
    tag: "People Smart",
    short: "People",
    title: "Interpersonal",
    text: "Group projects, collaborative games, circle time and empathy-building exercises help children develop strong social skills and meaningful relationships.",
  },
  {
    icon: UserCircle,
    tag: "Self Smart",
    short: "Self",
    title: "Intrapersonal",
    text: "Reflection time, emotional coaching, mindfulness practices and freedom of choice help children understand themselves and manage their emotions confidently.",
  },
  {
    icon: Leaf,
    tag: "Nature Smart",
    short: "Nature",
    title: "Naturalist",
    text: "Nature walks, gardening, outdoor learning spaces and environmental projects connect children who are drawn to the natural world around them.",
  },
];

const STEP = 360 / INTELLIGENCES.length;

export default function IntelligencesRail() {
  const [active, setActive] = useState(0);
  const current = INTELLIGENCES[active];
  const currentTone = TONES[active % TONES.length];

  return (
    <section className="mi-orbit" id="intelligences">
      <FloatingShapes items={SHAPES} />
      <div className="container">
        <SectionHeading
          eyebrow="Multiple Intelligence Theory"
          title="Nurturing Every Child's Unique Gifts"
          description="Howard Gardner's Multiple Intelligence Theory tells us every child is smart in their own unique way. At KAYO INTERNATIONAL, we celebrate this by nurturing all eight intelligences in every child — because true learning happens when education sees the whole child, not just one side."
        />

        <div className={`mi-orbit__stage mi-orbit__stage--${currentTone}`}>
          {/* Orbiting picker */}
          <Reveal scale={0.85} y={0} duration={0.7} className="mi-orbit__ring" role="tablist" aria-label="Multiple intelligences">
            <span className="mi-orbit__track" aria-hidden="true" />
            <span className="mi-orbit__track mi-orbit__track--inner" aria-hidden="true" />

            {/* Twinkling accent sparkles around the hub */}
            <span className="mi-orbit__spark mi-orbit__spark--1" aria-hidden="true" />
            <span className="mi-orbit__spark mi-orbit__spark--2" aria-hidden="true" />
            <span className="mi-orbit__spark mi-orbit__spark--3" aria-hidden="true" />

            {INTELLIGENCES.map((mi, i) => (
              <button
                type="button"
                key={mi.title}
                role="tab"
                aria-selected={active === i}
                aria-label={`${mi.title} — ${mi.tag}`}
                style={{
                  "--angle": `${i * STEP}deg`,
                  "--bob-delay": `${i * -0.55}s`,
                  "--enter-delay": `${0.35 + i * 0.06}s`,
                }}
                className={`mi-orbit__node mi-orbit__node--${TONES[i % TONES.length]} ${
                  active === i ? "is-active" : ""
                }`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="mi-orbit__node-bob">
                  <span className="mi-orbit__bubble">
                    <mi.icon strokeWidth={1.7} />
                    <small>{mi.short}</small>
                  </span>
                </span>
              </button>
            ))}

            {/* Center hub — morphs to the active intelligence */}
            <div className="mi-orbit__hub">
              <span className="mi-orbit__hub-glow" aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  className="mi-orbit__hub-inner"
                  initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 6 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <span className="mi-orbit__hub-count" aria-hidden="true">
                    {String(active + 1).padStart(2, "0")}
                    <small>/08</small>
                  </span>
                  <span className="mi-orbit__hub-icon">
                    <current.icon strokeWidth={1.5} />
                  </span>
                  <strong className="mi-orbit__hub-title">{current.title}</strong>
                  <span className="mi-orbit__hub-tag">{current.tag}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Speech-bubble caption for the active intelligence */}
          <div className="mi-orbit__caption" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                {current.text}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <Reveal y={20} delay={0.15} className="mi-orbit__closing">
          <p>
            By nurturing all eight intelligences, we ensure every child at KAYO INTERNATIONAL finds
            their strength, builds confidence and discovers their own path to excellence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
