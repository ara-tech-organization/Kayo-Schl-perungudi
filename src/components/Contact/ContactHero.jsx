import { motion } from "framer-motion";
import { Heart, Home, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import contactImg from "../../assets/contact.png";
import "./ContactHero.css";

const EASE = [0.16, 1, 0.3, 1];

const CHANNELS = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98840 04650",
    href: "tel:+919884004650",
    pos: "a",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Instantly",
    href: "https://wa.me/919884004650",
    pos: "b",
  },
  {
    icon: Mail,
    label: "Email",
    value: "chnperungudi@kayointernational.in",
    href: "mailto:chnperungudi@kayointernational.in",
    pos: "c",
  },
];

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__backdrop" aria-hidden="true">
        <span className="contact-hero__shape contact-hero__shape--dot" />
        <span className="contact-hero__shape contact-hero__shape--ring" />
        <span className="contact-hero__shape contact-hero__shape--star">
          <Sparkles size={20} strokeWidth={1.6} />
        </span>
      </div>

      <div className="container contact-hero__grid">
        <motion.div
          className="contact-hero__copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <nav className="contact-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Contact Us</span>
          </nav>

          <span className="eyebrow">We'd Love to Hear From You</span>

          <h1>Get in Touch With KAYO International</h1>

          <p className="contact-hero__lead">
            At KAYO International, we believe that choosing the right preschool is one of the
            most important decisions you will make for your child. That is why we encourage every
            parent to reach out, ask questions, and visit our campus before making this decision.
            We are here to provide all the information you need with warmth, honesty, and
            transparency.
          </p>

          <p className="contact-hero__lead">
            You can contact KAYO International preschool by phone, email, WhatsApp, or by filling
            out the quick enquiry form below. We typically respond to all enquiries within a few
            hours during preschool hours.
          </p>

          <div className="contact-hero__tag">
            <Heart size={14} strokeWidth={2.4} /> Enrolment Open for 2025&ndash;26
          </div>
        </motion.div>

        <motion.div
          className="contact-hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          <img
            src={contactImg}
            alt="Happy children at KAYO International Preschool, Perungudi"
            className="contact-hero__image"
          />

          {CHANNELS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className={`contact-hero__channel contact-hero__channel--${c.pos}`}
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 + i * 0.12, ease: EASE },
                scale: { duration: 0.6, delay: 0.4 + i * 0.12, ease: EASE },
                y: { duration: 4.5 + i, delay: 1 + i * 0.2, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.06, y: -6 }}
            >
              <span className="contact-hero__channel-icon">
                <c.icon size={18} strokeWidth={2} />
              </span>
              <span className="contact-hero__channel-text">
                <strong>{c.label}</strong>
                <small>{c.value}</small>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <svg
        className="contact-hero__wave"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C240,60 480,4 720,20 C960,36 1200,58 1440,28 L1440,60 L0,60 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
