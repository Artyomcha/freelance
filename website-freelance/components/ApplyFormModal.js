import React, { useState } from 'react';
import styles from '../styles/ApplyFormModal.module.css';

export default function ApplyFormModal({ isVisible, onClose }) {
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);  

  if (!isVisible) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullPhoneNumber = `${countryCode} ${phoneNumber}`; 

    const data = {
      fullName,
      phoneNumber: fullPhoneNumber,
      email,
      taskDescription,
    };


    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);  // Set submission state to true to show "Thank You" message
      } else {
        alert('Failed to submit application');
      }


      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setTaskDescription('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting application');
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img
          className={styles.closeButton}
          src="assets/close.png"
          alt="Close"
          onClick={onClose}
        />
        {isSubmitted ? (
          <div className={styles.thankYouMessage}>
            <h2 className={styles.title}>Thank you for applying!</h2>
            <p>Your application has been successfully submitted. We'll be in touch soon!</p>
            <button onClick={onClose} className={styles.button} >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>
              Apply <span className={styles.greenText}>Now</span>
            </h2>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.leftColumn}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <div className={styles.phoneInput}>
                    <input
                      type="text"
                      placeholder="+7"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.rightColumn}>
                  <textarea
                    placeholder="Task Description"
                    rows={6}
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                </div>
              </div>

              <button className={styles.button} type="submit">
                Apply
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}