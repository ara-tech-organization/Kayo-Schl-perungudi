import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpenCheck, GraduationCap, RefreshCcw, ShieldCheck } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import Reveal from "../common/Reveal";
import "./OurTeam.css";
import teamImg from "../../assets/Team.png";

const EASE = [0.16, 1, 0.3, 1];

const QUALITIES = [
  {
    icon: GraduationCap,
    title: "Bachelor's Qualified",
    text: "Every teacher holds a Bachelor's degree in Early Years Education or an equivalent professional qualification.",
  },
  {
    icon: BookOpenCheck,
    title: "Child Development Focused",
    text: "A deep understanding of child development, learning psychology, and age-appropriate teaching methodologies.",
  },
  {
    icon: RefreshCcw,
    title: "Continuously Trained",
    text: "Regular participation in training sessions and workshops to stay updated with the latest research.",
  },
  {
    icon: ShieldCheck,
    title: "Truly Invested",
    text: "Educators who are genuinely invested in your child's success, sharing Veena's passion for early learning.",
  },
];

export default function OurTeam({
  imageSrc = teamImg,
  imageAlt = "Qualified early years teachers at Kayo International Preschool",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], [-140, 140]);

  return (
    <section className="our-team" id="our-team" ref={ref}>
      <div className="our-team__bg" aria-hidden="true">
        <span className="our-team__shape our-team__shape--b" />
        <span className="our-team__shape our-team__shape--c" />
        <span className="our-team__grain" />
      </div>

      <div className="container our-team__grid">
        <div className="our-team__copy">
          <SectionHeading
            align="left"
            eyebrow="Qualified, Caring, Committed"
            title="Our Team"
            description="A preschool is only as good as its educators. At Kayo International, we take immense pride in our team of dedicated teachers and caregivers who share Veena's passion for early childhood development."
          />

          <Reveal y={16} delay={0.06}>
            <p className="our-team__lead">
              We believe that understanding child development, learning psychology, and
              age-appropriate teaching methodologies is essential to providing the quality of care
              your child deserves.
            </p>
          </Reveal>

          <Reveal y={16} delay={0.1}>
            <p className="our-team__note">
              When you choose Kayo, you are choosing a preschool with qualified teachers in
              Chennai who are truly invested in your child&rsquo;s success.
            </p>
          </Reveal>

          <StaggerGroup className="our-team__grid-cards">
            {QUALITIES.map((q) => (
              <StaggerItem key={q.title}>
                <div className="our-team__card">
                  <span className="our-team__icon">
                    <q.icon strokeWidth={1.7} />
                  </span>
                  <h3>{q.title}</h3>
                  <p>{q.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <motion.div
          className="our-team__art"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
          style={{ y: artY }}
        >
          <img src={imageSrc} alt={imageAlt} className="our-team__art-img" />
          <span className="sr-only">
            Qualified early years teachers conducting interactive session at Kayo International
            Preschool Perungudi
          </span>
        </motion.div>
      </div>

      <svg
        className="our-team__wave"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,48 C240,96 480,100 720,64 C960,28 1200,10 1440,56 L1440,110 L0,110 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
