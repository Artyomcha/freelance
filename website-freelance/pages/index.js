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
                <p className={styles.description}>
                    Venenatis primis pellentesque lobortis a massa gravida himenaeos amet elementum adipiscing.
                </p>
            </section>

            {/* ABOUT BOTCLICK*/}
            <section className={styles.aboutSection}>
                <h2 className={styles.aboutTitle}>About <span className={styles.highlight}>Bot<span>Click</span></span></h2>
                <div className={styles.text}>
                  <p className={styles.aboutText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus feugiat vitae elementum curae mi facilisis hendrerit. Orci nisi fames scelerisque erat sit id erat tincidunt et adipiscing. Tristique bibendum finibus dapibus ante taciti quis felis potenti pulvinar dignissim sed mollis eget. Tortor et sagittis nisi malesuada maecenas pellentesque.
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
                    <div className={styles.question}>{question}</div>
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
