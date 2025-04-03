// ORIGINALLY BUILT BASED ON https://youtu.be/5fiXEGdEK10?si=lXqua6pdoiKo-sbc
// CODE IS VERY SIMILAR, RECOMMEND FOLLOWING VIDEO WHEN EDITING
// ESPECIALLY WHEN IT COMES TO ANYTHING TO DO WITH THE API

import stylesQ from '../styles/Questions.module.css';
import ChatForm from '../components/ChatForm';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ChatMessage from './ChatMessage';
import { companyInfo } from './CompanyInfo';

const ChatBot = () => {
    const [chatHistory, setChatHistory] = useState([{
        hideInChat: true,
        role: "bot",
        text: companyInfo
    }]);
    const [DMClick, setDMClick] = useState(0);
    const outputContainerRef = useRef();
    const img_src1 = require('../public/assets/LogoMainNoBG.svg');

    //  --> REPLACES "THINKING..." WITH ACTUAL RESPONSE
    const updateHistory = (text) => {
        setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), {role: "bot", text}]);
    }

    // --> GENERATING API RESPONSE
    const generateResponse = async (history) => {

        // --> FORMATTING REQUEST TO THE API
        history = history.map(({role, text}) => ({role, parts: [{text}]}))
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({contents: history})
        }
    
        try {
            //  --> FOR API RESPONSE
            // !!!! ORIGINALLY LINK IS SUPPOSED TO BE IN .env FILE BUT WHO TF KNOWS WHY IT DOESNT WORK
            // ?? YOU CAN FUCK AROUND W THE API VERSION E.G. ...v1/models/gemini-1.5-pro...
            // const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyArloEnU3ZwTr85oM7FREUH2QHWNotCoOM', requestOptions);
            // const data = await response.json();
            // if (!response.ok) throw new Error(data.error.message || "Something went wrong :(");
            // const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            
            // --> FOR TESTING WITHOUT API
            const apiResponseText = "testing this thing"; 

            updateHistory(apiResponseText);
        } catch (error) {
            updateHistory("Something went wrong :(  we're already working to fix it");
        }
    }

    useEffect(() => {
        outputContainerRef.current.scrollTo({top: outputContainerRef.current.scrollHeight, behavior: "smooth"});
    }, [chatHistory]);

    const DMHandler = () => {
        setDMClick(DMClick + 1);
        if (DMClick === 1) setDMClick(0);
        console.log(DMClick);
    };

    return (
    <div className={stylesQ.body}>
    <div className={stylesQ.questionsContainer}>

            <div className={stylesQ.chatWrapper}>

            <div className={stylesQ.logoWrapper}> 
                <Image src={img_src1} alt='LOGO' className={stylesQ.logo}/>
            </div>

            <div className={stylesQ.chatContainer}> 

                <div ref={outputContainerRef} className={stylesQ.outputContainer}>
                    <p className={`${stylesQ.message} ${stylesQ.botMessage}`}>&nbsp;Default greeting message. helo <br/> <span className={stylesQ.subTextGreeting} onClick={DMHandler}>If I cant answer your question you can reach us <span className={stylesQ.directMessage}>here</span> </span> </p>
                    
                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} chat={chat}/>
                    ))}

                </div>

                <div className={stylesQ.inputContainer}>

                <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateResponse={generateResponse}/>

                </div>
            </div>
            </div>
        </div>
        {/* <div className={`${stylesQ.popupDMBG} ${DMClick == 0 ? stylesQ.popupNone : stylesQ.popupBlock}`}  onClick={DMHandler}>
            <div className={`${stylesQ.popupDM} ${DMClick == 0 ? stylesQ.popupNone : stylesQ.popupBlock}`}>
                <div className={stylesQ.popupCloseButton} onClick={DMHandler}>

                </div>
                <form className={stylesQ.DMform}> 
                    <div className={stylesQ.DMInput}>
                        <div className={stylesQ.DMLineInput}>
                            <div>
                                <p>Field1</p>
                                <input/>
                            </div>
                            <div>
                                <p>Field2</p>
                                <input/>
                            </div>
                            <div>
                                <p>Field3</p>
                                <input/>
                            </div>
                        </div>
                        <div className={stylesQ.DMTextInput}>
                            <textarea/>
                        </div>
                        
                    </div>
                    <button></button>
                </form>
            </div>
        </div> */}
    </div>
    );
};




export default ChatBot