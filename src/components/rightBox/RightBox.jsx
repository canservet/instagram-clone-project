import React from 'react'
import { Avatar , Button } from "@mui/material"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "./rightbox.css"




const RightBox = () => {
  return (
    <div className="right-box">
    <div className="account">
      <a href="/">
      <Avatar alt="Remy Sharp"
       src="https://yt3.ggpht.com/yti/AHXOFjVnX4FGZdlPERoxEsdOZuTysSOFHqejy1JaDU-XGg=s88-c-k-c0x00ffffff-no-rj-mo"
         />
      </a>
      <div href="/" className="account-titles"> 
      <a href="/"> servet can</a>
      <span>@canservettt</span>
      </div>
    </div>
    <span className="friends-title"> My Friend </span>
    <ul className='friends-list'>
      <li className='firend-item'>
<div className="friend-item-left">
<a href="/">
      <Avatar alt="Remy Sharp" src="/images/person/3.png"  />
      </a>
     <div className="friend-username"> <a href='/'> friend name</a>
     <span> @friendlink</span>
     
     
     </div>
</div>
<div className="friend-item-right">
<Button  size="small"variant="contained" endIcon={ <ArrowCircleRightIcon/>} > Profile Git</Button>

</div>
      </li>
      <li className='firend-item'>
        <div className="friend-item-left">
          <a href="/">
      <Avatar alt="Remy Sharp" src="/images/person/3.png"  />
      </a>
     <div className="friend-username"> <a href='/'> friend name</a>
     <span> @friendlink</span>
     
     
     </div>
</div>
<div className="friend-item-right">
<Button  size="small"variant="contained" endIcon={ <ArrowCircleRightIcon/>} > Profile git </Button>

</div>
      </li>
    </ul>
    </div>
  )
}

export default RightBox
