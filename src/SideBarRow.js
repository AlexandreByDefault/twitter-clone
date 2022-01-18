import React from 'react'
import './SideBarRow.css'

const SideBarRow = ({title,Icon}) => {
    return (
        <div className='SideBarRow'>
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SideBarRow
