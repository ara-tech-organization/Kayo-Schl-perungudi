import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Drama,
  FlaskConical,
  Home as HomeIcon,
  Puzzle,
  Sparkles,
  Star,
  TreePine,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import ArtPanel from "../common/ArtPanel";
import "./GalleryPreview.css";
import outdoorImg from "../../assets/Outdoor.png";
import stemImg from "../../assets/STEM Activit.png";

const IMAGES = [
  {
    tone: "primary",
    icon: Puzzle,
    caption: "Montessori Classroom",
    alt: "Montessori-themed classroom at Kayo International Preschool with child-friendly learning materials",
  },
  {
    tone: "secondary",
    icon: TreePine,
    image: outdoorImg,
    caption: "Outdoor Play Area",
    alt: "Spacious outdoor play area with sandpit and splash pool at Kayo International Preschool Perungudi",
  },
  {
    tone: "gold",
    icon: FlaskConical,
    image: stemImg,
    caption: "STEM Activities",
    alt: "Children engaged in STEM learning activities at Kayo International Preschool Chennai",
  },
  {
    tone: "orange",
    icon: Drama,
    caption: "Kayo Little Theatre",
    alt: "Students performing at Kayo Little Theatre, fostering confidence and creativity",
  },
  {
    tone: "cream",
    icon: HomeIcon,
    caption: "Daycare Facility",
    alt: "Nurturing daycare centre at Kayo International with safe sleeping and play areas",
  },
];

function cardState(offset) {
  const dir = Math.sign(offset);
  const dist = Math.abs(offset);

  if (dist === 0) {
    return { x: 0, z: 0, rotateY: 0, scale: 1, opacity: 1, zIndex: 50 };
  }
  if (dist === 1) {
    return { x: dir * 250, z: -140, rotateY: dir * -38, scale: 0.84, opacity: 0.9, zIndex: 40 };
  }
  if (dist === 2) {
    return { x: dir * 420, z: -280, rotateY: dir * -48, scale: 0.68, opacity: 0.55, zIndex: 30 };
  }
  return { x: dir * 520, z: -360, rotateY: dir * -52, scale: 0.55, opacity: 0, zIndex: 10 };
}

const AUTOPLAY_MS = 3800;

export default function GalleryPreview() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = IMAGES.length;
  const resumeTimer = useRef(null);

  function go(dir) {
    setActive((a) => (a + dir + count) % count);
  }

  function goTo(i) {
    setActive(i);
  }

  function pauseThenResume() {
    setPaused(true);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 6000);
  }

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  return (
    <section className="gallery-preview" id="gallery">
      <svg
        className="gallery-preview__wave gallery-preview__wave--top"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C240,90 420,0 720,28 C1020,56 1200,4 1440,44 L1440,0 L0,0 Z"
          fill="var(--color-bg)"
        />
      </svg>
      <span className="gallery-preview__mesh" aria-hidden="true" />
      <span className="gallery-preview__blob gallery-preview__blob--a" aria-hidden="true" />
      <span className="gallery-preview__blob gallery-preview__blob--b" aria-hidden="true" />
      <span className="gallery-preview__blob gallery-preview__blob--c" aria-hidden="true" />
      <span className="gallery-preview__dotgrid" aria-hidden="true" />
      <span className="gallery-preview__ring gallery-preview__ring--a" aria-hidden="true" />
      <span className="gallery-preview__ring gallery-preview__ring--b" aria-hidden="true" />
      <motion.span
        className="gallery-preview__chip gallery-preview__chip--a"
        aria-hidden="true"
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={18} strokeWidth={1.8} />
      </motion.span>
      <motion.span
        className="gallery-preview__chip gallery-preview__chip--b"
        aria-hidden="true"
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <Star size={16} strokeWidth={1.8} />
      </motion.span>
      <span className="gallery-preview__curve gallery-preview__curve--bottom" aria-hidden="true" />

      <div className="container gallery-preview__head">
        <SectionHeading
          align="left"
          eyebrow="A Glimpse Inside"
          title="Gallery"
          description="Take a glimpse into the joyful learning experiences at Kayo International. From engaging classroom activities and creative play to celebrations and everyday milestones, our gallery reflects the safe, vibrant, and nurturing environment where children learn, grow, and thrive."
        />
        <div className="gallery-preview__nav">
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => {
              go(-1);
              pauseThenResume();
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => {
              go(1);
              pauseThenResume();
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        className="gallery-preview__stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="gallery-preview__floor" aria-hidden="true" />
        <div className="gallery-preview__coverflow">
          {IMAGES.map((img, i) => {
            let offset = i - active;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
            const s = cardState(offset);
            const isActive = offset === 0;

            return (
              <motion.button
                type="button"
                key={img.alt}
                className={`gallery-preview__card ${isActive ? "is-active" : ""}`}
                onClick={() => {
                  goTo(i);
                  pauseThenResume();
                }}
                animate={{
                  x: s.x,
                  z: s.z,
                  rotateY: s.rotateY,
                  scale: s.scale,
                  opacity: s.opacity,
                }}
                style={{ zIndex: s.zIndex }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                aria-current={isActive}
                aria-label={img.caption}
              >
                {img.image ? (
                  <img
                    src={img.image}
                    alt={img.alt}
                    className="gallery-preview__art gallery-preview__art-img"
                  />
                ) : (
                  <ArtPanel tone={img.tone} icon={img.icon} tilt={isActive} pop={isActive} className="gallery-preview__art" />
                )}
                <span className="gallery-preview__caption">{img.caption}</span>
                <span className="sr-only">{img.alt}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="gallery-preview__dots">
          {IMAGES.map((img, i) => (
            <button
              key={img.alt}
              type="button"
              className={`gallery-preview__dot ${i === active ? "is-active" : ""}`}
              aria-label={`Show ${img.caption}`}
              onClick={() => {
                goTo(i);
                pauseThenResume();
              }}
            />
          ))}
        </div>
      </div>

      <div className="container gallery-preview__cta">
        <Link to="/gallery" className="btn btn-outline">
          View Full Gallery <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
