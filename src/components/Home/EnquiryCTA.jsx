import { useState } from "react";
import { CalendarCheck, CheckCircle2, MapPin, Phone, Send } from "lucide-react";
import Reveal from "../common/Reveal";
import "./EnquiryCTA.css";

const PROGRAMMES = ["Day Care", "Playgroup", "Nursery", "LKG", "UKG", "Primary Enrichment Programme"];

export default function EnquiryCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="enquiry" id="enquiry">
      <div className="container enquiry__grid">
        <Reveal x={-30} y={0} className="enquiry__intro">
          <span className="eyebrow">Book a Visit</span>
          <h2>Start Your Child's Journey Today</h2>
          <p>
            Choosing the right preschool is one of the most important decisions you will make for
            your child. We invite you to visit our Perungudi campus, meet our founder and
            educators, explore our classrooms and play areas, and experience the warm, welcoming
            atmosphere that makes Kayo International the best preschool in Chennai.
          </p>

          <div className="enquiry__points">
            <div className="enquiry__point">
              <span>
                <MapPin strokeWidth={1.8} />
              </span>
              <div>
                <strong>Visit Our Campus</strong>
                <p>No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai - 600096</p>
              </div>
            </div>
            <div className="enquiry__point">
              <span>
                <CalendarCheck strokeWidth={1.8} />
              </span>
              <div>
                <strong>Book a Guided Tour</strong>
                <p>Meet our founder and educators</p>
              </div>
            </div>
          </div>

          <a href="tel:+919884004650" className="enquiry__call">
            <Phone size={18} strokeWidth={2} />
            Prefer to speak with us directly? Call <strong>+91 98840 04650</strong>
          </a>
        </Reveal>

        <Reveal x={30} y={0} delay={0.1} className="enquiry__form-wrap">
          <div className="enquiry__form-card">
            {submitted ? (
              <div className="enquiry__success">
                <CheckCircle2 size={44} strokeWidth={1.5} />
                <h3>Thank You!</h3>
                <p>Your enquiry has been received. Our team will reach out to you shortly.</p>
              </div>
            ) : (
              <form className="enquiry__form" onSubmit={handleSubmit}>
                <h3>Enquiry Form</h3>
                <div className="enquiry__row">
                  <label>
                    Parent Name
                    <input type="text" name="parentName" required placeholder="Your full name" />
                  </label>
                  <label>
                    Child's Name
                    <input type="text" name="childName" required placeholder="Your child's name" />
                  </label>
                </div>
                <div className="enquiry__row">
                  <label>
                    Child's Age
                    <input type="text" name="childAge" required placeholder="e.g. 3 years" />
                  </label>
                  <label>
                    Phone Number
                    <input type="tel" name="phone" required placeholder="+91 00000 00000" />
                  </label>
                </div>
                <div className="enquiry__row">
                  <label>
                    Email
                    <input type="email" name="email" required placeholder="you@email.com" />
                  </label>
                  <label>
                    Preferred Programme
                    <select name="programme" defaultValue="">
                      <option value="" disabled>
                        Select a programme
                      </option>
                      {PROGRAMMES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="enquiry__full">
                  Preferred Date for Visit
                  <input type="date" name="visitDate" />
                </label>
                <label className="enquiry__full">
                  Message
                  <textarea name="message" rows={4} placeholder="Tell us a little about your child..." />
                </label>

                <button type="submit" className="btn btn-primary enquiry__submit">
                  Start Today <Send size={17} />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
