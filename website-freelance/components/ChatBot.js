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
    const img_src2 = require('../public/assets/popupX.svg');

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


    const inputFName = useRef();
    const inputLName = useRef();
    const inputEmail = useRef();
    const inputQuestion = useRef();
    const [errorMessage, setErrorMessage] = useState('\u0020');

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const [userFName, userLName, userEmail, userQuestion] = [inputFName.current.value.trim(), inputLName.current.value.trim(), inputEmail.current.value.trim(), inputQuestion.current.value.trim()];
        setErrorMessage('\u0020');
        if (((!userFName) || (!userFName)) || ((!userFName) || (!userFName))) setErrorMessage('All fields must be filled');
        else if (validateEmail(userEmail) === null) setErrorMessage('Invalid email address');
        else {
            inputFName.current.value = '';
            inputLName.current.value = '';
            inputEmail.current.value = '';
            inputQuestion.current.value = '';
        }

        // SEND TO DB
    };

    const [animation, setAnimation] = useState(0);
    const [animationEye, setAnimationEye] = useState(0);

    return (
    <div className={stylesQ.body}>
        <div className={stylesQ.questionsContainer}>

            <div className={stylesQ.chatWrapper}>

            {/* <div className={stylesQ.logoWrapper}> 
                <Image src={img_src1} alt='LOGO' className={stylesQ.logo}/>
            </div> */}
            <div className={`  ${stylesQ.logoWrapper1} `}> 
                <div className={`${stylesQ.animationBlock} ${animation === 1 ? stylesQ.rotateAnimation360Back : ''}`}></div>
                <div className={`${stylesQ.animationEye} ${stylesQ.leftEye} ${animationEye === 1 ? stylesQ.animationBlink : ''}`}> </div>
                <div className={`${stylesQ.animationEye} ${stylesQ.rightEye} ${animationEye === 1 ? stylesQ.animationBlink : ''}`}> </div>
                <div className={`${stylesQ.animationEye} ${stylesQ.secondaryEye} ${stylesQ.leftEye} ${animationEye === 1 ? '' : stylesQ.animationBlink}`}> </div>
                <div className={`${stylesQ.animationEye} ${stylesQ.secondaryEye} ${stylesQ.rightEye} ${animationEye === 1 ? '' : stylesQ.animationBlink}`}> </div>
                
                <div className={stylesQ.animationBase}> </div>
            </div>

            <div className={stylesQ.chatContainer}> 

                <div ref={outputContainerRef} className={stylesQ.outputContainer}>
                    <p className={`${stylesQ.message} ${stylesQ.botMessage}`}>&nbsp;Default greeting message. helo <br/> <span className={stylesQ.subTextGreeting} onClick={DMHandler}>If I cant answer your question you can reach us <span className={stylesQ.directMessage}>here</span> </span> </p>
                    
                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} chat={chat}/>
                    ))}

                </div>

                <div className={stylesQ.inputContainer}>

                <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateResponse={generateResponse} animation={animation} setAnimation={setAnimation} animationEye={animationEye} setAnimationEye={setAnimationEye}/>

                </div>
            </div>
            </div>
        </div>
        <div className={`${stylesQ.popupDMBG} ${DMClick == 0 ? stylesQ.popupNone : stylesQ.popupBlock}`}  >
            
                
                <form className={`${stylesQ.popupDM} ${DMClick == 0 ? stylesQ.popupNone : stylesQ.popupBlock}`} onSubmit={handleFormSubmit} action={'#'}> 

                    <div className={stylesQ.popupCloseButton} onClick={DMHandler}>
                        <Image className={stylesQ.popupCloseIcon}src={img_src2}/>
                    </div>

                    <div className={stylesQ.errorContainer}>
                        <p className={stylesQ.errorText}>{errorMessage}</p>
                    </div>

                    <div className={stylesQ.DMInput}>
                        <div className={stylesQ.DMLineInput}>
                            <div>
                                <p className={stylesQ.fieldTitle}>First Name</p>
                                <input className={stylesQ.inputField} ref={inputFName} type={'text'} placeholder={'John'}/>
                            </div>
                            <div>
                                <p className={stylesQ.fieldTitle}>Last Name</p>
                                <input className={stylesQ.inputField} ref={inputLName} type={'text'} placeholder={'Doe'}/>
                            </div>
                            <div>
                                <p className={stylesQ.fieldTitle}>Email</p>
                                <input className={stylesQ.inputField} ref={inputEmail} type={'text'} placeholder={'johndoe@myemail.com'}/>
                            </div>
                        </div>
                        <div className={stylesQ.DMTextInput}>
                            <p className={stylesQ.fieldTitle}>Your Question</p>
                            <textarea ref={inputQuestion} className={stylesQ.textInputField} placeholder={'What is the meaning of life?'}/>
                        </div>
                        
                    </div>
                    <button className={stylesQ.formButton}>Send</button>
                </form>
                
            
        </div>
    </div>
    );
};




export default ChatBot