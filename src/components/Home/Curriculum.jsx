import { Blocks, Brain, FlaskConical, Palette } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import "./Curriculum.css";
import curriculumImg from "../../assets/home.png";

const PILLARS = [
  {
    icon: Blocks,
    title: "Montessori Method",
    subtitle: "Independence Through Purposeful Activity",
  },
  {
    icon: FlaskConical,
    title: "STEM Integration",
    subtitle: "Building Future-Ready Skills",
  },
  {
    icon: Palette,
    title: "Play-Based Learning",
    subtitle: "Learning Through Joy",
  },
  {
    icon: Brain,
    title: "Multiple Intelligence Theory",
    subtitle: "Celebrating Every Child's Uniqueness",
  },
];

export default function Curriculum() {
  return (
    <section className="curriculum" id="curriculum">
      <div className="curriculum__bg" aria-hidden="true" />
      <div className="container curriculum__grid">
        <div className="curriculum__visual">
          <img src={curriculumImg} alt="The NURTURE Lab Curriculum" className="curriculum__visual-img" />
        </div>

        <div className="curriculum__content">
          <SectionHeading
            align="left"
            eyebrow="Our Signature Curriculum"
            title="The NURTURE Lab Curriculum — Where Montessori Meets STEM"
          />

          <StaggerGroup className="curriculum__pillars">
            {PILLARS.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="curriculum__pillar">
                  <span className="curriculum__pillar-icon">
                    <pillar.icon strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.subtitle}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
