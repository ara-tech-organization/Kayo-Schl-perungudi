import { Coffee, GraduationCap, PartyPopper, Sparkles, UtensilsCrossed } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./FamilyConnectEvents.css";

const EVENTS = [
  {
    icon: PartyPopper,
    tag: "January",
    title: "New Year's Celebration",
    text: "Families ring in the new year together with music, games and joyful classroom traditions.",
    tone: "primary",
  },
  {
    icon: GraduationCap,
    tag: "March",
    title: "Preschool Graduation",
    text: "A proud milestone celebration as our graduates step confidently into their next chapter.",
    tone: "secondary",
  },
  {
    icon: Coffee,
    tag: "May",
    title: "Mother's Day Tea Party",
    text: "A warm, intimate get-together honouring every mother with tea, treats and heartfelt moments.",
    tone: "gold",
  },
  {
    icon: UtensilsCrossed,
    tag: "June",
    title: "Father's Day Luncheon",
    text: "Fathers join their children for a relaxed luncheon celebrating their special bond.",
    tone: "orange",
  },
  {
    icon: Sparkles,
    tag: "November",
    title: "Children's Day Party",
    text: "A day dedicated entirely to our little ones, filled with performances, surprises and fun.",
    tone: "primary",
  },
];

const SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 28, top: "10%", left: "5%", speed: 0.34, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "var(--color-primary)", size: 16, top: "40%", right: "6%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
  { type: "plus", color: "var(--color-orange)", size: 20, bottom: "14%", left: "7%", speed: 0.42, float: 14, dur: 6, opacity: 0.7 },
  { type: "squiggle", color: "var(--color-secondary)", size: 60, bottom: "24%", right: "8%", speed: 0.3, float: 12, dur: 7, opacity: 0.5 },
];

export default function FamilyConnectEvents() {
  return (
    <section className="fc-events" id="events">
      <FloatingShapes items={SHAPES} />

      <div className="container">
        <SectionHeading
          eyebrow="Celebrating Together, All Year Round"
          title="A Year of Family Moments"
          description="Building a strong sense of community is at the heart of everything we do. Follow our calendar of family events that Perungudi families look forward to all year long."
        />

        <div className="fc-events__path">
          {EVENTS.map((e, i) => (
            <Reveal
              as="div"
              key={e.title}
              x={i % 2 === 0 ? -40 : 40}
              y={0}
              delay={0.05 * i}
              className={`fc-events__stop fc-events__stop--${i % 2 === 0 ? "left" : "right"}`}
            >
              <span className={`fc-events__medallion fc-events__medallion--${e.tone}`}>
                <e.icon strokeWidth={1.7} />
                <span className="fc-events__medallion-month">{e.tag}</span>
              </span>

              <div className={`fc-events__card fc-events__card--${e.tone}`}>
                <span className="fc-events__month">{e.tag}</span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                <span className="fc-events__confetti" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
