import React from 'react';
import styles from '../styles/ApplyFormModal.module.css';

export default function ApplyFormModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>

        <img className={styles.closeButton} src="assets/close.png" alt="Close" onClick={onClose}/>
        <h2 className={styles.title}>
          Apply <span className={styles.greenText}>Now</span>
        </h2>

        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.leftColumn}>
              <input type="text" placeholder="Full Name" />
              <div className={styles.phoneInput}>
                <input type="text" placeholder="+7" />
                <input type="tel" placeholder="Phone number" />
              </div>
              <input type="email" placeholder="Email address" />
            </div>
            <div className={styles.rightColumn}>
              <textarea placeholder="Task Description" rows={6} />
            </div>
          </div>

          <button className={styles.button} type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
}
