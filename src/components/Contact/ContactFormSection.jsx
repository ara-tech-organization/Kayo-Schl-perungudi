import { useState } from "react";
import { motion } from "framer-motion";
import {
  Baby,
  CalendarClock,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import FloatingShapes from "../common/FloatingShapes";
import Magnetic from "../common/Magnetic";
import "./ContactFormSection.css";

const EASE = [0.16, 1, 0.3, 1];

const CHILD_AGES = ["1.5–2 Years", "2–3 Years", "3–4 Years", "4–6 Years", "6-12 Years"];
const PROGRAMMES = ["Playgroup", "Nursery", "Junior KG", "Senior KG", "Daycare"];
const BRANCHES = ["Perungudi, Chennai", "Saravanampatti, Coimbatore"];

const SHAPES = [
  { type: "blob", color: "var(--color-secondary-light)", size: 150, top: "2%", left: "-2%", speed: 0.3, float: 18, dur: 8 },
  { type: "ring", color: "var(--color-primary)", size: 70, top: "44%", right: "2%", speed: 0.42, float: 14, dur: 6, opacity: 0.4 },
  { type: "star", color: "var(--color-gold)", size: 28, bottom: "10%", left: "3%", speed: 0.36, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 20, top: "16%", right: "8%", speed: 0.44, float: 14, dur: 5, opacity: 0.7 },
];

// Each contact detail is its own hand-placed "sticker" on a playful pin-board.
const INFO = [
  {
    icon: MapPin,
    tone: "purple",
    tilt: -2.4,
    label: "Visit Us",
    lines: ["No.3, 1st Cross Street, Rajiv Nagar,", "Perungudi, Chennai – 600096"],
  },
  {
    icon: Phone,
    tone: "green",
    tilt: 2,
    label: "Call Us",
    lines: [{ text: "+91 98840 04650", href: "tel:+919884004650" }],
  },
  {
    icon: Mail,
    tone: "gold",
    tilt: -2,
    label: "Email Us",
    lines: [
      { text: "chnperungudi@kayointernational.in", href: "mailto:chnperungudi@kayointernational.in" },
    ],
  },
  {
    icon: Clock3,
    tone: "orange",
    tilt: 2.6,
    label: "Preschool Hours",
    lines: ["Monday to Saturday", "9:00 AM – 6:00 PM"],
  },
  {
    icon: CalendarClock,
    tone: "forest",
    tilt: -2,
    label: "Campus Tours",
    lines: ["Mon–Sat, 10 AM – 5 PM", "By appointment"],
  },
];

function InfoSticker({ item, index }) {
  return (
    <motion.article
      className={`cinfo__card cinfo__card--${item.tone}`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.06 }}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 18 } }}
    >
      <motion.span
        className="cinfo__card-icon"
        whileHover={{ rotate: [0, -10, 8, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <item.icon strokeWidth={1.9} />
      </motion.span>
      <div className="cinfo__card-body">
        <strong>{item.label}</strong>
        {item.lines.map((line, i) =>
          typeof line === "string" ? (
            <p key={i}>{line}</p>
          ) : (
            <p key={i}>
              <a href={line.href}>{line.text}</a>
            </p>
          )
        )}
      </div>
    </motion.article>
  );
}

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-form-section" id="contact-form">
      <FloatingShapes items={SHAPES} className="contact-form-section__shapes" />
      <span className="deco-dotgrid contact-form-section__dots" aria-hidden="true" />

      <div className="container contact-form-section__grid">
        <motion.div
          className="cinfo"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="eyebrow">Reach Us Your Way</span>
          <h2 className="cinfo__title">Our Perungudi Campus</h2>
          <p className="cinfo__intro">
            Pop in, phone, or ping us &mdash; whichever suits you. Here&rsquo;s everything you need to
            find and reach the KAYO family.
          </p>

          <div className="cinfo__board">
            {INFO.map((item, i) => (
              <InfoSticker key={item.label} item={item} index={i} />
            ))}

            <motion.div
              className="cinfo__badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.3 }}
              whileHover={{ y: -6, rotate: -3 }}
            >
              <span className="cinfo__badge-num">2</span>
              <div>
                <strong>Campuses</strong>
                <small>Chennai &amp; Coimbatore</small>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="cform-wrap"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <div className="cform-card">
            <span className="cform-card__stamp" aria-hidden="true">
              <Sparkles size={20} strokeWidth={1.8} />
            </span>
            <span className="cform-card__tape cform-card__tape--l" aria-hidden="true" />
            <span className="cform-card__tape cform-card__tape--r" aria-hidden="true" />

            {submitted ? (
              <motion.div
                className="cform__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 160, damping: 16 }}
              >
                <motion.span
                  className="cform__success-icon"
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                >
                  <CheckCircle2 size={40} strokeWidth={1.8} />
                </motion.span>
                <h3>Thank You!</h3>
                <p>
                  Your enquiry has landed safely. Our admissions counsellor will get back to you
                  within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form className="cform" onSubmit={handleSubmit}>
                <div className="cform__head">
                  <span className="eyebrow">Quick Enquiry</span>
                  <h3>Send Us a Message</h3>
                  <p className="cform__hint">
                    A few details is all it takes &mdash; we&rsquo;ll reply within 24 hours &#9997;
                  </p>
                </div>

                <div className="cform__row">
                  <label className="cfield">
                    <input type="text" name="parentName" required placeholder=" " />
                    <span className="cfield__label">Parent&rsquo;s Name</span>
                  </label>
                  <label className="cfield">
                    <input type="tel" name="phone" required placeholder=" " />
                    <span className="cfield__label">Phone Number</span>
                  </label>
                </div>

                <label className="cfield">
                  <input type="email" name="email" placeholder=" " />
                  <span className="cfield__label">Email Address (optional)</span>
                </label>

                <div className="cform__row">
                  <label className="cfield cfield--select">
                    <span className="cfield__lead-icon">
                      <Baby size={15} strokeWidth={2.1} />
                    </span>
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
                    <span className="cfield__label cfield__label--fixed">Child&rsquo;s Age</span>
                  </label>

                  <label className="cfield cfield--select">
                    <span className="cfield__lead-icon">
                      <GraduationCap size={15} strokeWidth={2.1} />
                    </span>
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
                    <span className="cfield__label cfield__label--fixed">Programme</span>
                  </label>
                </div>

                <label className="cfield cfield--select">
                  <span className="cfield__lead-icon">
                    <MapPin size={15} strokeWidth={2.1} />
                  </span>
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
                  <span className="cfield__label cfield__label--fixed">Branch Preferred</span>
                </label>

                <label className="cfield">
                  <textarea name="message" rows={4} placeholder=" " />
                  <span className="cfield__label">How can we help? (optional)</span>
                </label>

                <Magnetic strength={0.2} className="cform__submit-wrap">
                  <button type="submit" className="btn btn-primary cform__submit">
                    Send Enquiry <Send size={17} />
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
