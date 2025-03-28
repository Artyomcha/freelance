//Main
// pages/index.js
import Head from 'next/head';
import Layout from '../components/Layout'; // if you're using a shared layout
import styles from '../style/Index.module.css';
import { useEffect } from 'react';





export default function Home() {
  useEffect(() => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
      const questionBtn = item.querySelector('.faq-question');
      questionBtn.addEventListener('click', () => {
        item.classList.toggle('open');
      });
    });
  }, []);

  return (
    <>
     <Layout>
      <Head>
        <title>BotClick</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>




      
     </Layout>
    </>
    );
}