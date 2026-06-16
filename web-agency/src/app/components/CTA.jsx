"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import styles from "./CTA.module.css";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function CTA() {
  return (
    <section id="contact" className={styles.section}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div className={styles.topline} variants={reveal}>
          <span className={styles.kicker}>Start a conversation</span>

          <span className={styles.availability}>
            <span aria-hidden="true" />
            Available for new projects
          </span>
        </motion.div>

        <motion.h2 variants={reveal}>
          Have an idea worth
          <span> building well?</span>
        </motion.h2>

        <motion.div className={styles.bottom} variants={reveal}>
          <p>
            Tell us what you are working on, where you want to take it, and
            what is currently standing in the way.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/79934824885?text=Hi%20BrytLinks%2C%20I%20want%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Start a project
              <ArrowUpRight aria-hidden="true" size={19} />
            </a>

            <a href="#work" className={styles.secondary}>
              Explore our work
              <ArrowDown aria-hidden="true" size={18} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
