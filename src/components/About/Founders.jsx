import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Quote, Rocket } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import "./Founders.css";
import veenaImg from "../../assets/Veena.png";
import sankaraImg from "../../assets/Sankara.png";

const EASE = [0.16, 1, 0.3, 1];

const FOUNDERS = [
  {
    name: "Veena Sundaramurthy",
    role: "Founder & Director, M.A.",
    icon: GraduationCap,
    tone: "secondary",
    image: veenaImg,
    alt: "Veena Sundaramurthy, founder of Kayo International Preschool, with children in classroom at Perungudi Chennai centre",
    tags: ["Early Childhood Education", "Child Psychology", "NURTURE Lab Curriculum"],
    quote:
      "Every child deserves a nurturing space where they feel secure, inspired, and encouraged to reach their full potential.",
    bio: [
      "Veena Sundaramurthy, M.A. is the Founder and Director of Kayo International, bringing over a decade of experience in early childhood education. Her qualifications in Early Childhood Education and Child Psychology, along with her role as the creator of the NURTURE Lab Curriculum, reflect her commitment to holistic child development.",
      "Her unique blend of analytical thinking from the corporate world and genuine passion for education has shaped every aspect of Kayo International — from curriculum design and teacher training to creating a safe, engaging, and child-centred learning environment.",
      "As an educator, curriculum developer, and parent, Veena believes every child deserves a nurturing space where they feel secure, inspired, and encouraged to reach their full potential.",
    ],
  },
  {
    name: "Sankara K",
    role: "Co-Founder",
    icon: Rocket,
    tone: "secondary",
    image: sankaraImg,
    alt: "Sankara K, co-founder of Kayo International Preschool",
    tags: ["Bits Pilani", "EdTech Strategy", "Growth & Operations"],
    quote:
      "I partner with school leaders and help them think bigger — turning ambitious goals into reality.",
    bio: [
      "My journey from Bits Pilani sparked a lifelong mission: merging education with technology to reimagine how schools grow and thrive. That curiosity has never faded — it's what gets me up every morning.",
      "I spend my days building and testing bold, forward-thinking education solutions that help schools hit their goals, not just academically, but as businesses too. Scouting new opportunities is a big part of that — digging into markets, spotting trends, and staying a step ahead of what's happening across the industry.",
      "At the heart of it, my role is simple: I partner with school leaders and help them think bigger. Whether it's cracking a tough strategic problem or mapping out the next phase of growth, I'm there to help turn ambitious goals into reality.",
    ],
  },
];

export default function Founders() {
  const [active, setActive] = useState(0);

  return (
    <section className="founders" id="founders">
      <div className="founders__bg" aria-hidden="true">
        <span className="founders__shape founders__shape--a" />
        <span className="founders__shape founders__shape--c" />
      </div>

      <div className="container">
        <SectionHeading
          eyebrow="The People Behind Kayo"
          title="Meet Our Founders"
          description="Two complementary journeys — one rooted in early childhood education, the other in technology and strategy — brought together to build a preschool families trust."
        />

        <div className="founders__tabs" role="tablist" aria-label="Our founders">
          {FOUNDERS.map((f, i) => (
            <button
              key={f.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`founders__tab ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <f.icon size={16} strokeWidth={2} />
              {f.name}
            </button>
          ))}
        </div>

        <div className="founders__stage">
          <div className="founders__deck">
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.name}
                className="founders__panel"
                initial={false}
                animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 12 }}
                transition={{ duration: 0.4, ease: EASE }}
                aria-hidden={active !== i}
                style={{ pointerEvents: active === i ? "auto" : "none", zIndex: active === i ? 1 : 0 }}
              >
                <div className="founders__art">
                  <img src={f.image} alt={f.alt || f.name} className="founders__art-img" />
                  <span className="founders__role-chip">
                    <f.icon size={15} strokeWidth={2} />
                    {f.role}
                  </span>
                </div>

                <div className="founders__copy">
                  <h2 className="founders__name">
                    <span className="sr-only">Meet Our Founders — </span>
                    {f.name}
                  </h2>
                  <p className="founders__role">{f.role}</p>

                  <div className="founders__tags">
                    {f.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="founders__quote">
                    <Quote size={22} strokeWidth={2} aria-hidden="true" />
                    <p>&ldquo;{f.quote}&rdquo;</p>
                  </div>

                  {f.bio.map((para) => (
                    <p className="founders__bio" key={para.slice(0, 24)}>
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="founders__dots" aria-hidden="true">
            {FOUNDERS.map((f, i) => (
              <span key={f.name} className={active === i ? "is-active" : ""} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
