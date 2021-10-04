import React from 'react'

import Myvideo from '../../images/final_614b50072c522c00a150160c_705395.mp4'
import './hero.css';
import Header from '../Header/Header'
import Switcher from '../switcher/Switcher';
function Hero() {
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
      <a href="#">Explore</a>
    </div>
    <ul class="social">
      <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
      <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a></li>
      <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png"/></a></li>
    </ul>
  </section>


 
          </div>
     )
}

export default Hero
