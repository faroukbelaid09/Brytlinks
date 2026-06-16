"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, PanelsTopLeft, Shapes } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, scalable websites shaped around your business, your audience, and the way you want to grow.",
    detail: "Next.js / E-commerce / Web apps",
    icon: Code2,
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Focused mobile products with thoughtful interactions, reliable engineering, and room to evolve.",
    detail: "iOS / Android / Cross-platform",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Brand & Product Design",
    description:
      "Distinctive identities and digital systems that make the product clearer, stronger, and easier to trust.",
    detail: "Strategy / Identity / UI & UX",
    icon: Shapes,
  },
];

const itemMotion = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section className={styles.section}>
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
          <motion.div className={styles.intro} variants={itemMotion}>
            <span className={styles.kicker}>What we do</span>
            <h2>
              From first idea to
              <span> finished product.</span>
            </h2>
          </motion.div>

          <motion.div className={styles.summary} variants={itemMotion}>
            <p>
              Strategy, design, and engineering working as one team. Every
              decision is made to create a clearer and more valuable product.
            </p>

            <a
              href="https://wa.me/79934824885?text=Hi%20BrytLinks%2C%20I%20want%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contact}
            >
              Discuss your project
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </motion.div>
        </motion.header>

        <motion.div
          className={styles.list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                className={styles.service}
                key={service.number}
                variants={itemMotion}
                transition={{ duration: 0.55 }}
              >
                <div className={styles.number}>{service.number}</div>

                <div className={styles.iconWrap}>
                  <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                </div>

                <div className={styles.serviceMain}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className={styles.detail}>{service.detail}</div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
