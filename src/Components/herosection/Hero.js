import React from 'react'
import { Link } from 'react-router-dom';
import Myvideo from '../../images/final_614b50072c522c00a150160c_705395.mp4'
import './hero.css';
import AuthApi from '../../AuthApi';
import Cookies from 'js-cookie';
import Header from '../Header/Header'
import Switcher from '../switcher/Switcher';
import Scrollspy from './Scrollspy';
import Navbar from '../Nav/Navbar';



function Hero() {

     const Auth = React.useContext(AuthApi)
     const handleOnClick=() =>{
   
          Auth.setAuth(false);
      
           Cookies.remove("user"); 
      
        }
     return (
          <div>
            
                {/* <!-- Video Source --> */}
  {/* <!-- https://www.pexels.com/video/aerial-view-of-beautiful-resort-2169880/ --> */}
  <section class="showcase" style={{marginTop:"-1px"}}>
    <header>
      <h2 class="logo">Drimzy</h2>

 
    </header>
    <video src={Myvideo} muted="true" loop autoplay="true"></video>
    <div class="overlay"></div>
    <div className="row">
    <div className="col-12">
    <div class="text">
         
         <h2>Never Stop To </h2> 
         <h3>Exploring The World</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat.</p>
       
         <a href="#" class="mb-2">Explore</a>
       </div>
      </div>
      <div className="col text-center bg-trasnparent " >
        <Scrollspy/>
      </div>
    </div>

    <ul class="social">
   
    <li class="text-white" title="Pay Rent"><Link to="/rental-pay"><img src="https://cdn-icons-png.flaticon.com/128/1019/1019709.png"/></Link></li>
    <li class="text-white" title="Rentals"><Link to="/rentals2"><img src="https://cdn-icons.flaticon.com/png/128/738/premium/738822.png?token=exp=1634457512~hmac=145ddcd4a0e21361a6e7f3f9eb006ee7"/></Link></li>
    <li class="text-white" title="Add a property"><Link to="/prop"><img src="https://cdn-icons-png.flaticon.com/128/1089/1089346.png"/></Link></li>
    <li class="text-white" title="check Payment status"><Link to="/status-tenant"><img src="https://cdn-icons-png.flaticon.com/128/1611/1611154.png"/></Link></li> 
    <li class="text-white" title="Subscribe"data-bs-toggle="modal" data-bs-target="#exampleModal"><Link  to="/dashboard"><img src="https://cdn-icons.flaticon.com/png/128/3954/premium/3954567.png?token=exp=1634457560~hmac=5863d7174458aaa9ad5f0909c0734d80"></img></Link></li>
    <li class="menu-nav-item">  
      <div class="d-flex flex-column sim"> 
              <li class="nav-item "  style={{listStyle:"none"}}>
        <h5 class="btn btn-outline-secondary p-2 border-2 fw-bolder text-white " onClick={handleOnClick}>
      LOG OUT <i class="bi bi-arrow-return-right "></i>
         </h5>
      
         <span></span>
        </li> 
        </div> 
        </li>
       </ul>
  </section>


 
          </div>
     )
}

export default Hero
