'use client'
import React from 'react'
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Header() {
  return (
    <div>
        <header>
 <h1 
        style={{fontSize:34,}}
        className='text-center'>Ms Reginas Truth</h1>

        <div>
            <XIcon 
            sx={{ fontSize: 24 }}/>
            <YouTubeIcon
            sx={{ fontSize: 24 }}/>
        </div>
        </header>
       
    </div>
  )
}

export default Header