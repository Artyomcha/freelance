import React, { useState } from 'react';
import Layout from '../components/Layout';
import stylesR from '../styles/Reviews.module.css';
import Image from 'next/image';
import Head from 'next/head';

export default function Reviews(){

    const [activeReview, setActiveReview] = useState(NaN)

    const toggleReview = (index) => {
        setActiveReview(activeReview === index ? NaN : index);
        console.log(index);
    }
    
    const reviewData = 
    [
        {
            title:'Mukherjee @ PriyaFarm',
            text:'Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.',
            expandedText: 'Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.',
            img_src:require("../public/assets/reviewpfp1.jpg")
        },
        {   
            title:'Chiranjit @ IndoTech',
            text:'Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.',
            expandedText: 'Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.',
            img_src:require("../public/assets/reviewpfp2.jpg")
        },
        {   
            title:'Guddu @ ScamOrg',
            text:'Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.',
            expandedText: 'Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.',
            img_src:require("../public/assets/reviewpfp3.jpg")
        },
        {   
            title:'Punjab @ CryptoFart',
            text:'Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.',
            expandedText: 'Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.',
            img_src:require("../public/assets/reviewpfp4.jpg")
        },
        {   
            title:'Greg @ TNA',
            text:'Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.',
            expandedText: 'Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.Labore irure proident nostrud Lorem consectetur ad magna aute culpa dolor voluptate esse. Occaecat ut eu tempor laborum do incididunt quis proident reprehenderit ullamco officia excepteur. Ipsum ipsum dolor eu et officia reprehenderit. Amet pariatur et ullamco dolor laboris labore duis voluptate. Nulla Lorem duis amet labore aliqua.',
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
                        <p className={stylesR.reviewText}>&ensp;{activeReview === index ? review.expandedText : review.text} <span className={stylesR.highlight}> <span className={stylesR.expandReview} onClick={() => toggleReview(index)}>&ensp;&ensp;{activeReview === index ? 'Collapse' : 'Read More'}</span></span></p>
                    </div>
                    <div className={stylesR.reviewPFPWrapper}>  
                        <Image src={review.img_src} alt='PFP' className={`${stylesR.reviewPFP} ${activeReview === index ? stylesR.reviewPFPExpand : ''}  `}/>
                    </div>
                </div>
            </div>
        
        ))}
        </div>
            <button className={stylesR.applyButton}>Apply</button>
        </div>
        
        </Layout>
        </>
    );
}

