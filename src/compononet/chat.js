import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  return (
    <div>
      <h1 style={titleStyle}>Chat</h1>
      <div style={chatContainerStyle}>
        <div style={chatMessagesStyle}>
          {messages.map((message, index) => (
            <div style={messageStyle} key={index}>
              <span style={senderStyle}>{message.sender}:</span> {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={chatInputStyle}>
          <input
            type="text"
            placeholder="Type a message..."
            style={inputStyle}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" style={submitButtonStyle}>Send</button>
        </form>
      </div>
    </div>
  );
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '24px',
  margin: '20px',
};

const chatContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const chatMessagesStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px',
  width: '300px',
  height: '300px',
  overflowY: 'auto',
};

const messageStyle = {
  backgroundColor: '#f0f0f0',
  borderRadius: '5px',
  padding: '5px',
  margin: '5px',
};

const senderStyle = {
  fontWeight: 'bold',
};

const chatInputStyle = {
  display: 'flex',
  alignItems: 'center',
};

const inputStyle = {
  flex: 1,
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const submitButtonStyle = {
  marginLeft: '10px',
  padding: '5px 10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Chat;
