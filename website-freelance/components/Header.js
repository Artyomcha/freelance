// Header file
import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import logo from '../public/assets/LogoBotClick.svg'; // Replace with your actual path

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Image src={logo} alt="BotClick Logo" className={styles.logo} />
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <a className={styles.navItem} href="#how-it-works">How does it work?</a>
        <a className={styles.navItem} href="#reviews">Reviews</a>
        <a className={styles.navItem} href="#ask-question">Ask a Question</a>
      </nav>

      {/* Apply Button */}
      <button className={styles.applyButton}>Apply</button>
    </header>
  );
};
