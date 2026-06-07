'use client'
import React from 'react'
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Header() {
    return (
        <div className='container header'>
            <h1
                style={{ fontSize: 60,color:'white', }}
                className='text-center'>Ms Reginas Truth</h1>

            <div className='social-icons'>
                <a href='https://x.com/msreginastruth?s=21&t=TBeV4bqWMh_bFEB0fhAxuw' target='_blank'>
                    <XIcon
                        sx={{ fontSize: 24, color:'white' }} />
                </a>
                <a href='https://youtube.com/@msreginastruth?si=Pso2Hc6g3mFbhrlp' target='_blank'>
                    <YouTubeIcon
                    sx={{ fontSize: 24, color:'white' }}/>
                </a>
            </div>

        </div>
    )
}

export default Header