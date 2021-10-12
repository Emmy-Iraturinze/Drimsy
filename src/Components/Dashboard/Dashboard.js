/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { defaults } from "js-cookie";
import React ,{ Component } from "react";
import AuthApi from '../../AuthApi';
import Cookies from 'js-cookie';
import Navbar from '../Nav/Navbar'
import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react';
import './Dashboard.css'
import './dash.scss'
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import Switcher from "../switcher/Switcher";
import Submenu from "../submenu/Submenu";
import Dashboardapi from "../DashboardApi/Dashboardapi";
import Glass from "../glassmorphism/Glass";
import Search from "./searchbar/Searchbox";
import Hero from "../herosection/Hero";







const Dashboard = () =>{

    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://authify-ms.romalice.com/user`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])
     const Auth = React.useContext(AuthApi)
   
     const handleOnClick=() =>{
   
       Auth.setAuth(false);
   
        Cookies.remove("user"); 
   
     }
     const [APIData, setAPIData] = useState([])
     const [searchTerm, setSearchTerm] = useState('');
     const [filteredResults, setFilteredResults] = useState([]);
     useEffect(() => {
         axios.get(`https://endpoint.drimsy.com/properties`)
             .then((response) => {
                 setAPIData(response.data);
             })
     }, [])
     useEffect(() => {
      axios.get(`https://endpoint.drimsy.com/user`)
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])
 
     const searchData = (value) => {
         setSearchTerm(value)
         if (searchTerm !== '') {
             const filteredData = APIData.filter((property) => {
                 return Object.values(property).join('').toLowerCase().includes(searchTerm.toLowerCase())
             })
             setFilteredResults(filteredData)
         }
         else {
             setFilteredResults(APIData)
         }
     }
   
     return(
       <div class="">
  <Hero/>




    
         <div className="section1 ">
           
           
       {/*modal rent-payment*/} 
   
   
   
   {/*modal2 subscription form*/}
   
   
   
   
   
   
   <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div className="modal-dialog">
       <div className="modal-content">
         <div className="modal-header">
           <h2 className="modal-title text-white text-center fw-bolder " id="exampleModalLabel"><img src="https://img.icons8.com/color/48/000000/crown.png"/>Subscription</h2>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div className="modal-body text-center">
       <h4 className="text-white text-center mt-5">RWf 5000/mo</h4>
       <small className="text-center">Billed monthly for Rwf 5000</small><br/><br/><br/>
       <button type="submit" className="btn btn-light w-50 text-secondary mb-5">Pay Now</button>
       
         </div>
         <div>
        
         </div>
             <div className="footer text-center">
             <p className="mb-2 text-white mt-1">Method of Payment:</p>
              <img src="https://i.ibb.co/zZZsqKb/Screenshot-from-2021-08-25-13-33-12.png" className="method-of-payment-img mt-2 mb-5"/>
             </div>
           
   
       </div>
     </div>
   </div>
   
    {/*image  hero background  */}
  
  
   <div className="">
   <div class="big-image">
       
  
  <div class="overlay">

    <div className="row">
      <div className="col-12 container" >
      {/* <h1 class="text-white fw-bolder text-center  display-5 mt-5"  style={{fontWeight:"900!important"}}>Exclusive pool. Ground coffee. Coffee pods.</h1> */}
           {/* <div className="row " style={{marginLeft:"100px"}}>
<p className="text-muted" style={{fontWeight:"lighter!important"}}>Studies show that productivity rises by 60% after drinking coffee.</p>
               <div className="col">
               <button class="btn text-white mt-3 border-3 radius-0"  style={{backgroundColor:"rgb(214, 22, 30)"}}>CHECK SOME</button>
               </div>
               <div className="col">
               <button class="btn text-white mt-3 btn-outline-light border-3 ">GET STARTED</button>
               
               </div>
           </div> */}
     
      {/* <div class="search-box align-item-center mt-4">
    <button class="btn-search"><i class="fas fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..."onChange={(e) => searchData(e.target.value)}/>
  </div> */}
{/* 
<div class="glass-panel">
  <h1 className="mb-5">Drimsy    </h1>

  <div class="glass-toolbar text-center">
    <button class="glass-button">Find More</button>
    <a  target="_blank" class="glass-button">Enjoy More</a>
  </div>
</div> */}
      </div>


    </div>
    {/* <Submenu/> */}
  </div>
</div>






   </div>


 
    
   </div>
   
   {/*modal*/}
   

   {/* landlord number modal */}
   <div className="modal modal2 fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog2">
    <div className="modal-content modal-content2">
   
      <div className="modal-body">
   <h4 className="text-dark">Landlord Phone Number <br/><br/></h4> 
   <i className="bi bi-telephone-fill text-dark">+250782251506</i>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    
      </div>
    </div>
  </div>
</div>

   
   {/*rental */}
   


     <div className="container">

  
     <div className="row">
     <h3 className="text-white mb-4 mt-5">Featured<br/> Property</h3>
        <p className="text-muted mb-4">Find the latest homes for sale, <br/>property news & real estate market data</p>
        <div class="row">
        <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="pic-1" src="https://images.unsplash.com/photo-1600573472556-e636c2acda88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
                </a>
                <span class="product-sale-label">Sale</span>
                <ul class="product-links">
                    <li><a href="#"><i class="far fa-heart"></i></a></li>
                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li>
                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                </ul>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">	Greenacres</a></h3>
               
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="far fa-star"></li>
                    <li class="far fa-star"></li>
                </ul>
                <div class="price">
                <p class="text-dark">1<img class="me-2" src="https://cdn-icons-png.flaticon.com/128/259/259973.png" width="20"/></p>
                <p class="text-dark">3<img class="me-2" src="https://cdn-icons-png.flaticon.com/128/3030/3030336.png" width="20"/></p>
                  <span>$93.10</span> $73.10
                  </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="pic-1" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                </a>
                <span class="product-sale-label">Sale</span>
                <ul class="product-links">
                    <li><a href="#"><i class="far fa-heart"></i></a></li>
                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li>
                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                </ul>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">	The Old School</a></h3>
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="far fa-star"></li>
                    <li class="far fa-star"></li>
                </ul>
                <div class="price">
                <p class="text-dark">1<img class="me-2" src="https://cdn-icons-png.flaticon.com/128/259/259973.png" width="20"/></p>
                <p class="text-dark">3<img class="me-2" src="https://cdn-icons-png.flaticon.com/128/3030/3030336.png" width="20"/></p>
                  <span>$93.10</span> $73.10
                  </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="pic-1" src="https://images.unsplash.com/photo-1604709177595-ee9c2580e9a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                </a>
                <span class="product-sale-label">Sale</span>
                <ul class="product-links">
                    <li><a href="#"><i class="far fa-heart"></i></a></li>
                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li>
                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                </ul>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">White Cottage</a></h3>
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="far fa-star"></li>
                    <li class="far fa-star"></li>
                </ul>
                <div class="price">
                <p class="text-dark">1<img class="me-2" src="https://cdn-icons-png.flaticon.com/128/259/259973.png" width="20"/></p>
                <p class="text-dark">3<img class="me-2" src="https://cdn-icons-png.flaticon.com/128/3030/3030336.png" width="20"/></p>
                  <span>$93.10</span> $73.10
                  </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="pic-1" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                </a>
                <ul class="product-links">
                    <li><a href="#"><i class="far fa-heart"></i></a></li>
                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li>
                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                </ul>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">	Greenacres</a></h3>
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                </ul>
                <div class="price">
                <p class="text-dark">1<img class="me-2" src="https://cdn-icons-png.flaticon.com/128/259/259973.png" width="20"/></p>
                <p class="text-dark">3<img class="me-2" src="https://cdn-icons-png.flaticon.com/128/3030/3030336.png" width="20"/></p>
                  <span>$93.10</span> $73.10
                  </div>
            </div>
        </div>
    </div>
</div>




     
   
   </div>
     </div>
   


   
   <div id="rentals" className="container">
        <h2 className="text-white mb-5 mt-5">Rentals</h2>
        <p className="text-muted mb-4">Find the latest homes for sale, <br/>property news & real estate market data</p>
        <Dashboardapi/>
      
   
   </div>


   <Footer/>
   </div>
   
    
     )
   }

   export default Dashboard;