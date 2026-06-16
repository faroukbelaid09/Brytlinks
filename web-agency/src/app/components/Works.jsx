"use client";

import { motion } from "framer-motion";
import worksData from "../data/workData";
import WorkCard from "./WorkCard";
import styles from "./Works.module.css";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function Works() {
  return (
    <section id="work" className={styles.section}>
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
            <span className={styles.kicker}>Selected work</span>
            <h2>
              Built to perform.
              <span> Designed to matter.</span>
            </h2>
          </motion.div>

          <motion.p className={styles.intro} variants={reveal}>
            A selection of digital products shaped through strategy, design,
            and careful engineering.
          </motion.p>
        </motion.header>

        <div className={styles.projects}>
          {worksData.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
