import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./PoliciesCarousel.css";

const AUTOPLAY_DELAY = 2000;

export default function PoliciesCarousel({
  items,
  eyebrow,
  title,
  description,
  id,
  summaryTitle,
  summaryPoints = [],
}) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  function scrollToIndex(i) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActive(i);
  }

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = setTimeout(() => {
      scrollToIndex((active + 1) % items.length);
    }, AUTOPLAY_DELAY);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused, items.length]);

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, children } = track;
    let closest = 0;
    let min = Infinity;
    Array.from(children).forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - track.offsetLeft - scrollLeft);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });
    setActive(closest);
  }

  return (
    <section className="pol-carousel" id={id}>
      <div className="container">
        <div className="pol-carousel__head">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" />

          {(summaryTitle || summaryPoints.length > 0) && (
            <Reveal className="pol-carousel__facts" y={20} delay={0.12}>
              <span className="pol-carousel__facts-kicker">At a Glance</span>
              {summaryTitle && <p>{summaryTitle}</p>}
              {summaryPoints.length > 0 && (
                <ul>
                  {summaryPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          )}
        </div>

        <div className="pol-carousel__controls">
          <div className="pol-carousel__dots">
            {items.map((p, i) => (
              <button
                key={p.title}
                type="button"
                aria-label={`Go to ${p.title}`}
                className={`pol-carousel__dot ${i === active ? "is-active" : ""}`}
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>
          <div className="pol-carousel__arrows">
            <button
              type="button"
              aria-label="Previous"
              className="pol-carousel__arrow"
              onClick={() => scrollToIndex(Math.max(0, active - 1))}
            >
              <ChevronLeft size={18} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="pol-carousel__arrow"
              onClick={() => scrollToIndex(Math.min(items.length - 1, active + 1))}
            >
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div
          className="pol-carousel__track"
          ref={trackRef}
          onScroll={handleScroll}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {items.map((p, i) => (
            <article className={`pol-carousel__card pol-carousel__card--${p.tone}`} key={p.title}>
              <span className="pol-carousel__card-icon">
                <p.icon size={26} strokeWidth={1.6} />
              </span>
              <span className="pol-carousel__card-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="pol-carousel__card-tagline">{p.tagline}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
