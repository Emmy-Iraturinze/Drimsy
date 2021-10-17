import React from 'react'
import { Link } from 'react-router-dom';
import Myvideo from '../../images/final_614b50072c522c00a150160c_705395.mp4'
import '../herosection/hero.css'
import AuthApi from '../../AuthApi';
import Cookies from 'js-cookie';
import Header from '../Header/Header'
import Switcher from '../switcher/Switcher';



function Pubhero() {

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
   <Switcher/>
 
    </header>
    <video src={Myvideo} muted="true" loop autoplay="true"></video>
    <div class="overlay"></div>

    <div class="text">
         
      <h2>Never Stop To </h2> 
      <h3>Exploring The World</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</p>
      <Link to="/SignIn">LOGIN</Link>
    </div>
    <ul class="social">
   
    {/* <li class="text-white" title="Pay Rent"><Link to="/rental-pay"><img src="https://img-premium.flaticon.com/png/128/1052/premium/1052896.png?token=exp=1633357216~hmac=c5fe2c8fe61c6205e49ce69d9841e3cd"/></Link></li> */}
    {/* <li class="text-white" title="Rentals"><Link to="/rentals2"><img src="https://img-premium.flaticon.com/png/128/1018/premium/1018573.png?token=exp=1633357314~hmac=ab876804d0a7d9c785e2d20902e64a2c"/></Link></li> */}
    {/* <li class="text-white" title="Add a property"><Link to="/prop"><img src="https://cdn-icons-png.flaticon.com/128/1089/1089346.png"/></Link></li> */}
    {/* <li class="text-white" title="check Payment status"><Link to="/status-tenant"><img src="https://cdn-icons-png.flaticon.com/128/1611/1611154.png"/></Link></li>  */}
    {/* <li class="text-white" title="Subscribe"data-bs-toggle="modal" data-bs-target="#exampleModal"><Link  to="/dashboard"><img src="https://cdn-icons-png.flaticon.com/512/4830/4830941.png"/></Link></li> */}
    <li class="menu-nav-item">  
      {/* <div class="d-flex flex-column sim">
              <li class="nav-item "  style={{listStyle:"none"}}>
        <button class="btn  text-white me-2 " onClick={handleOnClick}>
      LOG OUT
         </button>
      
         <span></span>
        </li> 
        </div> */}
        </li>
       </ul>
  </section>


 
          </div>
     )
}

export default Pubhero
