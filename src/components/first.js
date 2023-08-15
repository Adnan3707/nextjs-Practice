import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import mjb from '../../images/landing/1-dec.png'
import Image from "next/image";
function Front(){
    return(
        <>
    <div className="first">
        <div className="C-1" >
        < Image src={mjb}  />
        </div>
        <div className="C-2-R"  >
        <h1>
                    Custom <br /><span className="blue_text">AI</span> chatbot for <br />your business
                </h1>
            <div >
                <h5>Connect your data sources and get an AI chatbot for your data.<br /><span style={{ marginLeft: '4rem' }}>Then add it as a widget to your website</span></h5>
            </div>
        </div>
        <div className="R-3-L">
        <button className="button-first">Get Your Chatbot</button>
        </div>
        <div className="R-2" >
        <MenuIcon  />
        </div>
        <div className="R-2-R">
        </div>
    </div>

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
        
        </>
)
}
export default Front