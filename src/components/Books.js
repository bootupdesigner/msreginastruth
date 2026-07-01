'use client'
import Image from 'next/image';
import React from 'react';
import Sonk from '../../public/sonk.jpg'
import Album from '../../public/album.webp'
function Books() {
    return (
        <div
            className='container'
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                marginBottom:15
            }}
        >

            <div style={{ }}>
                <h3 style={{
                    textAlign:'center',
                    color: 'white',
                    fontSize: 42,
                }}>Book Available Now</h3>
                <p
                    className="ole-regular-font "
                    style={{ color: 'red', backgroundColor: 'black', padding: 5, fontSize: 30, }}>The Story of Not Knowing<br />by: Ms Regina's Truth</p>
                <Image
                    src={Sonk}
                    alt="The Story of Not-Knowing by Ms Regina's Truth"
                    objectFit='contain'
                    style={{
                        height:400,
                        width:'auto',
                    }}
                />
            </div>

        </div>
    )
}

export default Books;