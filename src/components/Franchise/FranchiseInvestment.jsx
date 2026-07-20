import { Building2, Coins, Laptop2, Megaphone, PiggyBank, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./FranchiseInvestment.css";

const SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 28, top: "14%", right: "7%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-primary)", size: 22, bottom: "16%", left: "7%", speed: 0.44, float: 14, dur: 5, opacity: 0.6 },
];

// Soft pastel wedge fills (the --*-light tokens are too pale for a donut)
const INVESTMENT = [
  { icon: Wallet, title: "Franchise Fee", text: "One-time, with no recurring royalty.", tone: "primary", color: "#cf9bce" },
  { icon: Building2, title: "Infrastructure & Interiors", text: "Centre design, child-safe furniture, learning materials, play equipment.", tone: "secondary", color: "#cbe39c" },
  { icon: Laptop2, title: "Technology Setup", text: "CCTV systems, parent communication tools, administrative software.", tone: "gold", color: "#fce2a0" },
  { icon: Megaphone, title: "Initial Marketing", text: "Launch campaigns, local promotions, and digital presence.", tone: "orange", color: "#f7b48f" },
  { icon: PiggyBank, title: "Working Capital", text: "For the first few months of operation.", tone: "forest", color: "#a6cfae" },
];

const WEDGE = 360 / INVESTMENT.length;
const RADIUS = 104;

const CONIC = `conic-gradient(${INVESTMENT.map(
  (it, i) => `${it.color} ${i * WEDGE}deg ${(i + 1) * WEDGE}deg`
).join(", ")})`;

export default function FranchiseInvestment() {
  return (
    <section className="fr-invest" id="investment">
      <svg className="fr-invest__wave fr-invest__wave--top" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 L1440,0 L1440,46 C1200,86 960,18 720,44 C480,70 240,88 0,44 Z" fill="var(--color-bg)" />
      </svg>
      <svg className="fr-invest__wave fr-invest__wave--bottom" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,90 L1440,90 L1440,44 C1200,4 960,72 720,46 C480,20 240,2 0,46 Z" fill="var(--color-bg)" />
      </svg>

      <div className="fr-invest__backdrop" aria-hidden="true">
        <span className="fr-invest__blob fr-invest__blob--a" />
        <span className="fr-invest__blob fr-invest__blob--b" />
      </div>
      <FloatingShapes items={SHAPES} />

      <div className="container fr-invest__inner">
        <SectionHeading
          eyebrow="Investment Overview"
          title="What Your Investment Covers"
          description="The total investment for a Kayo International preschool franchise varies based on location, property size, and local market conditions. Here's every essential your investment covers:"
        />

        <div className="fr-invest__split">
          <motion.div
            className="fr-invest__wheel"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 90, damping: 15 }}
          >
            {/* The rolling part: wedges + markers spin together */}
            <div className="fr-invest__spin">
              <span className="fr-invest__donut" style={{ background: CONIC }} aria-hidden="true" />
              {INVESTMENT.map((it, i) => {
                const mid = i * WEDGE + WEDGE / 2;
                return (
                  <span
                    key={it.title}
                    className={`fr-invest__marker fr-invest__marker--${it.tone}`}
                    style={{ transform: `translate(-50%, -50%) rotate(${mid}deg) translate(0, -${RADIUS}px) rotate(${-mid}deg)` }}
                    aria-hidden="true"
                  >
                    <span className="fr-invest__marker-i">
                      <it.icon size={18} strokeWidth={1.9} />
                    </span>
                  </span>
                );
              })}
            </div>

            {/* Fixed hub stays upright while the wheel rolls */}
            <span className="fr-invest__hole">
              <Coins size={24} strokeWidth={1.7} />
              <strong>5</strong>
              <small>essentials covered</small>
            </span>
          </motion.div>

          <ul className="fr-invest__legend">
            {INVESTMENT.map((it, i) => (
              <Reveal
                as="li"
                y={16}
                delay={0.05 * i}
                key={it.title}
                className={`fr-invest__leg fr-invest__leg--${it.tone}`}
              >
                <span className="fr-invest__leg-node" aria-hidden="true">
                  <span className="fr-invest__leg-num">{i + 1}</span>
                </span>
                <span className="fr-invest__leg-card">
                  <span className="fr-invest__leg-tab" aria-hidden="true">
                    <it.icon size={17} strokeWidth={2} />
                  </span>
                  <span className="fr-invest__leg-copy">
                    <h3>{it.title}</h3>
                    <p>{it.text}</p>
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal y={18} delay={0.1} className="fr-invest__note">
          <p>
            During our confidential discussion, we provide detailed financial projections,
            break-even analysis, and a clear understanding of revenue potential based on your
            specific location and market conditions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
