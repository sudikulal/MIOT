import React from 'react';
import Logo from '../Assets/Logo.png'
export default function Navbar1() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <img src={Logo} className="img-thumbnail" alt="Logo"  width="100" height="50"></img>
      <h3 className="text-center" style={{color:"purple"}}>MANGLORE INSTITUTION OF TECHNOLOGY<br/><h5>Kottara Chowki,
Mangaluru, 575006</h5></h3>
      <img src={Logo} className="img-thumbnail" alt="Logo"  width="100" height="50"></img>
       </div> 
      
    </nav>
    )
}
