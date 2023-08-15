import React from "react";
import '../Styles/landing.css'
import phone from '../../images/gc graphics/phone.png'
import Image from 'next/image'

function Try(){
    const phoneStyle ={
    }
return(
    <>
    <div className="try-ai"  >
    <div style={{ paddingTop: '4rem', fontSize: '30px'}}>Give it a <span style={{ color: 'rgba(0, 0, 255, 0.507)' }}>try!</span></div>
    <p style={{ fontSize: '15px'}}>This is a default chatbot trained on  own functionality <br/>You can embed this to any page on your website!
    </p>
    <div className="phone"/>

    </div>
    {/* <div style={{ paddingTop: '4rem', fontSize: '30px', textAlign: 'center' }}>Give it a <span style={{ color: 'rgba(0, 0, 255, 0.507)' }}>try!</span></div>
    <p style={{textAlign:'center' , fontSize: '15px'}}>This is a default chatbot trained on  own functionality <br/>You can embed this to any page on your website!
    </p>
    <Image src={phone} style={phoneStyle}/> */}
    </>
)
}
export default Try