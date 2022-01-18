import React from 'react'
import { Avatar, Button } from '@mui/material'

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifIcon from '@mui/icons-material/Gif';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Form = (props) => {
    const {value,onChange,onClick,onSubmit} = props
    return ( <>
        <div className='MessageSender'>
        <div className="MessageSender__top">
        <Avatar className='avatar' src='https://pbs.twimg.com/profile_images/1386567638277578753/L372SvuA_400x400.jpg' alt='User name' />
        <form onSubmit={onSubmit}>
         <input type="text" value={value} onChange={onChange} name="" id="" placeholder="What's happening?"/> 
         </form>
        </div>
            <div className="MessageSender__middle">

                    <div className="MessageSender__options">
                    <div className="MessageSender__option">
                    <InsertPhotoIcon  />
                    </div>
                    <div className="MessageSender__option">
                    <GifIcon  />
                    </div>
                    <div className="MessageSender__option">
                    <PollOutlinedIcon />
                    </div>
                    <div className="MessageSender__option">
                    <SentimentSatisfiedOutlinedIcon color='#00BA7C' />
                    </div>
                    <div className="MessageSender__option">
                    <ScheduleIcon  />
                    </div>
                
                   </div>
                   
                <div className="button">
                <Button onClick={onClick} > Tweet </Button>
                </div>
            
            </div>
           
        </div>
        </>
    )
    
    
}

export default Form
