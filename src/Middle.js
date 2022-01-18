import React from 'react'
import Header from './Header'
import MessageSender from './MessageSender'
import './Middle.css'
import Posts from './Posts'

const Middle = () => {
    return (
        <div className='Middle'>
            <Header />
            <MessageSender />
           
        </div>
    )
}

export default Middle
