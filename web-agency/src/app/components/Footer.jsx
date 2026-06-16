"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <div className={styles.container}>
        <motion.div className={styles.top} variants={reveal}>
          <div className={styles.brand}>
            <a href="#" className={styles.wordmark} aria-label="BrytLinks home">
              Bryt<span>Links</span>
            </a>

            <p>
              Design and engineering for digital products built with clarity,
              character, and lasting impact.
            </p>
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            <div>
              <h2>Company</h2>
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
            </div>

            <div>
              <h2>Support</h2>
              <a href="mailto:linksbryt@gmail.com">Email us</a>
              <a
                href="https://wa.me/79934824885?text=Hi%20BrytLinks%2C%20I%20want%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>

            <div>
              <h2>Social</h2>
              <a
                href="https://www.instagram.com/brytlinks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BrytLinks on Instagram"
              >
                Instagram
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
              <a
                href="https://www.tiktok.com/@brytlinks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BrytLinks on TikTok"
              >
                TikTok
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </nav>
        </motion.div>

        <motion.div className={styles.bottom} variants={reveal}>
          <p>© {new Date().getFullYear()} BrytLinks. All rights reserved.</p>

          <span>Independent digital studio</span>

          <a href="#" className={styles.backToTop}>
            Back to top
            <ArrowUp aria-hidden="true" size={15} />
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
