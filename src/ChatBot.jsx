import React, { useState } from 'react';
import nlp from 'compromise';
import ChatBotData from './ChatBotData';
import './Chat.css';

const ChatBot = () => {
    const [userInput, setUserInput] = useState('');
    const [conversation, setConversation] = useState([
        {
            sender: 'lily',
            message: "Hello! Welcome to Foodflock Assistant. I'm Lily, here to assist you. How can I assist you today?",
        },
    ]);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleInputMessage = (event) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = () => {
        if (userInput.trim() === '') return;

        const newConversation = [
            ...conversation,
            {
                sender: 'user',
                message: userInput,
            },
        ];

        const response = getChatBotResponse(userInput);
        newConversation.push({
            sender: 'lily',
            message: response,
        });

        setConversation(newConversation);
        setUserInput('');
    };

    const getChatBotResponse = (userMessage) => {
        const doc = nlp(userMessage.toLowerCase());
        const keywords = Object.keys(ChatBotData);

        for (let keyword of keywords) {
            if (doc.has(keyword)) {
                return ChatBotData[keyword];
            }
        }

        if (doc.has('hi') || doc.has('hello') || doc.has('hey')) {
            return "Hi there! How can I assist you today?";
        }

        if (doc.has('i am')) {
            return "Great to meet you! How can I help?";
        }

        return "I'm not sure about that. Let me connect you to an agent.";
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div>
            <div className="chatbot-icon" onClick={toggleChat}>
                💬
            </div>

            <div className={`chatbot-container ${isChatOpen ? 'active' : ''}`}>
                <div className="chatbot-header">Foodflock Assistant</div>
                <div className="chatbot-messages">
                    {conversation.map((chat, index) => (
                        <div
                            key={index}
                            className={chat.sender === 'lily' ? 'bot-message' : 'user-message'}
                        >
                            {chat.message}
                        </div>
                    ))}
                </div>
                <div className="chatbot-input">
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleInputMessage}
                        placeholder="Type your message..."
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
