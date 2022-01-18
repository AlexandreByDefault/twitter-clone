import React from 'react'
import Follow from './Follow'
import './RightSide.css'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

const RightSide = () => {
    return (
        <div className='RightSide'>
        <div className="RightSide__search">
         <SearchIcon />
         <input type="text" placeholder='Search Twitter' name="" id=""/>
         </div>
        
        <div className="trend">
        <h3>Trend for you </h3>
        <SettingsIcon />
        </div>
        <div className="RightSide__follow">
        <Follow />
        </div>
        
        </div>
    )
}

export default RightSide
