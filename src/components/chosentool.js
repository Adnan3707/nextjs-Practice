import React from "react"
import '../Styles/chosentools.css'
function Tools(){
    return(
<>
< div className="tools-main">
    <div class="text" style={{marginLeft:'3rem',fontSize: '3rem',marginTop:'2rem'  }}><span style={{color: 'rgb(0, 123, 255)'}}>Al Chatbot </span>interacts seamlessly with your chosen tool.</div>
    <div className="container-tools">
        <div  style={{fontSize:'1rem',textAlign:'center',marginTop:'1rem'}}>
          Effortlessly create real time data pipelines in seconds without writing any code, <br/>and enjoy the benefits of instant data delivery.
        </div>
      </div>
      <div className="flex-images">
      <div className="word"/>
        <div className="shopify"/>
        <div className="x"/>
        <div className="slack"/>
        <div className="p"/>
        
      </div>
      {/* <div className='brain' /> */}
    </div>
      
</>
    )
}
export default Tools