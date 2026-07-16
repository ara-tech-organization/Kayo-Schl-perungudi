import { Phone, MapPin, Users2 } from "lucide-react";
import Reveal from "../common/Reveal";
import "./PoliciesCTA.css";

export default function PoliciesCTA() {
  return (
    <section className="pol-cta" id="policies-cta">
      <div className="container pol-cta__grid">
        <Reveal x={-30} y={0} className="pol-cta__intro">
          <span className="eyebrow">We Are Here to Help</span>
          <h2>Have Questions About Our Policies?</h2>
          <p>
            We understand that reading about policies is helpful, but sometimes you simply want to
            speak with a real person who can address your specific concerns. Whether you would
            like clarification on our preschool health and safety procedures, want to discuss your
            child&rsquo;s individual needs, or are ready to explore enrollment, our friendly team
            is here to assist you.
          </p>
          <p>
            Every family is welcome to visit our centre, meet our qualified educators, and see our
            preschool safety policies in action. There is no substitute for experiencing firsthand
            the warm, secure environment we have created for our children.
          </p>

          <a href="tel:+919884004650" className="btn btn-primary pol-cta__call">
            <Phone size={17} strokeWidth={2.2} /> Call Now
          </a>
        </Reveal>

        <Reveal x={30} y={0} delay={0.1} className="pol-cta__card-wrap">
          <div className="pol-cta__card">
            <span className="pol-cta__card-icon">
              <Users2 strokeWidth={1.7} />
            </span>
            <h3>Visit Our Campus</h3>
            <p className="pol-cta__card-text">
              Meet our founder and educators, tour our classrooms and play areas, and experience
              our safety policies in action.
            </p>

            <div className="pol-cta__point">
              <span>
                <MapPin strokeWidth={1.8} />
              </span>
              <div>
                <strong>No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai - 600096</strong>
                <p>Open for guided visits every day</p>
              </div>
            </div>

            <a href="tel:+919884004650" className="pol-cta__phone">
              <Phone size={16} strokeWidth={2} />
              <span>
                Prefer to speak with us directly? Call <strong>+91 98840 04650</strong>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
