import "./post.css"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import React from 'react'
import { Avatar } from "@mui/material"

const Post = () => {
  return (
    <div className="post-wrapper ">
      <div className="post-header">
         <div className="post-header-left">
          <a href ="/"> 
          <Avatar src="https://yt3.ggpht.com/yti/AHXOFjVnX4FGZdlPERoxEsdOZuTysSOFHqejy1JaDU-XGg=s88-c-k-c0x00ffffff-no-rj-mo"  
          sx={{width:32, height:32 }} />   
          </a>
          <a href="/" className="profile-username"> Servet Can</a>
          </div>
         <div className="post-header-right">
          <button> <MoreHorizOutlinedIcon /> </button>
         </div>
      </div>
      <div className="post-image">
        <img src="/images/post/1.png" alt="Post İmage" ></img>
      </div>
      <div className="post-bottom">
        <div className="post-like">
          <FavoriteOutlinedIcon  className="post-like-icon active "/>
        </div>
        <div className="post-count">0 like</div>
        <div className="post-content">
          <a href="/" className="profile-username">
            servet can 
          </a>
          <span className="post-text"> 
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Delectus aperiam esse sed officia inventore repellendus
         modi repellat libero est quia? 
         </span>
        </div>
       
        <div className="post-time"> 1 dakika önce</div>
      </div>
    </div>
  )
}

export default Post
