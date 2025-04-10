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
        role: "model",
        text: companyInfo
    }]);
    const [DMClick, setDMClick] = useState(0);
    const outputContainerRef = useRef();
    const img_src1 = require('../public/assets/LogoMainNoBG.svg');
    const img_src2 = require('../public/assets/popupX.svg');

    //  --> REPLACES "THINKING..." WITH ACTUAL RESPONSE
    const updateHistory = (text) => {
        setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), {role: "model", text}]);
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
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=_KEY_', requestOptions);
            const data = await response.json();
            console.log(data)
            console.log(data.candidates[0].content.parts);
            if (!response.ok) {
                const errorMessage = data?.error?.message || "Something went wrong :(";
                throw new Error(errorMessage);
              }
            const apiResponseText = data?.candidates?.[0]?.content?.parts?.[0]?.text.trim();
            
            // --> FOR TESTING WITHOUT API
            //const apiResponseText = "testing this thing"; 

            updateHistory(apiResponseText);
            const userMessage = history[history.length - 1].parts[0].text;
            await fetch('/api/log-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userMessage, botResponse: apiResponseText }),
            });
        } catch (error) {
            console.log(error);
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

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
      
        const data = {
          firstName: inputFName.current.value,
          lastName: inputLName.current.value,
          email: inputEmail.current.value,
          question: inputQuestion.current.value,
        };
      
        try {
          const response = await fetch('/api/submit-que', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // Google Apps Script expects JSON in POST body
            body: JSON.stringify(data),
          });
      
          // Optional: check if your Apps Script returns success response
          const result = await response.json();
          if (response.ok && result.result === 'success') {
            setIsSubmitted(true); // (optional) if you have a "Thank you" UI
          } else {
            alert('Submission failed. Try again.');
          }
      
          // Clear inputs
          inputFName.current.value = '';
          inputLName.current.value = '';
          inputEmail.current.value = '';
          inputQuestion.current.value = '';
      
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('An error occurred. Please try again.');
        }
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
            
                
        {isSubmitted ? (
            <div className={stylesQ.popupDM}>
                <div className={stylesQ.popupCloseButton} onClick={DMHandler}>
                <Image className={stylesQ.popupCloseIcon} src={img_src2} />
                </div>
                <h2 className={stylesQ.title}>Thank you for applying!</h2>
                <p>Your application has been successfully submitted. We'll be in touch soon!</p>
                <button onClick={DMHandler} className={stylesQ.button}>
                Close
                </button>
            </div>
            ) : (
            <form
                className={`${stylesQ.popupDM} ${
                DMClick == 0 ? stylesQ.popupNone : stylesQ.popupBlock
                }`}
                onSubmit={handleFormSubmit}
                action="#"
            >
                <div className={stylesQ.popupCloseButton} onClick={DMHandler}>
                <Image className={stylesQ.popupCloseIcon} src={img_src2} />
                </div>

                <div className={stylesQ.errorContainer}>
                <p className={stylesQ.errorText}>{errorMessage}</p>
                </div>

                <div className={stylesQ.DMInput}>
                <div className={stylesQ.DMLineInput}>
                    <div>
                    <p className={stylesQ.fieldTitle}>First Name</p>
                    <input
                        className={stylesQ.inputField}
                        ref={inputFName}
                        type="text"
                        placeholder="John"
                    />
                    </div>
                    <div>
                    <p className={stylesQ.fieldTitle}>Last Name</p>
                    <input
                        className={stylesQ.inputField}
                        ref={inputLName}
                        type="text"
                        placeholder="Doe"
                    />
                    </div>
                    <div>
                    <p className={stylesQ.fieldTitle}>Email</p>
                    <input
                        className={stylesQ.inputField}
                        ref={inputEmail}
                        type="text"
                        placeholder="johndoe@myemail.com"
                    />
                    </div>
                </div>
                <div className={stylesQ.DMTextInput}>
                    <p className={stylesQ.fieldTitle}>Your Question</p>
                    <textarea
                    ref={inputQuestion}
                    className={stylesQ.textInputField}
                    placeholder="What is the meaning of life?"
                    />
                </div>
                </div>
                <button className={stylesQ.formButton}>Send</button>
            </form>
)}
                
            
        </div>
    </div>
    );
};




export default ChatBot
