import stylesQ from '../styles/Questions.module.css';
import { useRef } from "react";

const ChatForm = ({chatHistory, setChatHistory, generateResponse, animation, setAnimation, animationEye, setAnimationEye}) => {
    const inputRef = useRef();

    const helperFunc = () => {
        console.log('hello');
        setAnimationEye(animationEye + 1);
        if (animationEye === 1) setAnimationEye(0);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // PREVENTS FROM SUBMITTING EMPTY
        const userMessage = inputRef.current.value.trim(); 
        if (!userMessage) return;
        inputRef.current.value = ""; // RESETTING INPUT FIELD

        setAnimation(animation + 1);
        if (animation === 1) setAnimation(0);

        setAnimationEye(animationEye + 1);
        if (animationEye === 1) setAnimationEye(0);
        console.log('hello1');
        setTimeout(() => {helperFunc}, 300)
        
        setChatHistory(history => [...history, { role: "user", text: userMessage}]); //ADDING USER MSG TO CHAT 
        setChatHistory(history => [...history, { role: "model", text: "Thinking..."}]); // AUTO BOT RESPONSE
        
        setTimeout(() => {
            generateResponse([...chatHistory, { role: "user", text: ` Using the details provided above, please address this query: ${userMessage} `}]);
        },300) //REAL RESPONSE AFTER 600MS DELAY
        
    };

    

    return (
        <form onSubmit={handleFormSubmit} action={'#'} className={stylesQ.chatInputContainer}>
            <input ref={inputRef} type={'text'} className={stylesQ.chatInput} placeholder={'Do you offer support after deployment?'} required/>
            <button className={stylesQ.sendButton}></button>
        </form>

    );
};

export default ChatForm

