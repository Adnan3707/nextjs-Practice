import React from "react";
import '../Styles/faq.css'
function Faq(){
  return (
    <>
    
    <div class="container-faq">
      <div style={{ textAlign: 'center', fontSize: '2rem' }}>FAQ<span style={{ color: 'rgb(0, 123, 255)' }}>s</span>
      </div>
      <div className="faq-image"></div>
      <div style={{fontSize:'2rem' , padding:'2rem'}}>Couldnt <span style={{ color: 'rgb(0, 123, 255)' }}>Find your</span> Query above?</div>
    {/* <button className="blue-button">Get Your Chatbot</button> */}
    <button style={{backgroundColor:'rgb(0, 123, 255)' ,border: 'none' , fontSize :'14px', color:'white',borderRadius:'10px',padding:'.5rem'}}>Drop your Query here</button>
      
    </div>
    </>
  )

}
export default Faq