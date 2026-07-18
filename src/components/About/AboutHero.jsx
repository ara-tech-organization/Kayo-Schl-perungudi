import { motion } from "framer-motion";
import { Award, ArrowRight, Heart, Home, MapPin, MessageCircle, Sparkles, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "../common/Magnetic";
import FloatingShapes from "../common/FloatingShapes";
import Counter from "../common/Counter";
import "./AboutHero.css";
import aboutHeroImg from "../../assets/About2.png";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 180, top: "4%", left: "-2%", speed: 0.3, float: 20, dur: 8 },
  { type: "blob", color: "var(--color-gold-light)", size: 150, bottom: "10%", right: "-3%", speed: 0.24, float: 16, dur: 9 },
  { type: "star", color: "var(--color-gold)", size: 34, top: "18%", right: "10%", speed: 0.36, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "26%", left: "6%", speed: 0.44, float: 14, dur: 5, opacity: 0.8 },
  { type: "dot", color: "var(--color-secondary)", size: 18, top: "34%", left: "44%", speed: 0.5, float: 22, dur: 6, opacity: 0.7 },
  { type: "squiggle", color: "var(--color-primary)", size: 70, bottom: "16%", left: "40%", speed: 0.3, float: 12, dur: 7, opacity: 0.4 },
];

// Bobbing "sticker" badges pinned around the polaroid
const BADGES = [
  { icon: Award, value: 10, suffix: "+", label: "Years", tone: "gold", pos: "tl", dur: 4.6 },
  { icon: Users, value: 1000, suffix: "+", label: "Children", tone: "secondary", pos: "tr", dur: 5.2 },
  { icon: Star, value: 4.9, decimals: 1, suffix: "★", label: "Rating", tone: "primary", pos: "br", dur: 4.9 },
];

const STRIP = [
  { icon: Award, value: 10, suffix: "+", label: "Years of Trust", tone: "primary" },
  { icon: Users, value: 1000, suffix: "+", label: "Children Nurtured", tone: "secondary" },
  { icon: Star, value: 4.9, decimals: 1, suffix: "★", label: "Parent Rating", tone: "gold" },
  { icon: MapPin, value: 2, label: "Campuses — Chennai & Coimbatore", tone: "orange" },
];

export default function AboutHero() {
  return (
    <section className="ahero">
      <div className="ahero__backdrop" aria-hidden="true">
        <span className="ahero__mesh" />
        <span className="ahero__grain" />
      </div>
      <FloatingShapes items={SHAPES} />

      <div className="container ahero__grid">
        <motion.div
          className="ahero__copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <nav className="ahero__crumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>About Us</span>
          </nav>

          <span className="eyebrow">Our Story, Our People</span>

          <h1 className="ahero__title">
            About <span className="ahero__title-mark">Kayo International</span> Preschool
          </h1>

          <p className="ahero__lead">
            Every parent wants a preschool that feels like a second home — a place where their child
            is safe, nurtured, and inspired to explore the world with confidence. At Kayo
            International Preschool and DayCare, we have spent over a decade making that vision a
            reality for families across Chennai and Coimbatore.
          </p>

          <p className="ahero__lead ahero__lead--muted">
            Founded in 2013 by Veena Sundaramurthy, Kayo was born from a deeply personal calling: to
            create an early learning environment that truly puts children first — now one of the most
            trusted preschools in Perungudi, Chennai.
          </p>

          <div className="ahero__tags">
            <span className="ahero__tag">
              <MapPin size={15} strokeWidth={2.2} /> Perungudi, Chennai OMR
            </span>
            <span className="ahero__tag ahero__tag--gold">
              <Heart size={13} strokeWidth={2.6} /> Since 2013
            </span>
          </div>

          <div className="ahero__actions">
            <Magnetic strength={0.3}>
              <a href="#enquiry" className="btn btn-primary">
                Book a Visit <ArrowRight size={18} />
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="https://wa.me/919884004650"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          className="ahero__collage"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
        >
          <span className="ahero__note ahero__note--a" aria-hidden="true" />
          <span className="ahero__note ahero__note--b" aria-hidden="true" />

          <motion.div
            className="ahero__polaroid"
            initial={{ rotate: -5 }}
            animate={{ rotate: -3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            whileHover={{ rotate: 0, y: -8, transition: { type: "spring", stiffness: 220, damping: 16 } }}
          >
            <span className="ahero__tape" aria-hidden="true" />
            <img
              src={aboutHeroImg}
              alt="Bright nurturing classroom environment at Kayo International Preschool and DayCare Chennai"
              className="ahero__polaroid-img"
            />
            <span className="ahero__caption">Where little ones belong &hearts;</span>
          </motion.div>

          <span className="ahero__sparkle" aria-hidden="true">
            <Sparkles size={20} strokeWidth={2} />
          </span>

          {BADGES.map((b, i) => (
            <motion.div
              className={`ahero__badge ahero__badge--${b.pos} ahero__badge--${b.tone}`}
              key={b.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, i % 2 ? 10 : -10, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 + i * 0.12, ease: EASE },
                scale: { duration: 0.6, delay: 0.5 + i * 0.12, ease: EASE },
                y: { duration: b.dur, delay: 1 + i * 0.15, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <span className="ahero__badge-icon">
                <b.icon size={18} strokeWidth={2} />
              </span>
              <strong>
                <Counter value={b.value} suffix={b.suffix || ""} decimals={b.decimals || 0} />
              </strong>
              <small>{b.label}</small>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container">
        <div className="ahero__strip">
          {STRIP.map((s, i) => (
            <motion.div
              className={`ahero__stat ahero__stat--${s.tone}`}
              key={s.label}
              initial={{ opacity: 0, y: 20, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.2 : -1.2 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 130, damping: 15, delay: i * 0.08 }}
              whileHover={{ rotate: 0, y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } }}
            >
              <span className="ahero__stat-icon">
                <s.icon size={20} strokeWidth={1.9} />
              </span>
              <div>
                <strong>
                  <Counter value={s.value} suffix={s.suffix || ""} decimals={s.decimals || 0} />
                </strong>
                <small>{s.label}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <svg className="ahero__wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,36 C240,68 480,8 720,26 C960,44 1200,64 1440,30 L1440,70 L0,70 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
