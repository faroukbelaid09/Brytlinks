"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MenuPanel from "./MenuPanel";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar} aria-label="Primary navigation">
        <motion.button
          type="button"
          className={styles.menuBtn}
          onClick={() => setIsOpen(true)}
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileTap={{ scale: 0.97 }}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <motion.span
            className={styles.menuIcon}
            variants={{
              rest: { x: 0, rotate: 0 },
              hover: { x: 26, rotate: 180 },
            }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
          >
            <Menu aria-hidden="true" size={18} strokeWidth={2} />
          </motion.span>

          <motion.span
            className={styles.menuLabel}
            variants={{
              rest: { opacity: 1, x: 0 },
              hover: { opacity: 0, x: -8 },
            }}
            transition={{ duration: 0.18 }}
          >
            Menu
          </motion.span>
        </motion.button>

        <Link href="/" className={styles.wordmark} aria-label="BrytLinks home">
          Bryt<span>Links</span>
        </Link>

        <motion.a
          href="https://wa.me/79934824885?text=Hi%20BrytLinks%2C%20I%20want%20to%20start%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contact}
          whileTap={{ scale: 0.97 }}
        >
          Start a project
          <ArrowUpRight aria-hidden="true" size={17} />
        </motion.a>
      </nav>

      <MenuPanel isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
