import { useState } from "react";
import {
  Baby,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Reveal from "../common/Reveal";
import "./ContactFormSection.css";

const CHILD_AGES = ["1.5–2 Years", "2–3 Years", "3–4 Years", "4–6 Years", "6-12 Years"];
const PROGRAMMES = ["Playgroup", "Nursery", "Junior KG", "Senior KG", "Daycare"];
const BRANCHES = ["Perungudi, Chennai", "Saravanampatti, Coimbatore"];

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="container contact-form-section__grid">
        <Reveal x={-30} y={0} className="contact-info">
          <div className="contact-info__card">
            <span className="eyebrow">Main Branch</span>
            <h2>Our Perungudi Campus</h2>

            <div className="contact-info__points">
              <div className="contact-info__point">
                <span>
                  <MapPin strokeWidth={1.8} />
                </span>
                <div>
                  <strong>Address</strong>
                  <p>No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai &ndash; 600096</p>
                </div>
              </div>

              <div className="contact-info__point">
                <span>
                  <Phone strokeWidth={1.8} />
                </span>
                <div>
                  <strong>Phone</strong>
                  <p>
                    <a href="tel:+919884004650">+91 98840 04650</a>
                  </p>
                </div>
              </div>

              <div className="contact-info__point">
                <span>
                  <Mail strokeWidth={1.8} />
                </span>
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href="mailto:chnperungudi@kayointernational.in">
                      chnperungudi@kayointernational.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info__point">
                <span>
                  <Clock3 strokeWidth={1.8} />
                </span>
                <div>
                  <strong>Preschool Hours</strong>
                  <p>Monday to Saturday &mdash; 9:00 AM to 6:00 PM</p>
                </div>
              </div>

              <div className="contact-info__point">
                <span>
                  <CalendarClock strokeWidth={1.8} />
                </span>
                <div>
                  <strong>Campus Tour Timing</strong>
                  <p>Monday to Saturday &mdash; 10:00 AM to 5:00 PM (by appointment)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info__floating">
            <span>
              <Building2 strokeWidth={1.8} />
            </span>
            <div>
              <strong>2 Campuses</strong>
              <small>Chennai &amp; Coimbatore</small>
            </div>
          </div>
        </Reveal>

        <Reveal x={30} y={0} delay={0.1} className="contact-form-wrap">
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-form__success">
                <CheckCircle2 size={44} strokeWidth={1.5} />
                <h3>Thank You!</h3>
                <p>
                  Your enquiry has been received. Our admissions counsellor will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <span className="eyebrow">Quick Contact Form</span>
                <h3>Send Us an Enquiry</h3>
                <p className="contact-form__hint">
                  Fill in the form below and our admissions counsellor will get back to you
                  within 24 hours.
                </p>

                <div className="contact-form__row">
                  <label>
                    Parent&rsquo;s Name
                    <input type="text" name="parentName" required placeholder="Enter your full name" />
                  </label>
                  <label>
                    Phone Number
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter your 10-digit mobile number"
                    />
                  </label>
                </div>

                <label className="contact-form__full">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email (optional)"
                  />
                </label>

                <div className="contact-form__row">
                  <label>
                    <Baby size={13} strokeWidth={2.2} /> Child&rsquo;s Age
                    <select name="childAge" defaultValue="" required>
                      <option value="" disabled>
                        Select age
                      </option>
                      {CHILD_AGES.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Programme Interested In
                    <select name="programme" defaultValue="" required>
                      <option value="" disabled>
                        Select programme
                      </option>
                      {PROGRAMMES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="contact-form__full">
                  Branch Preferred
                  <select name="branch" defaultValue="" required>
                    <option value="" disabled>
                      Select branch
                    </option>
                    {BRANCHES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="contact-form__full">
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="How can we help you? (optional)"
                  />
                </label>

                <button type="submit" className="btn btn-primary contact-form__submit">
                  Send Enquiry <Send size={17} />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
