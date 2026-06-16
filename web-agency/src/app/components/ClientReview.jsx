"use client";

import { motion } from "framer-motion";
import { MoveLeft, MoveRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ClientReview.module.css";

const testimonials = [
  {
    text: "We wanted something simple, but the result became a truly engaging experience. Real-time play and thoughtful rewards completely changed how users connect with the game.",
    name: "Chinedu Paul",
    role: "Product Lead, Gaming Startup",
    rating: 5,
    avatar:
      "https://img.magnific.com/premium-photo/face-portrait-serious-black-man-studio-isolated-white-background-african-bald-male-person-from-south-africa-with-fashion-style-pose-with-aesthetic-clothes-confidence_590464-188873.jpg",
  },
  {
    text: "Our financial data used to feel overwhelming, but now everything is clear and useful. The dashboard gives us instant insights without digging through endless reports.",
    name: "Layla Al-Farsi",
    role: "Head of Operations, Fintech Company",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    text: "The new fitness app made tracking progress feel completely effortless. Users now stay consistent because the experience is motivating, focused, and easy to follow.",
    name: "Kwame Dizza",
    role: "Founder, Health Startup",
    rating: 5,
    avatar:
      "https://media.istockphoto.com/id/2203262687/photo/studio-portrait-of-happy-african-american-man-wearing-beige-sweatshirt-smiling-on-beige.jpg?s=612x612&w=0&k=20&c=eSkLpexu5uzOeEp_cRHlDmjF3Xk25IjWbf8X8rleDwY=",
  },
  {
    text: "Our store went from slow and cluttered to fast and conversion-focused. The premium experience now guides customers naturally from discovery through checkout.",
    name: "Noura Hassan",
    role: "E-commerce Director, Retail Brand",
    rating: 5,
    avatar:
      "https://img.magnific.com/free-photo/happy-confident-muslim-business-lady-posing-outside_74855-1966.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

export default function ClientReview() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const next = () => {
    setIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex) =>
        currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className={styles.kicker}>Client perspective</span>
            <h2>
              Good work should
              <span> speak for itself.</span>
            </h2>
          </div>

          <p>
            The clearest measure of our work is what changes after launch:
            stronger products, simpler decisions, and better experiences.
          </p>
        </motion.header>

        <motion.div
          className={styles.reviewLayout}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.reviewMeta}>
            <span className={styles.reviewLabel}>What clients say</span>
            <p>
              Direct feedback from the people behind the products we help bring
              to life.
            </p>

            <div className={styles.controls}>
              <button
                type="button"
                onClick={prev}
                className={styles.navBtn}
                aria-label="Previous testimonial"
              >
                <MoveLeft aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={next}
                className={styles.navBtn}
                aria-label="Next testimonial"
              >
                <MoveRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <div className={styles.quote}>&ldquo;</div>
                <p className={styles.text}>{current.text}</p>
              </div>

              <div className={styles.footer}>
                <div className={styles.user}>
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    className={styles.avatar}
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className={styles.name}>{current.name}</p>
                    <p className={styles.role}>{current.role}</p>
                  </div>
                </div>

                <div className={styles.rating}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      aria-hidden="true"
                      fill="currentColor"
                      size={14}
                    />
                  ))}
                  <span className={styles.score}>{current.rating}.0</span>
                </div>
              </div>
            </motion.div>

            <div className={styles.progress}>
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`${styles.dot} ${i === index ? styles.active : ""}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
