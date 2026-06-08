import React from 'react'

function Footer() {
  return (
    <div>
        <h3 style={{textAlign:'center',fontSize:42,fontWeight:'bold', color:'white',padding:0,margin:0,}}>Contact</h3>
        <a className='contact-link' 
        style={{color:'red'}} 
        href="mailto:msreginastruth@gmail.com" >msreginastruth@gmail.com
        </a>
        <p className='text-center'style={{fontSize:20,}}>Ms Regina's Truth &copy; 2026</p>
    </div>
  )
}

export default Footer