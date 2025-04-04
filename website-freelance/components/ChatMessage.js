import stylesQ from '../styles/Questions.module.css';

const ChatMessage = ({chat}) => {
    return (
    !chat.hideInChat && (
        <p className={`${stylesQ.message} ${chat.role === 'model' ? stylesQ.botMessage : stylesQ.userMessage}`}>
            &nbsp;{chat.text}
        </p>
))};

export default ChatMessage