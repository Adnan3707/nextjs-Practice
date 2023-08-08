import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import '../Styles/landing.css'
function landing(){
    return(
       <>
       <div className="parent">
            <div className="header">
                <div className="mjbImage" />
                <MenuIcon className="menuIcon" position="absolute" marginLeft='20px' />
            </div>
            <div className="heading">
                <SmartToyIcon className="SmartToyIcon" />
                <h1>
                    Custom <br /><span className="blue_text">AI</span> chatbot for <br />your business
                </h1>
            </div>
            <div className="info">
                <h5>Connect your data sources and get an AI chatbot for your data.<br /><span style={{ marginLeft: '4rem' }}>Then add it as a widget to your website</span></h5>
            </div>
            <button className="blue-button">Get Your Chatbot</button>
            <div className="rectangle" />
            <div className="meadow" />
            <div className="blueDot1" />
            <div className="blueDot2" />
      </div>
    
    <div className="DemoVideo">
            <div className="Demo-Video-heading">
            <span style={{color:'rgba(0, 0, 255, 0.507)'}} >Demo </span> Video
            </div>  
            <div>
            Creating a chatbot for <span style={{font:'bold'}}>Product X</span> by crawling the website and training the AI on its content.<br/>
Then embed the chatbot on the business site
            </div>
       </div>  
    </>

     )
            }
export default landing