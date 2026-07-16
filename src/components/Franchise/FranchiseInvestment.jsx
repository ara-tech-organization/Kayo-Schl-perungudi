import { Building2, Laptop2, Megaphone, PiggyBank, Receipt, Wallet } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FranchiseInvestment.css";

const INVESTMENT = [
  {
    icon: Wallet,
    title: "Franchise Fee",
    text: "One-time, with no recurring royalty.",
    tone: "primary",
  },
  {
    icon: Building2,
    title: "Infrastructure & Interiors",
    text: "Centre design, child-safe furniture, learning materials, play equipment.",
    tone: "secondary",
  },
  {
    icon: Laptop2,
    title: "Technology Setup",
    text: "CCTV systems, parent communication tools, administrative software.",
    tone: "gold",
  },
  {
    icon: Megaphone,
    title: "Initial Marketing",
    text: "Launch campaigns, local promotions, and digital presence.",
    tone: "orange",
  },
  {
    icon: PiggyBank,
    title: "Working Capital",
    text: "For the first few months of operation.",
    tone: "primary",
  },
];

export default function FranchiseInvestment() {
  return (
    <section className="fr-invest" id="investment">
      <span className="fr-invest__curve fr-invest__curve--top" aria-hidden="true" />
      <span className="fr-invest__curve fr-invest__curve--bottom" aria-hidden="true" />

      <div className="fr-invest__backdrop" aria-hidden="true">
        <span className="fr-invest__blob fr-invest__blob--a" />
        <span className="fr-invest__blob fr-invest__blob--b" />
      </div>

      <div className="container fr-invest__inner">
        <SectionHeading
          eyebrow="Investment Overview"
          title="What Your Investment Covers"
          description="The total investment for a Kayo International preschool franchise varies based on location, property size, and local market conditions. Our investment framework typically covers:"
        />

        <div className="fr-invest__receipt-wrap">
          <span className="fr-invest__receipt-backing" aria-hidden="true" />

          <div className="fr-invest__receipt">
            <div className="fr-invest__receipt-head">
              <span className="fr-invest__receipt-icon">
                <Receipt size={18} strokeWidth={1.8} />
              </span>
              <div>
                <strong>Investment Breakdown</strong>
                <span>{INVESTMENT.length} components</span>
              </div>
            </div>

            <ul className="fr-invest__list">
              {INVESTMENT.map((item, i) => (
                <Reveal
                  as="li"
                  y={14}
                  delay={0.05 * i}
                  key={item.title}
                  className={`fr-invest__row fr-invest__row--${item.tone}`}
                >
                  <span className="fr-invest__row-icon">
                    <item.icon strokeWidth={1.7} />
                  </span>
                  <div className="fr-invest__row-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <span className="fr-invest__row-index">{String(i + 1).padStart(2, "0")}</span>
                </Reveal>
              ))}
            </ul>
          </div>
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
