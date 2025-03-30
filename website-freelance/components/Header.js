import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import logo from '../public/assets/LogoBotClick.svg';
import menuIcon from '../public/assets/menu.svg';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Image src={logo} alt="BotClick Logo" className={styles.logo} />
      </div>
      <div className={`${styles.overlay} ${menuVisible ? styles.overlayVisible : ''}`} onClick={toggleMenu}></div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${menuVisible ? styles.navVisible : styles.navHidden}`}>
        <a className={styles.navItem} href="#how-it-works">How does it work?</a>
        <a className={styles.navItem} href="#reviews">Reviews</a>
        <a className={styles.navItem} href="#ask-question">Ask a Question</a>
      </nav>

      {/* Apply Button */}
      <button className={styles.applyButton}>Apply</button>

      {/* Menu Icon */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <Image src={menuIcon} alt="Menu Icon" width={30} height={30} />
      </div>
    </header>
  );
}











