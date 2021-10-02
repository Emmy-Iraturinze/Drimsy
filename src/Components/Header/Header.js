/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { defaults } from "js-cookie";

import AuthApi from '../../AuthApi';
import Cookies from 'js-cookie';
import myVideo from '../../images/final_614b50072c522c00a150160c_705395.mp4'
import '../Dashboard/dash.scss'

const Header = () => {
  const Auth = React.useContext(AuthApi)
   
  const handleOnClick=() =>{

    Auth.setAuth(false);

     Cookies.remove("user"); 

  }
     return (
          <div>
               {/* <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://api.freelogodesign.org/files/95d71dec2e024c6db036e3fb73e35817/thumb/logo_200x200.png?v=637652951930000000"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
<Link to="/dashboard"><a class="nav-link active" aria-current="page" style={{marginLeft:"400px",borderBottom:"none",textDecoration:"none"}}>Home</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/pay-rent" style={{textDecoration:"none"}}><a class="nav-link" href="#">Pay Rent</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
   
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
 
    </div>
  </div>
</nav> */}
 <input type="checkbox" id="burger-toggle" className="text-white" style={{color:"white",position:"absolute"}}/>
<label for="burger-toggle" class="burger-menu text-white">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</label>
<div class="menu" style={{zIndex:"1"}}>
  <div class="menu-inner">
    <ul class="menu-nav">
   
      <li class="menu-nav-item"><Link to="/dashboard"><a class="menu-nav-link" href="#"><span>
            <div className="text-white"><span class="me-5" >HOME</span></div>
          </span></a></Link></li>
          <li class="menu-nav-item"><a class="menu-nav-link" aria-current="page"data-bs-toggle="modal" data-bs-target="#exampleModal"  href="#"><span>
            <div className="text-white"><span class="me-5"  >SUBSCRIBE</span></div>
          </span></a></li>
          <li class="menu-nav-item"><Link to="/rentals"><a class="menu-nav-link"  href="#"><span >
            <div className="text-white" ><span  class="me-5" >RENTALS</span></div>
          </span></a></Link></li>
   
          <li class="menu-nav-item me-2" ><Link to="/rental-pay"><a class="menu-nav-link" href="#"><span>
            <div className="text-white"><span class="me-5"  >PAY</span></div>
          </span></a></Link></li>
          <li class="menu-nav-item"><Link to="/add-prop"><a class="menu-nav-link" href="#"><span>
            <div className="text-white"><span  class="me-5" >PROPERTY</span></div>
          </span></a></Link></li>
          <li class="menu-nav-item">    <div class="d-flex flex-column sim">   <li class="nav-item "  style={{listStyle:"none"}}>
        <button class="btn  text-white me-2 " onClick={handleOnClick}>
      LOG OUT
         </button>
      
         <span></span>
        </li> </div></li>
     
      
    </ul>

  </div>
</div> 
          </div>
     )
}

export default Header;