
import { Logout, Settings } from "@mui/icons-material"
import { Avatar, Button,} from "@mui/material"
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import FavoriteIcon from "@mui/icons-material/Favorite";


import "./profile.css"
import Post from "../../components/post/Post";




const Profile = () => {
  return (
    <div className="container">

<div className="profile-page">
<div className="profile-head">
  <div className="head-left">
  <Avatar src="https://yt3.ggpht.com/yti/AHXOFjVnX4FGZdlPERoxEsdOZuTysSOFHqejy1JaDU-XGg=s88-c-k-c0x00ffffff-no-rj-mo"  
  sx={{width:150, height:150}} />   
  </div>



  <div className="head-right">
  <div className="head-right-top">
  <span className="profile-username">servet can </span>
   <div className="profile-page-buttons">
   < Button variant="contained" size="small" >Düzenle </Button>
   <button>
   <Settings />
   </button>
   <button>
   <Logout color="error"/>
   </button>
   </div>
  </div>
  <div className="head-right-center">
    
    <div className="post-count">

      <b>1</b> <span> Post</span>
    </div>
    
    <div className="follower-count">

      <b>1</b> <span> Follower</span>
    </div>

    <div className="following-count">

      <b>1</b> <span> Follows</span>
    </div>
    
    
   </div>
  <div className="head-right-bottom">
    <b>@canservettt</b>
    <span>I am a full stack developer</span>

  </div>
  </div>
</div>




<div className="profile-body">


<div className="profile-nav-tabs">
<button className="active">
<GridOnOutlinedIcon />
<span>Post</span>
</button>
<button>
<VideoLibraryOutlinedIcon />
<span>Videos</span>
</button>

<button>
<BeenhereOutlinedIcon/>
<span>Save</span>
</button>

<button>
<AccountBoxOutlinedIcon />
<span>Tagged</span>
</button>


</div>
<div className="profile-post-grid">
<div className="grid-post"> 
<Post />
<div className="like-icon-wrapper">
<FavoriteIcon className="like-icon"/>
<b>1</b>
</div>
</div>

<div className="grid-post"> 
<Post />
<div className="like-icon-wrapper">
<FavoriteIcon className="like-icon"/>
<b>1</b>
</div>
</div>
<div className="grid-post"> 
<Post />
<div className="like-icon-wrapper">
<FavoriteIcon className="like-icon"/>
<b>1</b>
</div>
</div>
<div className="grid-post"> 
<Post />
<div className="like-icon-wrapper">
<FavoriteIcon className="like-icon"/>
<b>1</b>
</div>
</div>
<div className="grid-post"> 
<Post />
<div className="like-icon-wrapper">
<FavoriteIcon className="like-icon"/>
<b>1</b>
</div>
</div><div className="grid-post"> 
<Post />
<div className="like-icon-wrapper">
<FavoriteIcon className="like-icon"/>
<b>1</b>
</div>
</div>











</div>




</div>

</div>


    </div>
  )
}

export default Profile
