import { Avatar } from "@mui/material"
import "./conversation.css"

import React from 'react'




const Conversation = () => {
  return (
    <div className="conversation">
      <Avatar  className="conversation-img" 
      src="/images/person/4.png"/>
      <div className="conversation-name ">  ali veli </div>
    </div>
  )
}

export default Conversation
