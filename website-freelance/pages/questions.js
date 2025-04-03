import React, { useState } from 'react';
import Layout from '../components/Layout';
import stylesQ from '../styles/Questions.module.css';
import Image from 'next/image';
import Head from 'next/head';
import ChatBot from '../components/ChatBot';

export default function Questions(){
  return(
    <>
      <Layout>
        <Head>
          <title>BotClick</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <ChatBot />
        
      </Layout>
    </>
  );
}