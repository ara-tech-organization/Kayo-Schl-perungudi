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
import FloatingShapes from "../common/FloatingShapes";
import "./FamilyConnectCommunication.css";
import phoneBg from "../../assets/Family connect.png";

const EASE = [0.16, 1, 0.3, 1];

const FEATURES = [
  { icon: MessageSquareText, tone: "primary", title: "SMS Daily Updates", text: "Instant text updates on your child's meals, naps and activities." },
  { icon: FileBarChart, tone: "secondary", title: "Regular Progress Reports", text: "Structured reports tracking developmental milestones over time." },
  { icon: Users, tone: "gold", title: "Parent-Teacher Meetings", text: "Face-to-face conversations to discuss your child's growth in depth." },
  { icon: Megaphone, tone: "orange", title: "Open Communication Channels", text: "Multiple ways to reach your child's teacher whenever you need to." },
  { icon: Activity, tone: "secondary", title: "Real-Time Activity Updates", text: "Stay connected to what your child is experiencing, as it happens." },
  { icon: CalendarDays, tone: "primary", title: "Monthly Learning Insights", text: "A monthly summary of themes, skills and highlights from the classroom." },
];

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 150, top: "8%", left: "-2%", speed: 0.3, float: 18, dur: 8 },
  { type: "dot", color: "var(--color-gold)", size: 18, top: "30%", right: "5%", speed: 0.46, float: 20, dur: 5 },
  { type: "star", color: "var(--color-orange)", size: 24, bottom: "16%", right: "8%", speed: 0.34, float: 18, dur: 6, rotate: -16 },
];

const BUBBLES = [
  { text: "Aanya had a great lunch and played in the sand pit today! 🏖️", time: "12:40 PM" },
  { text: "Monthly learning insight is ready to view 📊", time: "1:05 PM" },
  { text: "Naptime: 1:15 PM — 2:30 PM 😴", time: "2:35 PM" },
];

export default function FamilyConnectCommunication() {
  return (
    <section className="fc-comm" id="communication">
      <FloatingShapes items={SHAPES} />

      <div className="container fc-comm__inner">
        <SectionHeading
          align="center"
          eyebrow="Never Miss a Moment of Your Child's Day"
          title="Daily Communication"
          description="Consistent, meaningful communication is the backbone of successful family engagement. We keep you informed about your child's day through multiple touchpoints designed for busy modern families."
        />

        <div className="fc-comm__grid">
          <Reveal x={-24} y={0} className="fc-comm__phone">
            <div className="fc-comm__phone-frame">
              <span className="fc-comm__phone-notch" />
              <div className="fc-comm__phone-screen">
                <img src={phoneBg} alt="" className="fc-comm__phone-bg" aria-hidden="true" />
                <span className="fc-comm__phone-scrim" aria-hidden="true" />

                <div className="fc-comm__chat-head">
                  <span className="fc-comm__chat-avatar">K</span>
                  <span className="fc-comm__chat-meta">
                    <strong>Kayo International</strong>
                    <small><i className="fc-comm__online" /> online now</small>
                  </span>
                </div>

                <div className="fc-comm__chat">
                  {BUBBLES.map((b, i) => (
                    <motion.div
                      key={b.text}
                      className="fc-comm__bubble"
                      initial={{ opacity: 0, y: 14, scale: 0.94 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.55, delay: 0.2 + i * 0.25, ease: EASE }}
                    >
                      {b.text}
                      <span className="fc-comm__bubble-time">{b.time}</span>
                    </motion.div>
                  ))}
                  <motion.div
                    className="fc-comm__typing"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 1.05, ease: EASE }}
                    aria-hidden="true"
                  >
                    <span /><span /><span />
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="fc-comm__list">
            {FEATURES.map((f, i) => (
              <Reveal as="div" y={22} delay={0.06 * i} key={f.title} className={`fc-comm__item fc-comm__item--${f.tone}`}>
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
