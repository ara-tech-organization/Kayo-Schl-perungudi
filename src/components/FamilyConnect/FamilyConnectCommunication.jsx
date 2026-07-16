import { motion } from "framer-motion";
import {
  Activity,
  CalendarDays,
  FileBarChart,
  Megaphone,
  MessageSquareText,
  Users,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FamilyConnectCommunication.css";
import phoneBg from "../../assets/Family connect.png";

const EASE = [0.16, 1, 0.3, 1];

const FEATURES = [
  { icon: MessageSquareText, title: "SMS Daily Updates", text: "Instant text updates on your child's meals, naps and activities." },
  { icon: FileBarChart, title: "Regular Progress Reports", text: "Structured reports tracking developmental milestones over time." },
  { icon: Users, title: "Parent-Teacher Meetings", text: "Face-to-face conversations to discuss your child's growth in depth." },
  { icon: Megaphone, title: "Open Communication Channels", text: "Multiple ways to reach your child's teacher whenever you need to." },
  { icon: Activity, title: "Real-Time Updates on Child Activities", text: "Stay connected to what your child is experiencing, as it happens." },
  { icon: CalendarDays, title: "Monthly Learning Insights", text: "A monthly summary of themes, skills and highlights from the classroom." },
];

export default function FamilyConnectCommunication() {
  return (
    <section className="fc-comm" id="communication">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Never Miss a Moment of Your Child's Day"
          title="Daily Communication"
          description="Consistent, meaningful communication is the backbone of successful family engagement preschool programmes. At Kayo International, we ensure you are always informed about your child's daily experiences through multiple touchpoints designed for busy modern families."
        />

        <div className="fc-comm__grid">
          <Reveal x={-24} y={0} className="fc-comm__phone">
            <div className="fc-comm__phone-frame">
              <span className="fc-comm__phone-notch" />
              <div className="fc-comm__phone-screen">
                <img src={phoneBg} alt="" className="fc-comm__phone-bg" aria-hidden="true" />
                <span className="fc-comm__phone-scrim" aria-hidden="true" />
                <motion.div
                  className="fc-comm__bubble fc-comm__bubble--a"
                  initial={{ opacity: 0, y: 14, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  Aanya had a great lunch and played in the sand pit today!
                </motion.div>
                <motion.div
                  className="fc-comm__bubble fc-comm__bubble--b"
                  initial={{ opacity: 0, y: 14, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                >
                  Monthly learning insight is ready to view.
                </motion.div>
                <motion.div
                  className="fc-comm__bubble fc-comm__bubble--c"
                  initial={{ opacity: 0, y: 14, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                >
                  Naptime: 1:15 PM &mdash; 2:30 PM
                </motion.div>
              </div>
            </div>
          </Reveal>

          <div className="fc-comm__list">
            {FEATURES.map((f, i) => (
              <Reveal as="div" y={22} delay={0.07 * i} key={f.title} className="fc-comm__item">
                <span className="fc-comm__icon">
                  <f.icon strokeWidth={1.7} />
                </span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
