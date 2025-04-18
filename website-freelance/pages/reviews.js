import React, { useState } from 'react';
import Layout from '../components/Layout';
import stylesR from '../styles/Reviews.module.css';
import Image from 'next/image';
import Head from 'next/head';
import ApplyFormModal from '..components/ApplyFormModal';

export default function Reviews(){

    const [menuVisible, setMenuVisible] = useState(false);

    

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => setIsModalVisible(!isModalVisible);

    const [activeReview, setActiveReview] = useState(NaN)

    const toggleReview = (index) => {
        setActiveReview(activeReview === index ? NaN : index);
        console.log(index);
    }
    
    const reviewData = 
    [
        {
            title:'Sarah @ TechSolutions Inc',
            text:'BotClick built an AI-powered customer support bot for us, and the results have been incredible! Response times dropped by 70%, and our team can now focus on complex queries while the bot handles routine questions. Highly recommend their expertise! — Sarah M., Customer Support Manager',
            expandedText: 'BotClick built an AI-powered customer support bot for us, and the results have been incredible! Before, our team was overwhelmed with repetitive inquiries, leading to slow response times and frustrated customers. But after deploying BotClick’s custom solution, we saw an immediate 70% drop in response times—and the bot handles over 80% of routine queries without human intervention. What really impressed us was how intuitive and natural the bot feels. It understands complex questions, escalates issues seamlessly, and even learns from past interactions to improve over time. Our support team can now focus on high-priority cases, and customer satisfaction scores have jumped by 25%. The BotClick team was amazing to work with—responsive, detail-oriented, and committed to our success. They even provided post-launch tweaks to optimize performance. If you’re looking for a bot that actually delivers, BotClick is the way to go! — Sarah M., Customer Support Manager',            
            img_src:require("../public/assets/reviewpfp1.jpg")
        },
        {   
            title:'Dr. Emily @ HealthCareConnect',
            text:'BotClick developed a scheduling bot for our clinic, and it’s been flawless. Patients can book, reschedule, and get reminders without human intervention. It reduced no-shows by 40% and improved patient satisfaction. Will definitely work with them again! — Dr. Emily R., Operations Director',
            expandedText: 'BotClick developed a scheduling bot for our clinic, and it’s been flawless. Before, our staff spent hours on the phone managing appointments, leading to errors and missed bookings. Now, patients can book, reschedule, or cancel visits 24/7 through an easy-to-use chat interface—with automatic reminders reducing no-shows by 40%. The bot integrates perfectly with our EHR system, updating records in real time and even checking insurance eligibility before confirming appointments. Patients love the convenience, and our front desk team is less stressed. We’ve also seen a 15% increase in appointment adherence thanks to the bot’s proactive follow-ups. BotClick listened to our unique needs in the healthcare space, ensuring HIPAA compliance and a patient-friendly design. Their support team was there every step of the way, from testing to post-launch adjustments. An absolute lifesaver for busy clinics! — Dr. Emily R., Operations Director',
            img_src:require("../public/assets/reviewpfp2.jpg")
        },
        {   
            title:'Mark @ FinEdge Banking',
            text:'Our customers love the BotClick banking assistant! It handles balance inquiries, transaction history, and even fraud alerts in real time. The bot reduced call center volume by 50% and improved response accuracy. A brilliant investment! — Mark T., Head of Digital Banking',
            expandedText: '',
            img_src:require("../public/assets/reviewpfp3.jpg")
        },
        {   
            title:'David @ E-Commerce +',
            text:'Our BotClick shopping assistant bot has been a game-changer! It guides customers through product selections, answers FAQs instantly, and even recovers abandoned carts. We’ve seen a 30% increase in conversions since deployment. Fantastic work! — David L., Head of Digital Marketing',
            expandedText: '',
            img_src:require("../public/assets/reviewpfp4.jpg")
        },
        {   
            title:'Priya @ SwiftLogistics',
            text:'BotClick’s logistics bot transformed our customer service. It provides instant shipment updates, handles delivery delays, and even processes returns—all without human input. Efficiency is up, and customer complaints are down. 10/10! — Priya K., Logistics Manager',
            expandedText: '',
            img_src:require("../public/assets/reviewpfp5.jpg")
        }
    ];

    return(
        <>
        <Layout>
        <Head>
            <title>BotClick</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className={stylesR.reviewContainer}>
        
        <h2 className={stylesR.title}>A Word from our <span className={stylesR.highlightTitle}>Customers</span></h2>

        <div className={stylesR.reviewsContainer}>
        {reviewData.map((review, index) => (
            <div key={index} className={stylesR.cardContainer}>
                <a className={stylesR.linkReset} href={'www.google.com'} target={"_blank"} rel={"noopener noreferrer"}><h3 className={stylesR.reviewTitle}><span className={stylesR.highlight}>{review.title}</span></h3></a>
                <div className={` ${stylesR.contentWrapper} ${index%2 === 1 ? stylesR.directionSwitch : ''}`}>   
                    <div className={stylesR.reviewContent}> 
                        <p className={stylesR.reviewText}>&ensp;{activeReview === index ? review.expandedText : review.text} 
                            <span className={` ${stylesR.highlight} ${review.expandedText === '' ? stylesR.displayNone : ''}`}> <span className={stylesR.expandReview} onClick={() => toggleReview(index)}>&ensp;&ensp;{activeReview === index ? 'Collapse' : 'Read More'}</span></span>
                        </p>
                    </div>
                    <div className={stylesR.reviewPFPWrapper}>  
                        <Image src={review.img_src} alt='PFP' className={`${stylesR.reviewPFP} ${activeReview === index ? stylesR.reviewPFPExpand : ''}  `}/>
                    </div>
                </div>
            </div>
        
        ))}
        </div>
            <div className={stylesR.applyButtonContainer}>
                <button className={stylesR.applyButton} onClick={toggleModal}>Apply</button>
            </div>
            <ApplyFormModal isVisible={isModalVisible} onClose={toggleModal} />
        </div>

        
        
        
        </Layout>
        </>
    );
}

