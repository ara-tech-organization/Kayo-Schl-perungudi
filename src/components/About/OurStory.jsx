import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, BookHeart, Briefcase, Sparkles } from "lucide-react";
import Reveal from "../common/Reveal";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import "./OurStory.css";
import ourStoryBg from "../../assets/About.png";

const MILESTONES = [
  {
    icon: Briefcase,
    text: "A journey from the IT industry into early childhood education, driven by purpose.",
  },
  {
    icon: BookHeart,
    text: "Qualified in Early Childhood Education (TESOL) and a Diploma in Child Psychology.",
  },
  {
    icon: Sparkles,
    text: "Creator of the proprietary NURTURE Lab Curriculum — Montessori meets STEM.",
  },
  {
    icon: BadgeCheck,
    text: "Built on values of quality, transparency and innovation with a co-founder in tech and business.",
  },
];

export default function OurStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <section className="our-story" id="our-story" ref={ref}>
      <div className="our-story__bg">
        <motion.img
          className="our-story__bg-image"
          src={ourStoryBg}
          alt="Happy children engaged in Montessori STEM learning activities at Kayo International Preschool Chennai"
          style={{ y: bgY }}
        />
        <span className="our-story__bg-overlay" aria-hidden="true" />
      </div>

      <div className="container our-story__grid">
        <div className="our-story__copy">
          <Reveal y={16}>
            <span className="eyebrow">How We Began</span>
          </Reveal>
          <Reveal y={22} delay={0.08}>
            <h2>Our Story — From Corporate World to Children&rsquo;s World</h2>
          </Reveal>

          <div className="our-story__prose">
            <Reveal y={18} delay={0.14}>
              <p>
                Kayo International was founded in 2013 by Veena Sundaramurthy, whose journey from
                the IT industry to early childhood education was driven by a passion for shaping
                young minds. With qualifications in Early Childhood Education from TESOL and a
                Diploma in Child Psychology, she combined her expertise with a vision to create a
                nurturing preschool where children learn with confidence, curiosity, and joy.
              </p>
            </Reveal>
            <Reveal y={18} delay={0.2}>
              <p>
                Committed to providing the best early learning experience, Veena developed the
                proprietary NURTURE Lab Curriculum, blending Montessori principles with STEM-based,
                play-led learning. Her continuous participation in educational workshops and
                research ensures that Kayo International remains at the forefront of modern
                preschool education.
              </p>
            </Reveal>
            <Reveal y={18} delay={0.26}>
              <p>
                Supported by a co-founder with an engineering and business background, Kayo
                International is built on strong values of quality, transparency, and innovation.
                Together, they have created a trusted learning environment that prepares children
                for school and lifelong success.
              </p>
            </Reveal>
          </div>
        </div>

        <StaggerGroup className="our-story__timeline">
          {MILESTONES.map((m) => (
            <StaggerItem key={m.text}>
              <div className="our-story__milestone">
                <span>
                  <m.icon size={18} strokeWidth={1.8} />
                </span>
                <p>{m.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
