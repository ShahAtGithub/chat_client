// components/Chat.js
import React, { useEffect } from 'react';
import io from "socket.io-client";

const ENDPOINT = "http://localhost:4000";
var socket;
const Chat = ({ selectedUser, messages, onSendMessage }) => {
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", JSON.parse(localStorage.getItem("User")));
    socket.on("connected", () => {});

    // eslint-disable-next-line
  }, []);
  return (
    <div className="chat">
      <h2>Chat with {selectedUser}</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}
          >
            <span className="sender">{message.sender}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button onClick={onSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
