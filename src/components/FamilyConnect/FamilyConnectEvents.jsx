import {
  Coffee,
  GraduationCap,
  PartyPopper,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
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
    icon: Coffee,
    tag: "May",
    title: "Mother's Day Tea Party",
    text: "A warm, intimate get-together honouring every mother with tea, treats and heartfelt moments.",
    tone: "secondary",
  },
  {
    icon: Sparkles,
    tag: "November",
    title: "Children's Day Party",
    text: "A day dedicated entirely to our little ones, filled with performances, surprises and fun.",
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
    icon: GraduationCap,
    tag: "March",
    title: "Preschool Graduation",
    text: "A proud milestone celebration as our graduates step confidently into their next chapter.",
    tone: "primary",
  },
];

const TRACK = [...EVENTS, ...EVENTS];

export default function FamilyConnectEvents() {
  return (
    <section className="fc-events" id="events">
      <div className="container">
        <SectionHeading
          eyebrow="Celebrating Together, All Year Round"
          title="Family Events Calendar"
          description="Building a strong sense of community is at the heart of everything we do at Kayo International. Throughout the year, we host a variety of family events preschool Perungudi families look forward to, creating cherished memories and meaningful connections among our school community."
        />
      </div>

      <div className="fc-events__viewport">
        <div className="fc-events__rail">
          {TRACK.map((e, i) => (
            <div
              key={`${e.title}-${i}`}
              className={`fc-events__ticket fc-events__ticket--${e.tone}`}
            >
              <div className="fc-events__ticket-top">
                <span className="fc-events__icon">
                  <e.icon strokeWidth={1.7} />
                </span>
                <span className="fc-events__tag">{e.tag}</span>
              </div>
              <div className="fc-events__perf" aria-hidden="true" />
              <div className="fc-events__ticket-body">
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
