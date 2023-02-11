

import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Avatar } from "@mui/material";
import React from 'react'
import Logo from "../Logo/Logo"

import "./header.css"

const Header = ({handleOpen}) => {
  return (
    <div className="header-wrapper">
        <div className="container">
            <div className="header">
         
                <Logo   />
               
                <div className="search">
                  <SearchIcon  className="search-icon"/>
                  <input type="text" placeholder="search" />
                </div>
                <div className="header-link">
                    <a href="/"> < HomeOutlinedIcon  className='icon'/> </a>
                    <a href="/"> < ChatBubbleOutlineOutlinedIcon className='icon' /> </a>
                    < AddBoxOutlinedIcon style={{cursor:"pointer"}}  className='icon' onClick={handleOpen}/>
                    <Avatar alt="Remy Sharp"
                     src="https://yt3.ggpht.com/yti/AHXOFjVnX4FGZdlPERoxEsdOZuTysSOFHqejy1JaDU-XGg=s88-c-k-c0x00ffffff-no-rj-mo"  />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
