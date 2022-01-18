import { Avatar, Button } from '@mui/material'
import React from 'react'
import './User.css'

const User = ({name,id ,profileimg}) => {
    return (
        <div className='User'>
        <Avatar src={profileimg} />
        <div className="user__infos">
        <h3>{name}</h3>
            <h4>{`@`+`${id}`}</h4>
        </div>
            <Button>Follow</Button>
        </div>
    )
}

export default User
