import React, { useState } from 'react';
import styles from '../styles/Index.module.css';
import Image from 'next/image';
import logo from '../public/assets/LogoMain.svg';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function Index()  {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
  ];
  return (
    <>
    <Layout>
      <Head>
        <title>BotClick</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
            {/* HOOK  */}
            <section className={styles.logoSection}>
                <div className={styles.logoWrapper}>
                  <Image src={logo} alt="Logo" className={styles.logo} />
                </div>
                <p className={styles.description}>🚀 Welcome to BotClick! Need a custom bot? Tell us your idea, and we’ll bring it to life! 🤖 </p>
            </section>

            {/* ABOUT BOTCLICK*/}
            <section className={styles.aboutSection}>
                <h2 className={styles.aboutTitle}>About <span className={styles.highlight}>Bot<span>Click</span></span></h2>
                <div className={styles.text}>
                  <p className={styles.aboutText}>
                  At BotClick, we specialize in bringing your automation ideas to life! Whether you need a bot to streamline business processes, enhance customer engagement, or manage complex tasks, we’ve got you covered.
                  Our team of experts is dedicated to creating powerful, efficient, and easy-to-use bots tailored to your specific needs. From concept to deployment, we work closely with you to ensure your vision becomes a reality.
                  No matter how simple or complex your requirements are, we’ll craft a bot that perfectly fits your goals. Let’s make automation effortless—just reach out, and we’ll take care of the rest!
                  </p>
                  <div className={styles.videoPlaceholder}></div>
                </div>
            </section>
            
            {/* FAQ question*/}
            <section className={styles.faqSection}>
              <h2 className={styles.faqTitle}>Frequent Questions</h2>
              <div className={styles.accordion}>
                {questions.map((question, index) => (
                  <div key={index} className={styles.accordionItem} onClick={() => toggleQuestion(index)}>
                    <div className={styles.question}>
                      {question}
                      <img src="/assets/Arrow.svg" alt="Arrow" className={`${styles.arrow} ${activeQuestion === index ? styles.arrowActive : ''}`}/>
                    </div>
                    {activeQuestion === index && (
                      <div className={styles.answer}>This is the answer to {question}.</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
        </div>



       
    </Layout>
    </>
  );
};
