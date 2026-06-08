'use client'
import React from 'react'
import { FaSnapchat } from "react-icons/fa6";
import { TbBrandCashapp, TbBrandSnapchat, TbBrandYoutubeFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";


function Header() {
    return (
        <div className='header'>
            <h1
                style={{ fontSize: 60, color: 'white', fontWeight: 'bold', }}
                className='text-center'>Ms Reginas Truth</h1>

            <div className='social-icons'>
                <a 
                href='https://x.com/msreginastruth?s=21&t=TBeV4bqWMh_bFEB0fhAxuw' 
                target='_blank'
                title="Follow on X formerly Twitter">
                    <FaXTwitter className="menu-icon" />
                </a>

                <a 
                href='https://youtube.com/@msreginastruth?si=Pso2Hc6g3mFbhrlp' 
                target='_blank'
                title="Follow on YouTube">
                    <TbBrandYoutubeFilled className="menu-icon" />
                </a>

                <a
                    href="https://snapchat.com/t/4Uo9AmHo"
                    target='_blank'
                    title="Follow on Snapchat">
                    <TbBrandSnapchat className="menu-icon" />
                </a>

                <a
                    href="https://cash.app/$msreginastruth"
                    target='_blank'
                    title="Donate money on Cashapp">
                    <TbBrandCashapp className="menu-icon" />
                </a>
            </div>

        </div>
    )
}

export default Header