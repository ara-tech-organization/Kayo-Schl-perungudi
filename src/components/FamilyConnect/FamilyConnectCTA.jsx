import { motion } from "framer-motion";
import { ArrowRight, Heart, Phone, Sparkles } from "lucide-react";
import Reveal from "../common/Reveal";
import Magnetic from "../common/Magnetic";
import FloatingShapes from "../common/FloatingShapes";
import "./FamilyConnectCTA.css";

const SHAPES = [
  { type: "ring", color: "rgba(255,255,255,0.5)", size: 84, top: "-8%", left: "8%", speed: 0.4, float: 16, dur: 7 },
  { type: "star", color: "var(--color-gold)", size: 30, top: "16%", right: "8%", speed: 0.34, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "rgba(255,255,255,0.55)", size: 16, bottom: "18%", left: "6%", speed: 0.46, float: 20, dur: 5 },
  { type: "plus", color: "rgba(255,255,255,0.42)", size: 20, bottom: "12%", right: "14%", speed: 0.42, float: 14, dur: 6 },
];

export default function FamilyConnectCTA() {
  return (
    <section className="fc-cta">
      <div className="container">
        <Reveal y={26} className="fc-cta__card">
          <FloatingShapes items={SHAPES} />
          <span className="fc-cta__pattern" aria-hidden="true" />

          <div className="fc-cta__content">
            <motion.span
              className="fc-cta__icon"
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Sparkles strokeWidth={1.7} />
            </motion.span>

            <h2>
              Ready to Become Part of Our <span className="fc-cta__mark">Kayo Family</span>?
            </h2>
            <p>
              Experience the warmth of a school community where you are always kept close to your
              child&rsquo;s everyday journey.
            </p>

            <div className="fc-cta__actions">
              <Magnetic strength={0.3}>
                <a href="/#enquiry" className="btn fc-cta__btn-primary">
                  Book a Visit <ArrowRight size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href="tel:+919884004650" className="btn btn-ghost-light">
                  <Phone size={17} strokeWidth={2} /> +91 98840 04650
                </a>
              </Magnetic>
            </div>

            <span className="fc-cta__hearts" aria-hidden="true">
              <Heart size={16} fill="currentColor" strokeWidth={0} />
              Loved by 1,000+ Chennai families
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
