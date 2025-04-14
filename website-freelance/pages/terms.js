import Layout from "../components/Layout";
import Head from 'next/head';
import styles from '../styles/Privacy.module.css';

export default function Terms(){
    return(
        <>
        <Layout>
        <Head>
            <title>BotClick</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
            <p className={styles.text}>
<span className={styles.title}>BotClick Terms and Conditions  </span>

<br></br><br></br>Last Updated: 14.04.2025  

<br></br><br></br>Welcome to BotClick! These Terms and Conditions ("Terms") govern your use of our services, website, and any bots or automation solutions ("Services") provided by BotClick. By accessing or using our Services, you agree to comply with these Terms. If you do not agree, please refrain from using our Services.  

<br></br><br></br><br></br><span className={styles.header}>1. Services Overview  </span>
<br></br><br></br>BotClick specializes in designing, developing, and deploying custom automation solutions ("Bots") tailored to your business needs. Our Services include:  
<br></br>- Consultation and bot design  
<br></br>- Custom bot development  
<br></br>- Deployment and integration support  
<br></br>- Maintenance and updates (if applicable)  

<br></br><br></br><br></br><span className={styles.header}>2. User Responsibilities  </span>
<br></br><br></br>By using our Services, you agree to:  
<br></br>- Provide accurate and complete information for bot development.  
<br></br>- Ensure compliance with all applicable laws and regulations.  
<br></br>- Not use our Bots for illegal, fraudulent, or harmful activities.  
<br></br>- Obtain necessary permissions for any third-party integrations.  

<br></br><br></br><br></br><span className={styles.header}>3. Intellectual Property  </span>
<br></br><br></br>- BotClick’s Ownership: All pre-existing software, tools, and proprietary technology remain the property of BotClick.  
<br></br>- Client’s Ownership: Upon full payment, custom-developed bots are transferred to you, unless otherwise agreed in writing.  
<br></br>- Third-Party Tools: Some Bots may rely on external platforms (e.g., APIs, software). Compliance with their terms is your responsibility.  

<br></br><br></br><br></br><span className={styles.header}>4. Payments & Refunds  </span>
<br></br><br></br>- Fees for Services will be outlined in a separate agreement or invoice.  
<br></br>- Payment terms (e.g., upfront, milestones) will be specified before work begins.  
<br></br>- Refunds are subject to our Refund Policy (if applicable) and project stage.  

<br></br><br></br><br></br><span className={styles.header}>5. Confidentiality  </span>
<br></br><br></br>- Both parties agree to keep confidential information private and not disclose it without consent.  
<br></br>- BotClick may use anonymized data for analytics and improvements.  

<br></br><br></br><br></br><span className={styles.header}>6. Limitation of Liability  </span>
<br></br><br></br>- BotClick provides Services "as is" and does not guarantee uninterrupted or error-free performance.  
<br></br>- We are not liable for indirect, incidental, or consequential damages arising from bot use.  
<br></br>- Liability is limited to the amount paid for Services in the last 12 months.  

<br></br><br></br><br></br><span className={styles.header}>7. Termination  </span>
<br></br><br></br>- Either party may terminate Services with written notice, subject to any ongoing contractual obligations.  
<br></br>- Upon termination, you must cease using the Bot, and any unpaid fees become due.  

<br></br><br></br><br></br><span className={styles.header}>8. Modifications  </span>
<br></br><br></br>BotClick reserves the right to update these Terms at any time. Continued use of Services constitutes acceptance of changes.  

<br></br><br></br><br></br><span className={styles.header}>9. Contact Us  </span>
<br></br><br></br>For questions about these Terms, please contact us here  

            </p>

        </Layout>
        </>
    );
}