'use client'

import React from 'react'
import Album from '../../public/album.webp'
import Image from 'next/image';

function Discography() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'space-between'
        }}>
            <div >
                <h3 style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 42,
                }}>Album Available Now</h3>
                <figure>
                    <Image
                        src={Album}
                        style={{ maxHeight: 300, width: 'auto', }}
                        objectFit='contain' />
                    <figcaption
                        className="ole-regular-font"
                        style={{
                            fontSize: 30,
                            color: 'red',
                            backgroundColor: 'black',
                            padding: 5,
                            marginTop: 10,
                        }}
                    >Ms Regina's Truth<br />When Money Grows on Trees</figcaption>
                </figure>

            </div>

            <div>
                <h3
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 42,
                    }}
                >Discography</h3>
                <div style={{
                    width: 300,
                    maxWidth: 300,
                    backgroundColor: 'red',
                }}>
                    <ul style={{
                        listStyle: 'none',
                        fontSize: 30,
                        color: 'white',
                    }}
                        className='ole-regular-font'>
                        <li>Juice</li>
                        <li>Hurrican Season</li>
                        <li>In The Cliniq</li>
                        <li>IAmSick</li>
                        <li>When Money Grows on Trees</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Discography