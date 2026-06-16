"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import basePath from "../utils/basePath";
import styles from "./About.module.css";

const values = [
  {
    number: "01",
    title: "Clarity first",
    description:
      "We remove noise, simplify decisions, and make every part of the product easier to understand.",
  },
  {
    number: "02",
    title: "Built to perform",
    description:
      "Strong ideas deserve reliable execution: responsive, scalable, and considered beyond launch.",
  },
  {
    number: "03",
    title: "Care in the details",
    description:
      "The final quality lives in the small choices, from interaction and pacing to polish and handoff.",
  },
];

const team = [
  {
    name: "Kakira Umar",
    role: "Co-Founder",
    discipline: "Design & Brand Director",
    image: "umar-2.jpg",
  },
  {
    name: "Belaid Farouk",
    role: "Co-Founder",
    discipline: "Lead Engineer",
    image: "farouk-1.jpg",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className={styles.section}>
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
            <span className={styles.kicker}>About BrytLinks</span>
            <h2>
              Design and engineering,
              <span> working as one.</span>
            </h2>
          </motion.div>

          <motion.div className={styles.summary} variants={reveal}>
            <p>
              We are an independent digital studio building thoughtful
              products for ambitious businesses. Strategy, design, and
              development stay connected from the first idea to the final
              release.
            </p>

            <a href="#contact" className={styles.link}>
              Work with us
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </motion.div>
        </motion.header>

        <motion.div
          className={styles.manifesto}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {values.map((value) => (
            <motion.article
              className={styles.value}
              key={value.number}
              variants={reveal}
              transition={{ duration: 0.55 }}
            >
              <span className={styles.number}>{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className={styles.teamSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14 } },
          }}
        >
          <motion.div className={styles.teamIntro} variants={reveal}>
            <span>Small by design</span>
            <p>
              You work directly with the founders responsible for the thinking,
              the craft, and the build.
            </p>
          </motion.div>

          <div className={styles.team}>
            {team.map((member, index) => (
              <motion.article
                className={styles.member}
                key={member.name}
                variants={reveal}
                transition={{ duration: 0.6, delay: index * 0.04 }}
              >
                <div className={styles.portrait}>
                  <Image
                    src={`${basePath}/${member.image}`}
                    alt={member.name}
                    width={480}
                    height={640}
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className={styles.memberInfo}>
                  <div>
                    <span>{member.role}</span>
                    <h3>{member.name}</h3>
                  </div>
                  <p>{member.discipline}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
