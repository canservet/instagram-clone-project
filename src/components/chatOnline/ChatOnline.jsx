import { Avatar } from "@mui/material"
import "./chatOnline.css"

const ChatOnline = () => {
  return (
    <div className="chat-online">


<div className="chat-online-friend">
    <div className="chat-online-img-container">

        <Avatar src="/images/person/3.png"  
          sx={{width:32, height:32 }} />   

          <span className="chat-online-badge"></span>
    </div>
    <div className="chat-online-name"> adam online </div>
</div>
    </div>
  )
}

export default ChatOnline
