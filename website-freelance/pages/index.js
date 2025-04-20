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
    {q: 'What types of bots does BotClick develop?',
      a: 'BotClick creates a wide range of bots tailored to your needs, including customer service chatbots, sales automation bots, process optimization bots, and specialized task-management bots. Whether you need a simple FAQ responder or a complex AI-driven assistant, we can build it for you.'},
    {q: 'How long does it take to develop and deploy a bot?',
      a: 'The timeline depends on the complexity of the project. Simple bots can be ready in a few weeks, while more advanced solutions may take a couple of months. We work efficiently to deliver high-quality results while keeping you informed at every stage.'},
    {q: 'Can BotClick integrate bots with my existing systems?',
      a: 'Absolutely! Our bots are designed to seamlessly integrate with popular CRM platforms, messaging apps (like WhatsApp or Slack), e-commerce systems, and custom APIs. Just let us know your requirements, and we’ll ensure smooth compatibility.'},
    {q: 'Do you offer ongoing support after deployment?',
      a: 'Yes! We provide post-deployment support, including maintenance, updates, and performance optimization. Our goal is to ensure your bot continues to run smoothly and evolves with your business needs.'},
    {q: 'How much does a custom bot cost?',
      a: 'Pricing varies based on features, complexity, and integration needs. We offer flexible pricing models—whether you prefer a one-time project fee or a subscription plan. Contact us for a free consultation, and we’ll provide a tailored quote.'}
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
                  &nbsp;&nbsp;At BotClick, we specialize in bringing your automation ideas to life! Whether you need a bot to streamline business processes, enhance customer engagement, or manage complex tasks, we’ve got you covered. <br></br>
                  &nbsp;&nbsp;Our team of experts is dedicated to creating powerful, efficient, and easy-to-use bots tailored to your specific needs. From concept to deployment, we work closely with you to ensure your vision becomes a reality.<br></br>
                  &nbsp;&nbsp;No matter how simple or complex your requirements are, we’ll craft a bot that perfectly fits your goals. Let’s make automation effortless—just reach out, and we’ll take care of the rest!
                  </p>
                  <div className={styles.videoWrapper}>
                    <video className={styles.videoPlaceholder} src="/assets/video.mp4" controls>
                      {/* <source  type="video/mp4"> */}
                    </video>
                  </div>
                </div>
            </section>
            
            {/* FAQ question*/}
            <section className={styles.faqSection}>
              <h2 className={styles.faqTitle}>Frequent Questions</h2>
              <div className={styles.accordion}>
                {questions.map((question, index) => (
                  <div key={index} className={styles.accordionItem} onClick={() => toggleQuestion(index)}>
                    <div className={styles.question}>
                      {question.q}
                      <img src="/assets/Arrow.svg" alt="Arrow" className={`${styles.arrow} ${activeQuestion === index ? styles.arrowActive : ''}`}/>
                    </div>
                    {activeQuestion === index && (
                      <div className={styles.answer}> {question.a}</div>
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
