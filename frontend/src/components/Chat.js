import React, { useState } from "react";
import axios from "axios";
import "./Chat.css"; // We'll define the CSS for basic styling.

const Chat = () => {
  const [message, setMessage] = useState(""); // For storing user input
  const [chatHistory, setChatHistory] = useState([]); // To keep track of conversation history

  // Handle sending message to the bot
  const sendMessage = async () => {
    if (!message.trim()) return; // Don't send empty messages
    const newMessage = {
      user: message,
      bot: "",
    };

    setChatHistory((prevHistory) => [...prevHistory, newMessage]);

    try {
      const response = await axios.post("http://localhost:5000/api/send-message", {
        message,
      });

      // Update chat history with bot's response
      setChatHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[updatedHistory.length - 1].bot = response.data.response;
        return updatedHistory;
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setMessage(""); // Clear input after sending
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-message">
            <div className="user-message">User: {chat.user}</div>
            <div className="bot-response">Bot: {chat.bot}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
