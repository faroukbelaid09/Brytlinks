"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero3DPreview.module.css";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero3DPreview() {
  const heroRef = useRef(null);
  const circleRef = useRef(null);
  const frameRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const updateScene = () => {
      const hero = heroRef.current;
      const circle = circleRef.current;
      if (!hero || !circle) return;

      const heroRect = hero.getBoundingClientRect();
      const circleRect = circle.getBoundingClientRect();
      const { x, y } = pointerRef.current;
      const heroX = (x - heroRect.left) / heroRect.width;
      const heroY = (y - heroRect.top) / heroRect.height;
      const circleX = (x - circleRect.left) / circleRect.width;
      const circleY = (y - circleRect.top) / circleRect.height;
      const localX = Math.max(-1, Math.min(1, circleX * 2 - 1));
      const localY = Math.max(-1, Math.min(1, circleY * 2 - 1));
      const distance = Math.hypot(localX, localY);
      const proximity = Math.max(0, 1 - distance / 1.75);

      hero.style.setProperty("--mouse-x", `${heroX * 100}%`);
      hero.style.setProperty("--mouse-y", `${heroY * 100}%`);
      circle.style.setProperty("--pull-x", `${localX * 18}px`);
      circle.style.setProperty("--pull-y", `${localY * 18}px`);
      circle.style.setProperty("--tilt-x", `${localY * -7}deg`);
      circle.style.setProperty("--tilt-y", `${localX * 7}deg`);
      circle.style.setProperty("--stretch-x", `${1 + Math.abs(localX) * 0.035}`);
      circle.style.setProperty("--stretch-y", `${1 + Math.abs(localY) * 0.035}`);
      circle.style.setProperty("--proximity", proximity.toFixed(3));
      circle.style.setProperty(
        "--highlight-angle",
        `${Math.atan2(localY, localX) * (180 / Math.PI) + 90}deg`
      );

      frameRef.current = null;
    };

    const handlePointerMove = (event) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateScene);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.cursorLight} aria-hidden="true" />
      <div className={styles.backgroundArc} aria-hidden="true" />

      <motion.div
        className={styles.content}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { delayChildren: 0.18, staggerChildren: 0.1 } },
        }}
      >
        <motion.p className={styles.eyebrow} variants={reveal}>
          Design, development & strategy
        </motion.p>

        <motion.h1 variants={reveal}>
          Where strategy meets digital craft<span>.</span>
        </motion.h1>

        <motion.p className={styles.subtitle} variants={reveal}>
          Websites, apps, and product experiences built to move your brand forward.
        </motion.p>

        <motion.div className={styles.actions} variants={reveal}>
          <a
            className={styles.primaryAction}
            href="https://wa.me/79934824885?text=Hi%20BrytLinks%2C%20I%20want%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a project
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <Link className={styles.secondaryAction} href="/#work">
            View work
            <ArrowDown aria-hidden="true" size={17} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.visual}
        initial={{ opacity: 0, scale: 0.84 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.orbitOuter} aria-hidden="true" />
        <div className={styles.orbitInner} aria-hidden="true" />

        <button
          ref={circleRef}
          type="button"
          className={styles.circle}
          onClick={() => setPulseKey((value) => value + 1)}
          aria-label="Animate the BrytLinks vision"
        >
          <span className={styles.circleSurface} aria-hidden="true" />
          <span key={pulseKey} className={styles.clickPulse} aria-hidden="true" />
          <span className={styles.circleCopy}>
            Building
            <br />
            what&apos;s next.
            <ArrowUpRight aria-hidden="true" size={30} />
          </span>
        </button>
      </motion.div>

      <div className={styles.brandNote} aria-hidden="true">
        <span>BrytLinks</span>
        <span>Digital products / 2026</span>
      </div>
    </section>
  );
}
