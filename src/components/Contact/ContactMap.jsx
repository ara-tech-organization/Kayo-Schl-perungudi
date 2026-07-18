import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Hand, MapPin, Navigation2, Sparkles } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Magnetic from "../common/Magnetic";
import FloatingShapes from "../common/FloatingShapes";
import contactImg from "../../assets/contact.png";
import "./ContactMap.css";

const EASE = [0.16, 1, 0.3, 1];

const MAP_QUERY = "No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai 600096";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAP_QUERY
)}`;

const SHAPES = [
  { type: "blob", color: "var(--color-gold-light)", size: 150, top: "16%", right: "-2%", speed: 0.3, float: 18, dur: 8 },
  { type: "ring", color: "var(--color-secondary)", size: 66, bottom: "12%", left: "3%", speed: 0.42, float: 14, dur: 6, opacity: 0.45 },
  { type: "star", color: "var(--color-gold)", size: 26, top: "20%", left: "6%", speed: 0.36, float: 18, dur: 6, rotate: 16 },
];

// Neighbourhoods within ~3 km — the same catchment the home page celebrates.
const NEARBY = [
  "Perungudi",
  "Thoraipakkam",
  "Pallikaranai",
  "Taramani",
  "Kandanchavadi",
  "Palavakkam",
  "Kottivakkam",
  "Adambakkam",
];

export default function ContactMap() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const tiltX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 140, damping: 16 });
  const tiltY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 140, damping: 16 });

  function handleImgMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleImgLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <section className="contact-map">
      <svg
        className="contact-map__wave"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,28 C240,58 480,4 720,18 C960,32 1200,56 1440,26 L1440,0 L0,0 Z"
          fill="var(--color-bg-alt)"
        />
      </svg>

      <FloatingShapes items={SHAPES} className="contact-map__shapes" />

      <div className="container contact-map__inner">
        <SectionHeading
          eyebrow="Come Say Hello"
          title="You'll Find Us Right Here"
          description="Our Perungudi campus sits just off OMR in Rajiv Nagar — easy to reach and always happy to welcome a curious little visitor. Drop in for a guided tour."
        />

        <Reveal y={34} className="contact-map__stage">
          <div className="contact-map__mapcol">
            <span className="contact-map__route" aria-hidden="true" />

            <motion.span
              className="contact-map__pin"
              aria-hidden="true"
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.25 }}
            >
              <motion.span
                className="contact-map__pin-inner"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin size={22} strokeWidth={2.2} />
              </motion.span>
              <span className="contact-map__pin-ping" />
              <span className="contact-map__pin-shadow" />
            </motion.span>

            <div className="contact-map__frame">
              <iframe
                title="KAYO International Preschool — Perungudi Campus Map"
                src={MAP_SRC}
                className="contact-map__iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <span className="contact-map__tape contact-map__tape--l" aria-hidden="true" />
              <span className="contact-map__tape contact-map__tape--r" aria-hidden="true" />
            </div>

            <motion.div
              className="contact-map__card"
              initial={{ opacity: 0, y: 24, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 140, damping: 15, delay: 0.35 }}
              whileHover={{ rotate: 0, y: -6 }}
            >
              <span className="contact-map__card-badge">
                <MapPin size={18} strokeWidth={2.2} />
              </span>
              <strong>KAYO International &mdash; Perungudi</strong>
              <p>No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai &ndash; 600096</p>
              <Magnetic strength={0.25}>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary contact-map__directions"
                >
                  Get Directions <Navigation2 size={16} />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <div className="contact-map__imgcol">
            <span className="contact-map__img-glow" aria-hidden="true" />
            <motion.span
              className="contact-map__img-ring"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="contact-map__img-wrap"
              initial={{ opacity: 0, scale: 0.92, x: 28 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              onMouseMove={handleImgMove}
              onMouseLeave={handleImgLeave}
              style={{ perspective: 1000 }}
            >
              <motion.img
                src={contactImg}
                alt="Happy children at KAYO International Preschool, Perungudi"
                className="contact-map__img"
                style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.span
              className="contact-map__img-sparkle"
              aria-hidden="true"
              animate={{ rotate: [0, 18, -12, 0], scale: [1, 1.18, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={20} strokeWidth={1.8} />
            </motion.span>

            <motion.span
              className="contact-map__img-tag"
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.5 }}
              whileHover={{ rotate: 0, scale: 1.06 }}
            >
              <Hand size={15} strokeWidth={2.2} /> Come say hi!
            </motion.span>

            <motion.span
              className="contact-map__img-chip"
              aria-hidden="true"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: [0, -8, 0] }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.7, ease: EASE },
                y: { duration: 4.5, delay: 1, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <MapPin size={13} strokeWidth={2.4} /> Just off OMR
            </motion.span>
          </div>
        </Reveal>

        <div className="contact-map__nearby">
          <Reveal y={16} className="contact-map__nearby-label">
            Loved by families across
          </Reveal>
          <motion.ul
            className="contact-map__pills"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          >
            {NEARBY.map((area) => (
              <motion.li
                key={area}
                className="contact-map__pill"
                variants={{
                  hidden: { opacity: 0, y: 14, scale: 0.85 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 220, damping: 16 } },
                }}
                whileHover={{ y: -4, scale: 1.06 }}
              >
                <MapPin size={13} strokeWidth={2.2} />
                {area}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
