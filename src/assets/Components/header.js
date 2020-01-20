import React from 'react';
import logo from '../images/logo.png'; 
import imgHeader from '../images/headerPic.png'
import Navbar from '../Components/navbar'


console.log(logo); 

function Header() {
  // Import result is the URL of your image
  return (
      <div >
          
           <img src={imgHeader} alt="Logo"  />
           <img src={logo} alt="Logo" className="Logo-a" />

           <Navbar/>

      </div>
   
  );
}
export default Header;