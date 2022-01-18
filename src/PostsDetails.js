import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import IosShareIcon from '@mui/icons-material/IosShare';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import './PostsDetails.css'


const PostsDetails = ({profileimg,name,id,message,num}) => {
    return (
        <div className='PostsDetails'>
            <div className="PostDetails__top">
                <div className="PostsDetails__infos">
                <Avatar src={profileimg} />
                <h3>{name}</h3>
                    <h4>{`@`+`${id}`}</h4>
                    <p>{new Date().getMinutes()}</p>
                </div>
                <div className="PostDetails__more">
                <MoreHorizIcon />
                </div>
               
            </div>
            <div className="tweet">
            <p>{message}</p>
            </div>
            
            <div className="PostDetails__widget">
            <div className="widget__options"> <div className="tool"> <ChatBubbleOutlineIcon /> <p>{num}</p> </div></div>
            <div className="widget__options"> <div className="tool"> <RepeatIcon /><p>{num}</p> </div></div>
            <div className="widget__options"> <div className="tool"><FavoriteBorderIcon/><p>{num}</p></div></div>
            <div className="widget__options"> <IosShareIcon /> </div>
            <div className="widget__options"> <EqualizerIcon /> </div>
            </div>
        </div>
    )
}

export default PostsDetails
