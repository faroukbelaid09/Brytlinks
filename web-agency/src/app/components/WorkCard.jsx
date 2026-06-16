"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import basePath from "../utils/basePath";
import styles from "./Works.module.css";

export default function WorkCard({ work, index }) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className={styles.project}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/work/${work.slug}`} className={styles.projectLink}>
        <div
          className={`${styles.media} ${
            work.slug === "tic-tac-pro" ? styles.gameMedia : ""
          }`}
        >
          <motion.img
            src={`${basePath}${work.image}`}
            alt={`${work.title} project preview`}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className={styles.mediaShade} />

          <span className={styles.projectNumber}>{projectNumber}</span>

          <span className={styles.openIcon}>
            <ArrowUpRight aria-hidden="true" size={22} />
          </span>
        </div>

        <div className={styles.projectInfo}>
          <div>
            <span className={styles.meta}>
              {work.client} / {work.year}
            </span>
            <h3>{work.title}</h3>
          </div>

          <p>{work.description}</p>

          <div className={styles.tags}>
            {work.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
