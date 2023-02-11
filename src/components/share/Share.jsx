import { Avatar, Button, Modal, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ShortTextOutlinedIcon from '@mui/icons-material/ShortTextOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import "./share.css"




const Share = ({open, handleClose}) => {

    
    return (<div>
       
      <Modal open={open} onClose={handleClose} className="modal" >
        <Box className="modal-box">
      
       <div className='modal-head'>
        <Typography variant='span'> Create New Post </Typography>
         </div>
         <form className='modal-body'>
          <div className="modal-body-top">
          <Avatar  alt="Remy Sharp"
                     src="https://yt3.ggpht.com/yti/AHXOFjVnX4FGZdlPERoxEsdOZuTysSOFHqejy1JaDU-XGg=s88-c-k-c0x00ffffff-no-rj-mo"  />
         
         <input className='modal-text-input' type="text"  placeholder=' photo message' />
          <Button type="submit" variant="contained" height="4px"> Gönder</Button>
          </div>
          <div className="modal-buttons">

            <button> <AddAPhotoOutlinedIcon className='button-icon' /> <b>Fotoğraf Ekle</b> </button>
            <button> <VideoCallOutlinedIcon/> <b> Video Ekle</b> </button>
            <button> <CalendarMonthOutlinedIcon /> <b> Etkinlik Planla</b> </button>
            <button> <ShortTextOutlinedIcon /> <b> Yazı Yaz</b> </button>
          </div>
          <div className="share-img-wrapper">
            <img  className="share-img" src="/images/post/6.png" alt="" />
              <CancelOutlinedIcon className='cancel-icon' color="error"/> 
          </div>
        </form>
        </Box>
      
      </Modal>

</div>
  )
}

export default Share
