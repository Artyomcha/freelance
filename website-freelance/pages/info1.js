import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Info.module.css';
import Image from 'next/image';
import Head from 'next/head';

export default function Info(){


    return(
        <>
        <Layout>
        <Head>
            <title>BotClick</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className={styles.container}>
            <h1 className={styles.title}>Who are <span className={styles.highlight}>We?</span></h1>
            <p className={styles.description}>
                We are <span className={styles.highlight}>BotClick</span>, a team of professionals specializing in developing smart bots for various websites and platforms.
                We help businesses automate processes, improve customer interactions, and increase operational efficiency through our innovative solutions.
            </p>
        </div>
        <div className={styles.wrapper}>
         <h2 className={styles.heading}>Our Services</h2>
            <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                <span className={styles.serviceTitle}>Chatbot Development:</span> We create bots for customer interaction on platforms such as Telegram, Facebook, Slack, and others.
                </li>
                <li className={styles.serviceItem}>
                <span className={styles.serviceTitle}>Process Automation:</span> We integrate bots for automating tasks such as data collection, query handling, notifications, and alerts.
                </li>
                <li className={styles.serviceItem}>
                <span className={styles.serviceTitle}>Custom Bot Development:</span> We build bots tailored to solve unique business challenges, including bots for online services, e-commerce, and customer support.
                </li>
                <li className={styles.serviceItem}>
                <span className={styles.serviceTitle}>API Integration:</span> We connect bots to your systems, CRMs, data exchange platforms, and other services.
                </li>
                <li className={styles.serviceItem}>
                <span className={styles.serviceTitle}>Bot Support and Improvement:</span> Ongoing maintenance, updates, and optimization of bots to ensure their stability and performance.
                </li>
            </ul>
        </div>

        <div className={styles.mainContainer}>
                <h1 className={styles.pageTitle}>Service Pricing & Development Timelines</h1>
                <p className={styles.introduction}>
                    Our pricing varies based on project complexity and required features:
                </p>

                <div className={styles.pricingBox}>
                    <h3 className={styles.basicTier}>• Essential Package:</h3>
                    <p>Ideal for small projects with fundamental features.</p>
                    <p><strong>Cost:</strong> Starts at $300.</p>
                    <p><strong>Duration:</strong> 1–2 weeks.</p>
                </div>

                <div className={styles.pricingBox}>
                    <h3 className={styles.advancedTier}>• Professional Package:</h3>
                    <p>Designed for businesses requiring integrations and complex automation.</p>
                    <p><strong>Cost:</strong> Starts at $800.</p>
                    <p><strong>Duration:</strong> 3–4 weeks.</p>
                </div>

                <div className={styles.pricingBox}>
                    <h3 className={styles.bespokeTier}>• Enterprise Solutions:</h3>
                    <p>Fully customized bot development tailored to unique business needs.</p>
                    <p><strong>Cost:</strong> Custom pricing based on project scope.</p>
                    <p><strong>Duration:</strong> 4+ weeks, depending on complexity.</p>
                </div>
            </div>
    

        
        </Layout>
        </>
    );
}