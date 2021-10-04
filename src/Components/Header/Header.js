/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { defaults } from "js-cookie";
import './header.scss'
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
<input type="checkbox" id="menu-toggle" checked/>
<div class="menu dflex">
  <div id="logoCSS3" class="text-center">
    <i class="fa fa-css3"></i>
  </div>
  <div class="elements-container dflex">
    <a class="element" href="#">
        <i class="fa fa-leaf"></i> Lorem ipsum
      </a>
    <a class="element" href="#">
        <i class="fa fa-money"></i> Dolor sit amet
      </a>
    <a class="element" href="#">
        <i class="fa fa-gavel"></i> Consectetur adipiscing
      </a>
    <a class="element" href="#">
        <i class="fa fa-cogs"></i> Config
      </a>
  </div>
  <div class="menu-container-btn">
    <div class="menu-toggle-btn">
      <label class="menu-btn text-center" for="menu-toggle">
          <i class="fa fa-close"></i>
          <i class="fa fa-bars"></i>
        </label>
    </div>
  </div>
</div>
 
</div> 
         
     )
}

export default Header;
