import React from "react";
import '../Styles/InfoPage.css'
function InfoPage(){
       
return(
//     <div className="horizontal-block">
//         <div style={{ padding:'5rem 0rem 6rem 3rem',fontSize: '30px'}}>
//         Tailored <span style={{ color: 'rgba(0, 0, 255, 0.507)' }}> AI Solutions</span> <br/>
// to meet their unique<br/>
// requirement
//         </div>
//         {/* <div class="rounded-box">
//       <p>This is a black rectangle box with an edged top.</p>
//       <div>box 2 </div>
//     </div>
//       <div class="rounded-box"></div>
//     <div class="rounded-box"></div> */}
//       <div class="container">
//       <div class="container">
//     <div class="vertical-boxes">
//       <div class="box"></div>
//       <div class="box"></div>
//     </div>
//     <div class="box"></div>
//   </div>
//   </div>
//     </div>

    <div  className="Tailored" style={{ border:'2px solid pink'}}>
        <div id="item-1" style={{ border:'2px solid pink',fontSize: '30px'}}>
      Tailored <span style={{ color: 'rgba(0, 0, 255, 0.507)' }}> AI Solutions</span> <br />
      to meet their unique<br/>
      requirement
    </div>
     {/* <div class="vertical-boxes">
     </div> */}
       <div id="item-2" class="box">Customer
Support</div>
       <div id="item-3" class="box"></div>
     <div id="item-4" class="box"></div>
   </div>
)
}
export default InfoPage