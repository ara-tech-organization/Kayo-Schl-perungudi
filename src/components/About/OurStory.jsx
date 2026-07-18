import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, BookHeart, Briefcase, Flag, MapPin, Sparkles } from "lucide-react";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./OurStory.css";
import ourStoryImg from "../../assets/About.png";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-secondary-light)", size: 160, top: "6%", right: "-2%", speed: 0.28, float: 18, dur: 8 },
  { type: "star", color: "var(--color-gold)", size: 30, top: "24%", left: "5%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-primary)", size: 22, bottom: "20%", right: "8%", speed: 0.44, float: 14, dur: 5, opacity: 0.7 },
  { type: "dot", color: "var(--color-orange)", size: 18, bottom: "12%", left: "10%", speed: 0.48, float: 20, dur: 6, opacity: 0.7 },
];

const MILESTONES = [
  {
    icon: Briefcase,
    tone: "orange",
    year: "The Spark",
    text: "A leap from the IT industry into early childhood education — driven by a deeply personal sense of purpose.",
  },
  {
    icon: BookHeart,
    tone: "primary",
    year: "The Training",
    text: "Qualified in Early Childhood Education (TESOL) and a Diploma in Child Psychology to do it right.",
  },
  {
    icon: Sparkles,
    tone: "gold",
    year: "The Curriculum",
    text: "Creator of the proprietary NURTURE Lab Curriculum — where Montessori principles meet STEM.",
  },
  {
    icon: BadgeCheck,
    tone: "secondary",
    year: "The Team",
    text: "Built on quality, transparency and innovation — joined by a co-founder in tech and business.",
  },
];

export default function OurStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section className="story" id="our-story" ref={ref}>
      <FloatingShapes items={SHAPES} />

      <div className="container story__inner">
        <div className="story__intro">
          <motion.div
            className="story__figure"
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <span className="story__figure-frame" aria-hidden="true" />
            <div className="story__figure-mask">
              <motion.img
                src={ourStoryImg}
                alt="Happy children engaged in Montessori STEM learning activities at Kayo International Preschool Chennai"
                className="story__figure-img"
                style={{ y: imgY }}
              />
            </div>
            <span className="story__figure-chip">
              <Sparkles size={15} strokeWidth={2} /> Est. 2013
            </span>
          </motion.div>

          <div className="story__copy">
            <Reveal y={16}>
              <span className="eyebrow">How We Began</span>
            </Reveal>
            <Reveal y={22} delay={0.08}>
              <h2>
                From the Corporate World to a <span className="story__mark">Children&rsquo;s World</span>
              </h2>
            </Reveal>
            <Reveal y={18} delay={0.14}>
              <p>
                Kayo International was founded in 2013 by Veena Sundaramurthy, whose journey from the
                IT industry to early childhood education was driven by a passion for shaping young
                minds. With qualifications in Early Childhood Education from TESOL and a Diploma in
                Child Psychology, she created a nurturing preschool where children learn with
                confidence, curiosity, and joy.
              </p>
            </Reveal>
            <Reveal y={18} delay={0.2}>
              <p>
                Committed to the best early learning experience, Veena developed the proprietary
                NURTURE Lab Curriculum, blending Montessori principles with STEM-based, play-led
                learning — and keeps it at the forefront through continuous research and workshops.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="story__journey">
          <span className="eyebrow story__journey-label">The Journey So Far</span>

          <div className="story__trail">
            <span className="story__trail-rail" aria-hidden="true" />

            <span className="story__flag story__flag--start" aria-hidden="true">
              <MapPin size={16} strokeWidth={2.2} />
              Start
            </span>

            {MILESTONES.map((m, i) => (
              <motion.div
                className={`story__stop story__stop--${m.tone}`}
                key={m.year}
                initial={{ opacity: 0, y: 26, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 130, damping: 14, delay: i * 0.08 }}
              >
                <div className="story__stop-card">
                  <span className="story__stop-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <strong className="story__stop-year">{m.year}</strong>
                  <p>{m.text}</p>
                </div>
                <motion.span
                  className="story__stop-dot"
                  aria-hidden="true"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i * 0.35, repeat: Infinity, ease: "easeInOut" }}
                >
                  <m.icon size={20} strokeWidth={2} />
                </motion.span>
              </motion.div>
            ))}

            <span className="story__flag story__flag--end" aria-hidden="true">
              <Flag size={16} strokeWidth={2.2} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
