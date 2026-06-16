"use client";

import { motion } from "framer-motion";
import { Code2, Compass, PenTool, Rocket } from "lucide-react";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We learn how your business works, where the friction lives, and what success should look like.",
    outcome: "Direction & scope",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "We turn the strategy into a focused product system with clear flows, interfaces, and visual character.",
    outcome: "Experience & identity",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "We engineer the product with careful attention to speed, responsiveness, and long-term maintainability.",
    outcome: "Working product",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "We prepare the final release, test the complete experience, and support the product beyond launch.",
    outcome: "Release & growth",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={reveal}>
            <span className={styles.kicker}>How we work</span>
            <h2>
              A clear path from
              <span> idea to launch.</span>
            </h2>
          </motion.div>

          <motion.p variants={reveal}>
            A small, focused process keeps decisions close, communication
            direct, and every stage moving toward the same outcome.
          </motion.p>
        </motion.header>

        <motion.ol
          className={styles.timeline}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.li
                className={styles.step}
                key={step.number}
                variants={reveal}
                transition={{ duration: 0.55 }}
              >
                <div className={styles.markerRow}>
                  <span className={styles.marker}>{step.number}</span>
                  <span className={styles.line} aria-hidden="true" />
                </div>

                <div className={styles.icon}>
                  <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className={styles.outcome}>{step.outcome}</span>
              </motion.li>
            );
          })}
        </motion.ol>

        <motion.div
          className={styles.note}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span>One team throughout</span>
          <p>
            You work directly with the people designing and building the
            product, from the first conversation to the final release.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
