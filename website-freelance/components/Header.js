import React, { useState } from 'react';
import styles from '../styles/Headermy.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/assets/LogoBotClick.svg';
import logo1 from '../public/assets/LogoMainNoBG.svg';
import menuIcon from '../public/assets/menu.svg';
import ApplyFormModal from './ApplyFormModal'; 

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src={logo} alt="BotClick Logo" className={styles.logo} />
          <Image src={logo1} alt="BotClick Logo" className={`${styles.logo} ${styles.logoNoBG}`} />
        </Link>
      </div>
      <div className={`${styles.overlay} ${menuVisible ? styles.overlayVisible : ''}`} onClick={toggleMenu}></div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${menuVisible ? styles.navVisible : styles.navHidden}`}>
        <a className={styles.navItem} href="/info">How does it work?</a>
        <a className={styles.navItem} href="/reviews">Reviews</a>
        <a className={styles.navItem} href="/questions">Ask a Question</a>
      </nav>

      {/* Apply Button */}
      <div className={styles.applyButtonContainer}>
        <button className={styles.applyButton} onClick={toggleModal}>Apply</button>
      </div>

      {/* Menu Icon */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <Image src={menuIcon} alt="Menu Icon" width={30} height={30} />
      </div>

      <ApplyFormModal isVisible={isModalVisible} onClose={toggleModal} />
    </header>
  );
}











