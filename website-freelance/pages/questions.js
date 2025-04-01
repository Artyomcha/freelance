import React, { useState } from 'react';
import Layout from '../components/Layout';
import stylesQ from '../styles/Questions.module.css';
import Image from 'next/image';
import Head from 'next/head';

export default function Questions(){

    const img_src1 = require('../public/assets/LogoMainNoBG.svg');
    const img_src2 = require('../public/assets/SendArrow.svg');
    const img_src3 = require('../public/assets/SendArrowGreen.svg');

    return(
        <>
        <Layout>
        <Head>
            <title>BotClick</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className={stylesQ.questionsContainer}>
          <div className={stylesQ.chatWrapper}>
            <div className={stylesQ.logoWrapper}> 
              <Image src={img_src1} alt='LOGO' className={stylesQ.logo}/>
            </div>

            <div className={stylesQ.chatContainer}> 
              <div className={stylesQ.outputContainer}>
                <p className={stylesQ.outputText}>
                  &emsp;Officia amet adipisicing excepteur tempor ipsum veniam veniam. Esse sunt id laborum et adipisicing consequat enim. Labore anim fugiat commodo non irure aute occaecat mollit irure nostrud commodo cupidatat do. Est velit do non non dolore irure et nostrud.
                </p>
                <p className={stylesQ.outputUnsatisfied}>
                &nbsp;&nbsp;Not satisfied with the answer? &nbsp;&nbsp;<span className={stylesQ.outputDM}>Message us directly</span>
                </p>
              </div>
              <div className={stylesQ.inputContainer}>
                <div className={stylesQ.chatInputContainer}>
                  <input className={stylesQ.chatInput} placeholder={'Q Placeholder'}/>
                </div>
                <div className={stylesQ.chatButton}>
                <Image src={img_src2} alt='SEND' className={stylesQ.sendArrow}/>
                <Image src={img_src3} alt='SEND' className={stylesQ.sendArrowGreen}/>
                </div>

              </div>
            </div>
          </div>

        </div>

        
        </Layout>
        </>
    );
}