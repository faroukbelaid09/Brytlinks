"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import basePath from "../../utils/basePath";
import styles from "./WorkDetail.module.css";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function WorkDetailClient({
  work,
  projectNumber,
  nextWork,
}) {
  const isGame = work.slug === "tic-tac-pro";

  return (
    <motion.article
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.hero}>
        <motion.div
          className={styles.heroInner}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          <motion.div className={styles.heroTopline} variants={reveal}>
            <Link href="/#work" className={styles.backLink}>
              <ArrowLeft aria-hidden="true" size={17} />
              Selected work
            </Link>

            <span>
              {projectNumber} / Case study
            </span>
          </motion.div>

          <motion.div className={styles.heroCopy} variants={reveal}>
            <h1>{work.title}</h1>

            <div className={styles.heroSummary}>
              <p>{work.description}</p>

              {work.live && (
                <a
                  href={work.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveLink}
                >
                  View live project
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            className={`${styles.cover} ${isGame ? styles.gameCover : ""}`}
            variants={reveal}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={`${basePath}${work.image}`}
              alt={`${work.title} project overview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1240px"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <motion.div
            className={styles.facts}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.div variants={reveal}>
              <span>Client</span>
              <p>{work.client}</p>
            </motion.div>

            <motion.div variants={reveal}>
              <span>Year</span>
              <p>{work.year}</p>
            </motion.div>

            <motion.div variants={reveal}>
              <span>Deliverables</span>
              <p>{work.tags.join(" / ")}</p>
            </motion.div>

            <motion.div variants={reveal}>
              <span>Project type</span>
              <p>Digital product</p>
            </motion.div>
          </motion.div>

          <div className={styles.story}>
            <motion.div
              className={styles.storyRow}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.storyLabel}>
                <span>01</span>
                <h2>The challenge</h2>
              </div>
              <p>{work.challenge}</p>
            </motion.div>

            <motion.div
              className={styles.storyRow}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.storyLabel}>
                <span>02</span>
                <h2>The solution</h2>
              </div>
              <p>{work.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.galleryInner}>
          <motion.header
            className={styles.galleryHeader}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span>Project preview</span>
            <h2>A closer look at the experience.</h2>
          </motion.header>

          <div className={styles.galleryGrid}>
            {work.gallery?.map((image, index) => (
              <motion.figure
                className={`${styles.galleryItem} ${
                  work.slug === "tic-tac-pro" ? styles.gameGallery : ""
                }`}
                key={image}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <Image
                  src={`${basePath}${image}`}
                  alt={`${work.title} project screen ${index + 1}`}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 1240px"
                      : "(max-width: 768px) 100vw, 620px"
                  }
                />
                <figcaption>
                  {String(index + 1).padStart(2, "0")}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.nextProject}>
        <div className={styles.nextInner}>
          <motion.div
            className={styles.projectPrompt}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span>Have a project in mind?</span>
            <a
              href="https://wa.me/79934824885?text=Hi%20BrytLinks%2C%20I%20want%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a conversation
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={`/work/${nextWork.slug}`}
              className={styles.nextLink}
            >
              <span>Next project</span>
              <div>
                <h2>{nextWork.title}</h2>
                <ArrowRight aria-hidden="true" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.article>
  );
}
