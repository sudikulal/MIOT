import React,{useState} from 'react'
import './Rowbar.css'
import College from '../Assets/College.jpg'
import Institute from '../Assets/Institute.jpg'
import Pic1 from '../Assets/Pic1.jpg'
import Pic2 from '../Assets/Pic2.jpg'
import Pic3 from '../Assets/Pic3.jpg'
import Pic4 from '../Assets/Pic4.jpg'
import Pic5 from '../Assets/Pic5.jpg'

export default function Rowbar() {
  const handleHome = ()=>{
    let newText =<img src={College} className="card-img" alt="College" style={{width: "100vw",height:"100vh"}}/>
    setText(newText)
}
const handleDeparment = ()=>{
  let newText =<div className="container"><h4 style={{color:"purple"}}>DEPARTMENT:</h4><ul className="my-3">
  <li>CIVIL ENGINEERING</li><li>COMPUTER SCIENCE</li>
           <li>INFORMATION SCIENCE</li>
           <li>MECHANICAL ENGINEERING</li>
           <li>ELECTRONICS AND COMMUNICATION</li>
</ul></div>
  setText(newText)
}
const handleFacilities = ()=>{
  let newText =<div className="container"><h4 style={{color:"purple"}}>FACILITIES:</h4><ul> 
  <li>Sports and Games</li>
  <li>Language Lab</li>
  <li>Seminar Hall</li>
  <li>Smart Classrooms</li>
  <li>Central Library</li><li>Central Computer Center</li><li>Health Care Center</li>
  <li>Campus Safety and Security</li>
</ul></div>
  setText(newText)
}
const handleAdmission = ()=>{
  let newText =<div className="container"><h4 style={{color:"purple"}}>DOCUMENTS ARE REQUIRED FOR ADMISSION:</h4><p>
  10th standard marks card for proof of date of birth - Original + 3 attested photocopies.<br/>
  12th standard/ equivalent marks card - Original + 3 attested photocopies.<br/>
  Transfer certificate from the institution last attended - Original + 3 attested photocopies.<br/>
  Conduct Certificate from the institution last attended.<br/>
  Medical Certificate which mentions blood group.<br/>
  Passport Size Photographs with red back ground.<br/>
  Study Certificate for CET students.<br/>
  CET / Equivalent Rank Card</p></div>
  setText(newText)
}

const handleGallery = ()=>{
  let newText =<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Pic2} class="d-block " style={{width:"100vw",height:"100vh"}} alt="Pic2"/>
    </div>
    <div class="carousel-item">
      <img src={Pic1} class="d-block w-100" style={{width:"100vw",height:"100vh"}} alt="Pic1"/>
    </div>
    <div class="carousel-item">
      <img src={Pic3} class="d-block w-100" style={{width:"100vw",height:"100vh"}} alt="Pic5" />
    </div>
    <div class="carousel-item">
      <img src={Pic4} class="d-block w-100" style={{width:"100vw",height:"100vh"}} alt="Pic4"/>
    </div>
    <div class="carousel-item">
      <img src={Pic5} class="d-block w-100" style={{width:"100vw",height:"100vh"}} alt="Pic5"/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  setText(newText)
}
const handlePlacement = ()=>{
  let newText =<div className="container"><h4 style={{color:"purple"}}>PLACEMENT:</h4><ul>
    <li>Systematic and continuous placement oriented soft skills training by professional trainers right from first year.</li>
    <li>Excellent infrastructure with separate conference room, interview rooms, GD rooms etc</li>
    <li>Frequent mock interviews to make students industry ready.</li>
    <li>MOU with various major companies have been signed to have strong Industry-Institute Interaction.</li>
    <li>The college has imparted Soft Skills and Aptitude Training Program into the regular curriculum so that the student admitted to the college would be industry/Placement ready before he/she comes to the Final year of the course.</li>
  <li>The process of Training and Placement is handled by the Placement Cell. This Cell is organized under a Training and Placement Officer</li>
  </ul>
  </div>
  setText(newText)
}
  const[text,setText]=useState(<img src={Institute} alt="Institute" style={{width: "100vw",height:"100vh"}}/>);
    return (
        <div>
           <div className="btn-group">
        <button type="button" className="btn btn-outline-success btn-lg" onClick={handleHome}>HOME</button>
        <button type="button" className="btn btn-outline-success btn-lg" onClick={handleDeparment}>DEPARTMENT</button>
        <button type="button" className="btn btn-outline-success btn-lg" onClick={handleFacilities}>FACILITIES</button>
        <button type="button" className="btn btn-outline-success btn-lg" onClick={handleAdmission}>ADMISSION</button>
        <button type="button" className="btn btn-outline-success btn-lg" onClick={handleGallery}>GALLERY</button>
        <button type="button" className="btn btn-outline-success btn-lg" onClick={handlePlacement}>PLACEMENT</button>
       </div>
       {/* <div className="row align-items-start g-0">
   <div className="col">
   <div className="list-group"> 
  <a href="#" className="list-group-item list-group-item-action" aria-current="true" >
    COMPUTER SCIENCE
  </a>
  <a href="#" className="list-group-item list-group-item-action">INFORMATION SCIENCE</a>
  <a href="#" className="list-group-item list-group-item-action">MECHANICAL ENGINEERING</a>
  <a href="#" className="list-group-item list-group-item-action">CIVIL ENGINEERING</a>
  <a href="#" className="list-group-item list-group-item-action ">ELECTONIC AND COMMUNICATION</a>
   </div>
   </div> */}
          {/* <div style={{width: "100vw",height:"100vh"}}> */}
  {/* <img src={Stock} className="card-img" alt="University" style={{width: "100vw",height:"100vh"}}/> */}
  <div >
    <h5 style={{color:"black"}}>{text}</h5>
  </div>
</div>   
    )
}
