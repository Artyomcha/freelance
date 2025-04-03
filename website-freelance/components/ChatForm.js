import stylesQ from '../styles/Questions.module.css';
import { useRef } from "react";

const ChatForm = ({chatHistory, setChatHistory, generateResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault(); // PREVENTS FROM SUBMITTING EMPTY
        const userMessage = inputRef.current.value.trim(); 
        if (!userMessage) return;
        inputRef.current.value = ""; // RESETTING INPUT FIELD
        
        setChatHistory(history => [...history, { role: "user", text: userMessage}]); //ADDING USER MSG TO CHAT 
        setChatHistory(history => [...history, { role: "bot", text: "Thinking..."}]); // AUTO BOT RESPONSE
        
        setTimeout(() => {
            generateResponse([...chatHistory, { role: "user", text: ` Using the details provided above, please address this query: ${userMessage} `}]);
        },600) //REAL RESPONSE AFTER 600MS DELAY
        
    };

    return (
        <form onSubmit={handleFormSubmit} action={'#'} className={stylesQ.chatInputContainer}>
            <input ref={inputRef} type={'text'} className={stylesQ.chatInput} placeholder={'Q Placeholder'} required/>
            <button className={stylesQ.sendButton}></button>
        </form>

    );
};

export default ChatForm

