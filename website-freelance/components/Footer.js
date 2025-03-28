import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#terms" className={styles.link}>Terms & Conditions</a>
        <a href="#privacy" className={styles.link}>Privacy Policy</a>
        <a href="#copyright" className={styles.link}>
          Copyright © 2025 BotClick.net
        </a>
      </div>
    </footer>
  );
};

