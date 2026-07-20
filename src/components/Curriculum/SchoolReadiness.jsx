import {
  Dumbbell,
  FlaskConical,
  Globe2,
  Palette,
  Puzzle,
  BookOpen,
  Brain,
  Flower2,
  Quote,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./SchoolReadiness.css";

const SHAPES = [
  { type: "blob", color: "var(--color-secondary-light)", size: 160, top: "4%", left: "-3%", speed: 0.28, float: 18, dur: 8 },
  { type: "blob", color: "var(--color-primary-light)", size: 150, bottom: "10%", right: "-2%", speed: 0.22, float: 16, dur: 9 },
  { type: "cloud", color: "var(--color-gold-light)", size: 92, top: "10%", right: "6%", speed: 0.2, float: 18, dur: 9, opacity: 0.75 },
  { type: "star", color: "var(--color-gold)", size: 30, top: "22%", right: "14%", speed: 0.38, float: 18, dur: 6, rotate: 16, spin: true },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "18%", left: "8%", speed: 0.44, float: 14, dur: 5, opacity: 0.7 },
  { type: "triangle", color: "var(--color-secondary)", size: 26, top: "48%", left: "5%", speed: 0.4, float: 20, dur: 7, rotate: 18, opacity: 0.6 },
  { type: "dot", color: "var(--color-primary)", size: 16, bottom: "34%", right: "9%", speed: 0.5, float: 20, dur: 6, opacity: 0.6 },
];

const READINESS = [
  {
    icon: Globe2,
    title: "Cross-Cultural Programs",
    text: "Children explore traditions, languages and festivals from around the world, building empathy, respect for diversity and the adaptability to thrive in a global society.",
    tone: "primary",
  },
  {
    icon: Brain,
    title: "Cognitive Activities",
    text: "Structured games and challenges strengthen memory, attention and reasoning — the mental building blocks for all future learning.",
    tone: "secondary",
  },
  {
    icon: Puzzle,
    title: "Logical Thinking",
    text: "Pattern games, sequencing and problem-solving tasks develop structured reasoning. Children learn to break challenges into steps and think with clarity.",
    tone: "gold",
  },
  {
    icon: Palette,
    title: "Arty Crafty",
    text: "Open-ended art and craft projects build fine motor skills, creative confidence and self-expression through colors, textures and techniques.",
    tone: "orange",
  },
  {
    icon: Flower2,
    title: "Yoga",
    text: "Breathwork, poses and mindful movement build physical strength, emotional balance and focus, helping children regulate energy and manage emotions.",
    tone: "secondary",
  },
  {
    icon: Dumbbell,
    title: "Kayo Sports",
    text: "Active play and team games develop gross motor skills, coordination and healthy habits while building teamwork, discipline and sportsmanship.",
    tone: "gold",
  },
  {
    icon: FlaskConical,
    title: "STEM Activity",
    text: "Hands-on experiments and building challenges spark curiosity and develop scientific inquiry, engineering thinking and real-world problem-solving.",
    tone: "orange",
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    text: "Rich narratives expand vocabulary, imagination and listening skills while building the empathy and narrative thinking essential for literacy.",
    tone: "primary",
  },
];

export default function SchoolReadiness() {
  return (
    <section className="readiness" id="readiness">
      <FloatingShapes items={SHAPES} />
      <div className="container">
        <Reveal y={16} className="readiness__intro">
          <span className="readiness__quote-mark" aria-hidden="true">
            <Quote strokeWidth={0} fill="currentColor" />
          </span>
          <p>
            One of the most common concerns parents share with us is whether their child will be
            ready for &ldquo;big school.&rdquo; The NURTURE Lab curriculum addresses this concern
            comprehensively.
          </p>
          <span className="readiness__quote-by">What parents ask us most</span>
        </Reveal>

        <SectionHeading
          eyebrow="Ready for Big School"
          title="How Our Curriculum Prepares Children for School"
          description="School readiness is not just about knowing letters and numbers — it is about having the confidence, social skills, emotional regulation, curiosity and love of learning that make academic success possible."
        />

        <p className="readiness__lead-in">
          <span aria-hidden="true">⭐</span> Every card is a super-skill your child collects on the
          way to big school
        </p>

        <div className="readiness__deck">
          {READINESS.map((r, i) => (
            <Reveal
              as="div"
              y={26}
              scale={0.9}
              delay={0.05 * (i % 4)}
              key={r.title}
              className="readiness__card-wrap"
            >
              <article className={`readiness__card readiness__card--${r.tone}`}>
                <span className="readiness__badge" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="readiness__ring" aria-hidden="true" />
                <span className="readiness__icon">
                  <r.icon strokeWidth={1.7} />
                </span>
                <div className="readiness__panel">
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal y={20} delay={0.15} className="readiness__closing">
          <p>
            Graduates of KAYO International enter primary school not just academically prepared, but
            as confident, curious, well-rounded children who genuinely enjoy learning. That is the
            difference a thoughtfully designed curriculum makes.
          </p>
        </Reveal>
      </div>

      <svg className="readiness__wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,44 C240,84 480,88 720,54 C960,20 1200,6 1440,48 L1440,90 L0,90 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
