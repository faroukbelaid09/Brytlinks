"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import basePath from "../utils/basePath";
import styles from "./MenuPanel.module.css";

const links = [
  { number: "01", name: "Home", href: "/" },
  { number: "02", name: "Work", href: "/#work" },
  { number: "03", name: "Process", href: "/#process" },
  { number: "04", name: "About", href: "/#about" },
  { number: "05", name: "Contact", href: "/#contact" },
];

export default function MenuPanel({ isOpen, setIsOpen }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.panel}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className={styles.topbar}>
            <Link
              href="/"
              className={styles.wordmark}
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={`${basePath}/logo-mark.png`}
                alt=""
                width={38}
                height={38}
              />
              <span className={styles.wordmarkText}>
                Bryt<span>Links</span>
              </span>
            </Link>

            <button
              type="button"
              className={styles.close}
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <span>Close</span>
              <X aria-hidden="true" size={18} />
            </button>
          </header>

          <div className={styles.content}>
            <motion.nav
              className={styles.navigation}
              aria-label="Menu navigation"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.18,
                  },
                },
              }}
            >
              {links.map((item) => (
                <motion.div
                  className={styles.item}
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span>{item.number}</span>
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.name}
                    <ArrowUpRight
                      className={styles.itemArrow}
                      aria-hidden="true"
                      size={28}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.aside
              className={styles.side}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
            >
              <div>
                <span className={styles.sideLabel}>Start something</span>
                <p>
                  Have a product, platform, or brand idea worth building well?
                </p>
              </div>

              <a
                href="https://wa.me/79934824885?text=Hi%20BrytLinks%2C%20I%20want%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contact}
                onClick={() => setIsOpen(false)}
              >
                Start a project
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>

              <div className={styles.details}>
                <a href="mailto:linksbryt@gmail.com">
                  linksbryt@gmail.com
                </a>
                <span>Independent digital studio</span>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
