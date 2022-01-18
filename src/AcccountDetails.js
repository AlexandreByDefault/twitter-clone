import { Avatar} from '@mui/material'
import React from 'react'
import './AccountDetails.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const AcccountDetails = ({profileSrc,name,id}) => {
    return (
        <div className='AccountDetails'>
            
            <Avatar src={profileSrc} />
            <div className="AccountDetails__infos">
            <h3>{name}</h3>
                <h4>{`@`+`${id}`}</h4>
            </div>
            <div className="AccountDetails__more">
            <MoreHorizIcon />
            </div>
           
        </div>
    )
}

export default AcccountDetails
