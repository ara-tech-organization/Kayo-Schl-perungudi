import { motion } from "framer-motion";
import { GraduationCap, Quote, Rocket } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FloatingShapes from "../common/FloatingShapes";
import "./Founders.css";
import veenaImg from "../../assets/Veena.png";
import sankaraImg from "../../assets/Sankara.png";

const FOUNDERS = [
  {
    name: "Veena Sundaramurthy",
    role: "Founder & Director, M.A.",
    icon: GraduationCap,
    tone: "primary",
    tilt: -2,
    image: veenaImg,
    alt: "Veena Sundaramurthy, founder of Kayo International Preschool, with children in classroom at Perungudi Chennai centre",
    tags: ["Early Childhood Education", "Child Psychology", "NURTURE Lab Curriculum"],
    quote:
      "Every child deserves a nurturing space where they feel secure, inspired, and encouraged to reach their full potential.",
    bio: [
      "Veena Sundaramurthy, M.A. is the Founder and Director of Kayo International, bringing over a decade of experience in early childhood education. Her qualifications in Early Childhood Education and Child Psychology, along with her role as creator of the NURTURE Lab Curriculum, reflect her commitment to holistic child development.",
      "Her unique blend of analytical thinking from the corporate world and genuine passion for education has shaped every aspect of Kayo — from curriculum design and teacher training to a safe, engaging, child-centred learning environment.",
    ],
  },
  {
    name: "Sankara K",
    role: "Co-Founder",
    icon: Rocket,
    tone: "orange",
    tilt: 2,
    image: sankaraImg,
    alt: "Sankara K, co-founder of Kayo International Preschool",
    tags: ["Bits Pilani", "EdTech Strategy", "Growth & Operations"],
    quote:
      "I partner with school leaders and help them think bigger — turning ambitious goals into reality.",
    bio: [
      "My journey from Bits Pilani sparked a lifelong mission: merging education with technology to reimagine how schools grow and thrive. That curiosity has never faded — it's what gets me up every morning.",
      "I build and test bold, forward-thinking education solutions that help schools hit their goals — academically and as businesses. At the heart of it, I partner with school leaders and help turn ambitious goals into reality.",
    ],
  },
];

export default function Founders() {
  return (
    <section className="founders" id="founders">
      <FloatingShapes
        items={[
          { type: "blob", color: "var(--color-secondary-light)", size: 170, top: "-4%", left: "-3%", speed: 0.26, float: 18, dur: 8 },
          { type: "blob", color: "var(--color-primary-light)", size: 150, bottom: "-6%", right: "6%", speed: 0.22, float: 16, dur: 9 },
          { type: "star", color: "var(--color-gold)", size: 30, top: "14%", right: "5%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
          { type: "plus", color: "var(--color-orange)", size: 22, bottom: "16%", left: "8%", speed: 0.44, float: 14, dur: 5, opacity: 0.7 },
        ]}
      />

      <div className="container">
        <SectionHeading
          eyebrow="The People Behind Kayo"
          title="Meet Our Founders"
          description="Two complementary journeys — one rooted in early childhood education, the other in technology and strategy — brought together to build a preschool families trust."
        />

        <div className="founders__grid">
          {FOUNDERS.map((f, i) => (
            <motion.article
              key={f.name}
              className={`fcard fcard--${f.tone}`}
              initial={{ opacity: 0, y: 46, rotate: f.tilt * 2.5, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, rotate: f.tilt, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 110, damping: 15, delay: i * 0.1 }}
              whileHover={{ rotate: 0, y: -10, transition: { type: "spring", stiffness: 260, damping: 18 } }}
            >
              <span className="fcard__tape" aria-hidden="true" />
              <span className="fcard__index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="fcard__head">
                <div className="fcard__photo">
                  <img src={f.image} alt={f.alt || f.name} className="fcard__photo-img" />
                </div>
                <span className="fcard__role-chip">
                  <f.icon size={15} strokeWidth={2} />
                  {f.role}
                </span>
              </div>

              <div className="fcard__body">
                <h3 className="fcard__name">
                  <span className="sr-only">Meet Our Founders — </span>
                  {f.name}
                </h3>
                <p className="fcard__role">{f.role}</p>

                <div className="fcard__tags">
                  {f.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="fcard__quote">
                  <Quote size={20} strokeWidth={2} aria-hidden="true" />
                  <p>&ldquo;{f.quote}&rdquo;</p>
                </div>

                <div className="fcard__bios">
                  {f.bio.map((para) => (
                    <p className="fcard__bio" key={para.slice(0, 24)}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
