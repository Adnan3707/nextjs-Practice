import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Try from "../components/try";
import InfoPage from "../components/info";
import Tools from "../components/chosentool";
import Faq from "../components/faq";
import Testimonials from "../components/testimonials";
import Front from "../components/first";
import DemoPage from "../components/demovideo";

import '../Styles/landing.css'
function landing(){
    return(
       <>
       <Front/>
       <DemoPage/>
       {/* <div className="parent">
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
      </div> */}
    {/* <div className="DemoVideo">
            <div className="Demo-Video-heading">
            <span style={{color:'rgba(0, 0, 255, 0.507)'}} >Demo </span> Video
            </div>  
            <div style={{fontSize:'1rem',textAlign:'center'}}>
            Creating a chatbot for <span style= { {fontWeight: 'bold' }}>Product X </span> by crawling the website and training the AI on its content.<br/>Then embed the chatbot on the business site
            </div>
            <div className="phone-image"> </div>
            <div class="bottom-left-neuron"> 
             </div>
       </div>   */}
       <div style={{border: '2px solid rgb(228, 0, 0)'}} className='tryit'>
        <Try />
       </div>
       <div style={{border: '2px solid rgb(228, 0, 0)'}}>
       <InfoPage/>
       </div>
       <div style={{border: '2px solid rgb(228, 0, 0)'}}>
        <Tools/>
       </div>
       <div style={{border: '2px solid rgb(228, 0, 0)'}}>
       <Faq/>
       </div>
       <div style={{border: '2px solid rgb(228, 0, 0)'}}>
       <Testimonials/>
       </div>
    </>

     )
            }
export default landing