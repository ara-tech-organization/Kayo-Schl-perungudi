import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import "./PoliciesJourney.css";

const EASE = [0.16, 1, 0.3, 1];

export default function PoliciesJourney({
  items,
  eyebrow,
  title,
  description,
  id,
  summaryTitle,
  summaryPoints = [],
}) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="pol-spotlight" id={id}>
      <div className="container">
        <div className="pol-spotlight__head">
          <Reveal y={18}>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal y={22} delay={0.08}>
            <h2>{title}</h2>
          </Reveal>
          {description && (
            <Reveal y={18} delay={0.14}>
              <p className="pol-spotlight__desc">{description}</p>
            </Reveal>
          )}
        </div>

        <div className="pol-spotlight__panel">
          <div className="pol-spotlight__tabs">
            {items.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.title}
                  type="button"
                  className={`pol-spotlight__tab pol-spotlight__tab--${p.tone} ${
                    isActive ? "is-active" : ""
                  }`}
                  onClick={() => setActive(i)}
                >
                  <span className="pol-spotlight__tab-icon">
                    <p.icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className="pol-spotlight__tab-text">
                    <strong>{p.title}</strong>
                    <span>{p.tagline}</span>
                  </span>
                  <ArrowRight size={16} strokeWidth={2.2} className="pol-spotlight__tab-arrow" />
                </button>
              );
            })}

            {(summaryTitle || summaryPoints.length > 0) && (
              <div className="pol-spotlight__summary">
                <span className="pol-spotlight__summary-kicker">At a Glance</span>
                {summaryTitle && <p>{summaryTitle}</p>}
                {summaryPoints.length > 0 && (
                  <ul>
                    {summaryPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className={`pol-spotlight__stage pol-spotlight__stage--${current.tone}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                className="pol-spotlight__card"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <span className="pol-spotlight__card-icon">
                  <current.icon size={30} strokeWidth={1.6} />
                </span>
                <span className="pol-spotlight__card-count">
                  {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <span className="pol-spotlight__card-tagline">{current.tagline}</span>
                <h3>{current.title}</h3>
                <p>{current.text}</p>
              </motion.div>
            </AnimatePresence>

            <div className="pol-spotlight__dots">
              {items.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  aria-label={`Show ${p.title}`}
                  className={`pol-spotlight__dot ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
