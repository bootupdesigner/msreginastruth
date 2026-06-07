import React from 'react'

function Videos() {
    return (
        <div className='container'>
            <h2 style={{ color: 'white', fontSize: 54, }}>Music Videos</h2>
            <section className='videos'>
                <div>
                    <iframe width="480" height="270" src="https://www.youtube.com/embed/8timfa38y1Q?si=VnQbeAWQmRfGbjdn" title="YouTube video player" frameorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h5 style={{color: 'red',  backgroundColor: 'black', padding:3,}}>Ms Regina's Truth - I Just Want Money</h5>

                </div>
                <div>
                    <iframe width="480" height="270" src="https://www.youtube.com/embed/KvrxhaAyiHk?si=ItrhzCg62z7i9THg" title="YouTube video player" frameorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h5 style={{ color: 'red', backgroundColor: 'black', padding:3,}}>Ms Regina's Truth - Girls</h5>
                </div >
            </section>
        </div >
    )
}

export default Videos