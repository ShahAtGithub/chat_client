// components/Chat.js
import API from '@/utils/apiConfig';
import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

const ENDPOINT = "http://localhost:4000";
var socket;
const Chat = ({ selectedUser,setmessageData,messageData }) => {
  const [messageInput, setMessageInput] = useState("")
  const [User, setUser] = useState(null)
  useEffect(() => {
   
      const user= localStorage.getItem("User")
      const parseUser=JSON.parse(user)
      setUser(parseUser)
      socket = io(ENDPOINT);
      socket.emit("setup", parseUser);
     
  }, []);
  const fecthAllMessages=async(id)=>{
    try {
      const token=await localStorage.getItem("Token")
      const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await API.get(`/messages/${id}`,config).then((res)=>{
          setmessageData([...res.data])
          socket.emit("join chat", id);
        }
        
        ).catch((err)=>console.log("err",err))
      
    } catch (error) {
      
    }
   
  }
  const createMessages=async()=>{
    try {
      if(selectedUser?.id){
        
      const token=await localStorage.getItem("Token")
      const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await API.post(`/messages`,{
          chatId:selectedUser?.id,
          content:messageInput

        },config).then((res)=>{
          socket.emit("new message", res.data);
          setmessageData([...messageData, res.data]);
          setMessageInput("")
        }).catch((err)=>console.log("err",err))
      }
      
    } catch (error) {
      
    }
   
  }
  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (
        selectedUser.id== newMessageRecieved.chat._id
      ) {
        
        setmessageData([...messageData, newMessageRecieved]);
      }
    });
  });

  useEffect(() => {
    if(selectedUser?.id)
    {
      fecthAllMessages(selectedUser?.id)
    }
  
   
  }, [selectedUser?.id])
  
  return (
    <div className="chat">
      {selectedUser?.senderName && <h2>Chat with {selectedUser?.senderName } </h2>}
      <div className="messages">
        {messageData?.length>0?messageData.map((message, index) => (
          <div
            key={message._id}
            className={`message ${message.sender._id === User._id ?  'received':'sent'}`}
          >
            <span className="sender">{message.sender._id === User._id? "You":message.sender.name}:</span> {message.content}
          </div>
        )):
        <div className="chat-empty">
      <p className="empty-message">No messages in this chat.</p>
    </div>}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." value={messageInput} onChange={(e)=>setMessageInput(e.target.value)} />
        <button onClick={createMessages}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
