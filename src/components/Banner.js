'use client'
import Image from 'next/image';
import React from 'react';
import Sonk from '../../public/sonk.jpg'
import Album from '../../public/album.webp'
function Banner() {
    return (
        <div
            className='container'
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap:'wrap'
            }}
        >
            <div style={{ position: 'relative' }}>
                <h3 style={{
                    color: 'white',
                    fontSize: 42,
                }}>Album Available Now</h3>
                <p
                    className="ole-regular-font "
                    style={{ color: 'red', backgroundColor: 'black', padding: 5, fontSize: 30, }}>When Money Grows on Trees<br />by: Ms Regina's Truth</p>
                <Image
                    src={Album}
                    alt="When Money Grows on Trees"
                    objectFit='contain'
                />
            </div>

            <div style={{ position: 'relative' }}>
                <h3 style={{
                    color: 'white',
                    fontSize: 42,
                }}>Book Available Now</h3>
                <p
                    className="ole-regular-font "
                    style={{ color: 'red', backgroundColor: 'black', padding: 5, fontSize: 30, }}>The Story of Not Knowing<br />by: Ms Regina's Truth</p>
                <Image
                    src={Sonk}
                    alt="The Story of Not Knowing by Ms Regina's Truth"
                    objectFit='contain'
                />
            </div>

        </div>
    )
}

export default Banner