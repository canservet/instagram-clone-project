import "./messenger.css"

import React from 'react'
import Conversation from "../../components/conversation/Conversation"
import Message from "../../components/message/Message"
import { Button } from "@mui/material"
import ChatOnline from "../../components/chatOnline/ChatOnline"

const Messenger = () => {
  return (
    <div className="messenger">
        <div className="chat-menu">
            <div className="chat-menu-wrapper">
                <input  className="chat-menu-input" placeholder="Search For Friends" />
              
              <Conversation/>
            
            
            </div>
        </div>
        <div className="chat-box">
         <div className="chat-box-wrapper">
        <div className="chat-box-top">
            <div>
                <Message/>
            </div>
        </div>
        <div className="chat-box-bottom"> 
        <textarea className="chat-message-input " placeholder="write ">

        </textarea>
        <Button
              color="success"
              variant="contained"
              className="chat-submit-button"
              type="submit" >
              Send
            </Button>      
            
            
              </div>
         </div>
 


        </div>
        <div className="chat-online">
            <div className="chat-online-wrapper">
            <h4> Online Friends</h4>
                <ChatOnline  />
                <ChatOnline  />
                <ChatOnline  />
                <ChatOnline  />
            </div>


        </div>
    </div>
  )
}

export default Messenger
