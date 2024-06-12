import { useState } from "react"
import { sendMessage,isTyping } from "react-chat-engine";
const MessageForm = (props)=>{


    const [value,setValue] = useState('');
    const {chatID,creds} = props;

    const handleChange = (event)=>{
            setValue(event.target.value);
            isTyping(props,chatID);

    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const text = value.trim();

        if (text.length > 0) sendMessage(creds,chatID,{text});

    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
            className="message-input"
            placeHolder="Send a message.."
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            />
        </form>
    )
}

export default MessageForm;