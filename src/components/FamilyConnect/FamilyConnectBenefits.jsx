import { motion } from "framer-motion";
import {
  Bus,
  GlassWater,
  GraduationCap,
  MapPinned,
  Palette,
  ShowerHead,
  Trees,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FloatingShapes from "../common/FloatingShapes";
import "./FamilyConnectBenefits.css";

const BENEFITS = [
  { icon: ShowerHead, label: "Clean Bathrooms & Wash Areas", tone: "primary" },
  { icon: Palette, label: "Children's Creative Corner", tone: "secondary" },
  { icon: Trees, label: "Spacious Indoor & Outdoor Play", tone: "gold" },
  { icon: UtensilsCrossed, label: "Dining Area", tone: "orange" },
  { icon: MapPinned, label: "Picnics & Field Trips", tone: "secondary" },
  { icon: Waves, label: "Sand Pit & Splash Pool", tone: "primary" },
  { icon: GlassWater, label: "R.O Purified Drinking Water", tone: "orange" },
  { icon: Bus, label: "Safe Transport Facility", tone: "gold" },
  { icon: GraduationCap, label: "Graduation & Annual Sports Meet", tone: "secondary" },
];

const TILTS = [-3, 2.4, -1.6, 3, -2.2, 1.8, -2.8, 1.4, -2];

const SHAPES = [
  { type: "blob", color: "var(--color-gold-light)", size: 150, top: "6%", right: "2%", speed: 0.3, float: 18, dur: 8 },
  { type: "star", color: "var(--color-orange)", size: 26, bottom: "12%", left: "5%", speed: 0.36, float: 18, dur: 6, rotate: -16 },
  { type: "dot", color: "var(--color-secondary)", size: 18, top: "30%", left: "3%", speed: 0.46, float: 20, dur: 5, opacity: 0.7 },
  { type: "plus", color: "var(--color-primary)", size: 20, bottom: "22%", right: "8%", speed: 0.42, float: 14, dur: 6, opacity: 0.7 },
];

export default function FamilyConnectBenefits() {
  return (
    <section className="fc-benefits" id="benefits">
      <FloatingShapes items={SHAPES} />

      <div className="container fc-benefits__inner">
        <SectionHeading
          eyebrow="Life at Kayo International"
          title="Kayo Benefits"
          description="Every detail of our campus is designed with your child's safety, comfort and joy in mind."
        />

        <div className="fc-benefits__grid">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.label}
              className={`fc-benefits__tile fc-benefits__tile--${b.tone}`}
              style={{ "--tilt": `${TILTS[i % TILTS.length]}deg` }}
              initial={{ opacity: 0, y: 34, scale: 0.85, rotate: TILTS[i % TILTS.length] * 2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: TILTS[i % TILTS.length] }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 140, damping: 14, delay: (i % 3) * 0.07 }}
              whileHover={{ rotate: 0, y: -8, scale: 1.05, transition: { type: "spring", stiffness: 320, damping: 18 } }}
            >
              <motion.span
                className="fc-benefits__tile-icon"
                whileHover={{ rotate: [0, -12, 8, 0], scale: 1.12 }}
                transition={{ duration: 0.5 }}
              >
                <b.icon strokeWidth={1.7} />
              </motion.span>
              <span className="fc-benefits__tile-label">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
