import { motion } from "framer-motion";
import { Award, Heart, Home, MapPin, Sparkles, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import "./AboutHero.css";
import aboutHeroImg from "../../assets/About2.png";

const EASE = [0.16, 1, 0.3, 1];

const SATELLITES = [
  { icon: Award, value: "10+", label: "Years", pos: "tl" },
  { icon: Users, value: "1,000+", label: "Children", pos: "tr" },
  { icon: Star, value: "4.9★", label: "Rating", pos: "br" },
];

const STRIP = [
  { icon: Award, value: "10+", label: "Years of Trust" },
  { icon: Users, value: "1,000+", label: "Children Nurtured" },
  { icon: Star, value: "4.9★", label: "Parent Rating" },
  { icon: MapPin, value: "2", label: "Campuses — Chennai & Coimbatore" },
];

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__backdrop" aria-hidden="true">
        <span className="about-hero__shape about-hero__shape--dot" />
        <span className="about-hero__shape about-hero__shape--star">
          <Sparkles size={20} strokeWidth={1.6} />
        </span>
      </div>

      <div className="container about-hero__grid">
        <motion.div
          className="about-hero__copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <nav className="about-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>About Us</span>
          </nav>

          <span className="eyebrow">Our Story, Our People</span>

          <h1>About Kayo International Preschool</h1>

          <p className="about-hero__lead">
            Every parent wants to find a preschool that feels like a second home, a place where
            their child is safe, nurtured, and inspired to explore the world with confidence. At
            Kayo International Preschool and DayCare, we have spent over a decade making that
            vision a reality for families across Chennai and Coimbatore.
          </p>

          <p className="about-hero__lead">
            Founded in 2013 by Veena Sundaramurthy, Kayo International was born from a deeply
            personal calling: to create an early learning environment that truly puts children
            first. What began as a heartfelt mission has grown into one of the most trusted
            preschools in Perungudi, Chennai — a name parents actively seek when searching for the
            best preschool founders in Chennai who bring both passion and professional expertise to
            early childhood education.
          </p>

          <div className="about-hero__tag">
            <MapPin size={16} strokeWidth={2} /> Perungudi, Chennai OMR
            <span className="about-hero__tag-dot" />
            <Heart size={14} strokeWidth={2.4} /> Since 2013
          </div>
        </motion.div>

        <motion.div
          className="about-hero__medallion"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          <span className="about-hero__orbit" />
          <span className="about-hero__orbit about-hero__orbit--inner" />

          <div className="about-hero__core">
            <img
              src={aboutHeroImg}
              alt="Bright nurturing classroom environment at Kayo International Preschool and DayCare Chennai"
              className="about-hero__core-img"
            />
          </div>

          {SATELLITES.map((s, i) => (
            <motion.div
              className={`about-hero__satellite about-hero__satellite--${s.pos}`}
              key={s.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: EASE }}
            >
              <span>
                <s.icon size={16} strokeWidth={1.9} />
              </span>
              <strong>{s.value}</strong>
              <small>{s.label}</small>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="about-hero__strip">
        <div className="container about-hero__strip-inner">
          {STRIP.map((s, i) => (
            <motion.div
              className="about-hero__strip-item"
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * i, ease: EASE }}
            >
              <span>
                <s.icon size={20} strokeWidth={1.7} />
              </span>
              <div>
                <strong>{s.value}</strong>
                <small>{s.label}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
