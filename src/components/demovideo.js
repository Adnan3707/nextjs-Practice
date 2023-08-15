import React from "react";
import '../Styles/demovideo.css'
function DemoPage(){
    return(
        <div className="DemoPage">
            <div  className="Demo-heading" style={{fontSize:'3rem',padding:'1rem 1rem 1rem 1rem'}}>
                <span style={{ color: 'rgba(0, 0, 255, 0.507)' }}>Demo </span> Video
            </div>
            <div style={{ fontSize: '1rem', textAlign: 'center' ,padding:'.3rem 1rem 1rem 1rem'}}>
                    Creating a chatbot for <span style={{ fontWeight: 'bold' }}>Product X </span> by crawling the website and training the AI on its content.<br />Then embed the chatbot on the business site
                </div>
            <div className="phone-image"> </div>
            <div>
            <video style={{ padding:'.3rem 1rem 1rem 1rem'} }  width="640" height="360" controls>
                {/* <source src="video.mp4" type="video/mp4"> */}
                Your browser does not support the video tag.
            </video>
            </div>
            {/* <div class="bottom-left-neuron">
                </div> */}
        </div>
    )
}
export default DemoPage