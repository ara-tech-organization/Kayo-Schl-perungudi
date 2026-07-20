import { ArrowRight, Blocks, FlaskConical, Layers, Palette } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./FourPillars.css";

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 170, top: "4%", left: "-4%", speed: 0.26, float: 20, dur: 9 },
  { type: "blob", color: "var(--color-secondary-light)", size: 128, bottom: "6%", right: "-3%", speed: 0.3, float: 22, dur: 10, delay: 0.6 },
  { type: "star", color: "var(--color-gold)", size: 30, top: "18%", right: "7%", speed: 0.4, float: 18, dur: 6, rotate: 16 },
  { type: "star", color: "var(--color-primary)", size: 20, bottom: "24%", left: "4%", speed: 0.5, float: 16, dur: 7, rotate: -18, delay: 0.4, opacity: 0.8 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "16%", left: "10%", speed: 0.44, float: 14, dur: 5, opacity: 0.7 },
  { type: "plus", color: "var(--color-secondary)", size: 18, top: "12%", left: "17%", speed: 0.36, float: 15, dur: 6.5, delay: 0.8, opacity: 0.7 },
  { type: "dot", color: "var(--color-gold)", size: 15, top: "40%", right: "3%", speed: 0.32, float: 20, dur: 7, delay: 0.3 },
  { type: "dot", color: "var(--color-orange-light)", size: 22, top: "58%", left: "2%", speed: 0.28, float: 18, dur: 8, delay: 1 },
  { type: "squiggle", color: "var(--color-primary-light)", size: 72, top: "72%", right: "9%", speed: 0.46, float: 12, dur: 6, rotate: 10, opacity: 0.75, delay: 0.5 },
];

const PILLARS = [
  {
    icon: Blocks,
    tilt: -2,
    title: "Montessori Methodology",
    text: "Independence through purposeful, hands-on activity in a prepared environment.",
    tone: "primary",
  },
  {
    icon: FlaskConical,
    tilt: 2,
    title: "STEM Integration",
    text: "Hands-on science, technology, engineering and maths that spark curiosity.",
    tone: "secondary",
  },
  {
    icon: Palette,
    tilt: 2,
    title: "Play-Based Learning",
    text: "Learning that emerges through joyful, child-led exploration and discovery.",
    tone: "orange",
  },
  {
    icon: Layers,
    tilt: -2,
    title: "Multiple Intelligence Theory",
    text: "Nurturing all eight ways children are naturally smart and capable.",
    tone: "featured",
    link: "#intelligences",
    linkLabel: "Explore all 8 intelligences",
  },
];

export default function FourPillars() {
  return (
    <section className="four-pillars" id="four-pillars">
      <FloatingShapes items={SHAPES} />
      <div className="container">
        <SectionHeading
          eyebrow="Four Pillars, One Whole Child"
          title="What is the NURTURE Lab Curriculum?"
          description="The NURTURE Lab curriculum is a proprietary, four-pillar educational framework exclusive to KAYO International. Unlike conventional programmes built on rote memorisation and worksheets, ours is a child-centric philosophy where learning emerges through curiosity, exploration and guided discovery."
        />

        <p className="pillars__lead-in">The Four Pillars of NURTURE:</p>

        <div className="pillars__board">
          {PILLARS.map((p, i) => (
            <motion.article
              className={`pillars__card pillars__card--${p.tone}`}
              key={p.title}
              initial={{ opacity: 0, y: 46, rotate: p.tilt * 2.5, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.tilt, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: i * 0.09 }}
              whileHover={{ rotate: 0, y: -10, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 18 } }}
            >
              <motion.span
                className="pillars__num"
                initial={{ scale: 0, rotate: -32 }}
                whileInView={{ scale: 1, rotate: -8 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 320, damping: 12, delay: i * 0.09 + 0.16 }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>
              <span className="pillars__tape" aria-hidden="true" />
              <motion.span
                className="pillars__icon"
                initial={{ scale: 0, rotate: -24 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: "spring", stiffness: 240, damping: 12, delay: i * 0.09 + 0.24 }}
                whileHover={{ rotate: [0, -12, 8, 0], scale: 1.12, transition: { duration: 0.5 } }}
              >
                <p.icon strokeWidth={1.7} />
              </motion.span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              {p.link && (
                <a href={p.link} className="pillars__link">
                  {p.linkLabel}
                  <ArrowRight size={15} strokeWidth={2.2} />
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <Reveal y={20} delay={0.15} className="pillars__closing">
          <p>
            This four-pillar approach creates a Montessori STEM preschool curriculum, Chennai
            families trust &mdash; one that develops the whole child: intellectually, emotionally,
            socially, creatively and physically. Parents searching for the best preschool curriculum
            Montessori STEM approach will find that our NURTURE framework offers a depth and
            authenticity that stands apart from conventional early childhood programmes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
