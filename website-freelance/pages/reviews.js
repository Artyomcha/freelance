import React, { useState } from 'react';
import Layout from '../components/Layout';
import stylesR from '../styles/Reviews.module.css';
import Image from 'next/image';
import Head from 'next/head';
import ApplyFormModal from '../components/ApplyFormModal';

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
            title:'Sophia@Sopharmacy',
            text:`BotClick's pharmacy bot transformed our customer service! It handles medication inquiries, refill requests, and appointment bookings seamlessly. Patients love the instant support. Highly recommended!`,
            expandedText: `BotClick's pharmacy bot transformed our customer service! It handles medication inquiries, refill requests, and appointment bookings seamlessly. Patients love the instant support. What makes it even better is how it provides multilingual support in Bulgarian and English, integrates with our prescription system for real-time updates, and handles over 200 queries daily without delays. The 24/7 availability has dramatically reduced our after-hours workload. While older staff needed some initial training, BotClick's support team made the transition smooth. For any Bulgarian pharmacy looking to modernize, this solution comes highly recommended.`,            
            img_src:require("../public/assets/reviewpfp1.png")
        },  
        {
            title:'Andres@Torutööd Tartu',
            text:`BotClick's plumbing bot is a lifesaver! It schedules emergency repairs, provides DIY tips, and tracks service vans. Our missed calls dropped by 60% - fantastic for Estonian winters!`,
            expandedText: `BotClick's plumbing bot is a lifesaver! It schedules emergency repairs, provides DIY tips, and tracks service vans. Our missed calls dropped by 60% - fantastic for Estonian winters! The bot prioritizes frozen pipe emergencies during our harsh winters and syncs perfectly with our job tracking system. Its multilingual support in Estonian, Russian and English serves all our customers, while the DIY video library helps with minor issues. We had it up and running in just two weeks during peak season. Though rural location mapping needed slight adjustments initially, BotClick's team resolved it quickly. For Tartu plumbers, this tool is indispensable.`,            
            img_src:require("../public/assets/reviewpfp2.jpg")
        },
        {
            title:'Žan@Korobač',
            text:`BotClick's restaurant bot wows our guests! It books tables, explains our Balkan fusion menu, and even suggests wine pairings. Reservations up 40%!`,
            expandedText: `BotClick's restaurant bot wows our guests! It books tables, explains our Balkan fusion menu, and even suggests wine pairings. Reservations up 40%! The automated reminders have significantly reduced no-shows, while the detailed menu explanations help customers appreciate our ćevapi and Slovenian wine pairings. Integrated with Instagram for promotional bookings, it also handles special dietary requests with ease. During Ljubljana's internet outages, the offline mode keeps basic functions running. The only minor limitation is some inflexibility in daily menu updates, but this barely affects the overall excellent performance. A must for Slovenian restaurants!`,            
            img_src:require("../public/assets/reviewpfp3.png")
        },
        {
            title:'Ema@Prestige',
            text:`BotClick's salon bot is genius! Books appointments, sends style inspiration, and collects feedback. Our cancellation rate dropped by half!`,
            expandedText: `BotClick's salon bot is genius! Books appointments, sends style inspiration, and collects feedback. Our cancellation rate dropped by half! The automated reminders alone reduced no-shows by 55%, while the feedback system improved our online reviews. Clients love browsing haircut ideas through the Instagram Style Assistant, and the loyalty program integration helps retain customers. Supporting Slovenian, Italian and English makes it perfect for our diverse clientele. While there's occasional lag in mobile app syncing, the web version works perfectly. BotClick even provided ready-made templates for holiday promotions. Ljubljana salons shouldn't hesitate to get this bot!`,            
            img_src:require("../public/assets/reviewpfp4.png")
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
                {/* <a className={stylesR.linkReset} href={'www.google.com'} target={"_blank"} rel={"noopener noreferrer"}> */}
                    <h3 className={stylesR.reviewTitle}>
                        <span className={stylesR.highlightTitle}>
                            {review.title}
                        </span>
                    </h3>
                {/* </a> */}
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

