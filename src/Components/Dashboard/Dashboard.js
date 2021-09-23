/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { defaults } from "js-cookie";
import React ,{ Component } from "react";
import AuthApi from '../../AuthApi';
import Cookies from 'js-cookie';

import {Link} from 'react-router-dom'
import './Dashboard.css'



const Dashboard = () =>{

     const Auth = React.useContext(AuthApi)
   
     const handleOnClick=() =>{
   
       Auth.setAuth(false);
   
        Cookies.remove("user"); 
   
     }
   
     return(
       <div class="bg-dark">
                    <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://api.freelogodesign.org/files/95d71dec2e024c6db036e3fb73e35817/thumb/logo_200x200.png?v=637652951930000000"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" style={{marginLeft:"420px",borderBottom:"none"}} href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"aria-current="page"data-bs-toggle="modal" data-bs-target="#exampleModal">SUBSCRIBE</a>
        </li>
        <li class="nav-item ">
      <Link to="/rentals" style={{textDecoration:"none"}}>
      <a class="nav-link" href="#">MY RENTALS</a>
        </Link>
        </li>
   
        <li class="nav-item">
         <Link to="/rental-pay" style={{textDecoration:"none"}}> <a class="nav-link  me-5" aria-current="page">PAY RENT</a></Link>
        </li>
        <li class="nav-item mt-4" >
        <button class="btn btn-outline-light" onClick={handleOnClick}>
         Logout
         </button>
        </li>
      </ul>
 
    </div>
  </div>
</nav>
    
         <div className="section1 ">
                  <div className="container text-center">
                 
   
   
                  </div>
       {/*modal rent-payment*/} 
   
   
   
   {/*modal2 subscription form*/}
   
   
   
   
   
   
   <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div className="modal-dialog">
       <div className="modal-content">
         <div className="modal-header">
           <h1 className="modal-title text-white " id="exampleModalLabel"><img src="https://img.icons8.com/color/48/000000/crown.png"/>Subscription</h1>
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
   
     {/*video-background*/}  
   
   <div className="video-wrapper">
   <div id="section2-from" className="container">
   <div className="Ad-pop">
 
   <div class="container">
    <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-12">
        <h2 className="text-white text-center  display-1 mb-3"><span>D</span>rimsy A solution For  Real Estate <small>.</small></h2>
            <div class="form "> <i class="fa fa-search"></i> <input type="text" class="form-control form-input" placeholder="Search anything..."/> <span class="left-pan"><i class="fa fa-microphone"></i></span> </div>
        </div>
    </div>
</div>
        </div>

   </div>
   
   
   </div>
   
   <video autoplay="autoplay"muted loop>
          <source src="https://cdn.kapwing.com/final_614b50072c522c00a150160c_705395.mp4"/>
     
     </video>

    
   </div>
   
   {/*modal*/}
   
   
   
   <div className="modal modal2 fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
     <div className="modal-dialog modal-dialog2">
       <div className="modal-content modal-content2">
      
         <div className="modal-body">
      <h4>Landlord Phone Number <br/><br/></h4> 
      <i className="bi bi-telephone-fill"></i> +250782251506
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
         </div>
       </div>
     </div>
   </div>
   
   
   {/*rental */}
   
   
   <div id="featured" className="container">
        <h3 className="text-white mb-4 mt-5">Featured<br/> Property</h3>
        <p className="text-muted mb-4">Find the latest homes for sale, <br/>property news & real estate market data</p>
     <div className="row">
          <div className="col-md">
          <div className="card">
          <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
           <div className="card-body">
       <h6 className="card-title"><i className="fas fa-map-marker-alt text-primary me-2"></i>Kicukiro,Kigali</h6>
       <p className="text-muted">This exceptional residence is one of only four homes in this magnificent double townhouse on
             the second block of Commonwealth Avenue.  The elevator, shared with only three other families, 
             opens directly into approximately 
            3,000 square feet of single-level living on the 3rd floor of this boutique building</p>
       <p className="card-text text-muted">2 bed room</p>
       <p className="card-text text-muted"> 2 Living room</p>    
       <a href="#" className="btn text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request</a>
     </div>
   </div>
          </div>
          <div className="col-md">
          <div className="card" >
     <img src=" https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title"><i className="fas fa-map-marker-alt text-primary me-2"></i>Kibagabaga,Kigali</h5>
       <p className="text-muted">This exceptional residence is one of only four homes in this magnificent double townhouse on
             the second block of Commonwealth Avenue.  The elevator, shared with only three other families, 
             opens directly into approximately 
            3,000 square feet of single-level living on the 3rd floor of this boutique building</p>
       <p className="card-text text-muted">2 bed room</p>
       <p className="card-text text-muted"> 2 Living room</p>
       <a href="#" className="btn btn-primary"data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request</a>
     </div>
   </div>
               </div>
               <div className="col-md">
               <div className="card" >
     <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title"><i className="fas fa-map-marker-alt text-primary me-2"></i>Kimironko, Kigali</h5>
       <p className="text-muted">This exceptional residence is one of only four homes in this magnificent double townhouse on
             the second block of Commonwealth Avenue.  The elevator, shared with only three other families, 
             opens directly into approximately 
            3,000 square feet of single-level living on the 3rd floor of this boutique building</p>
       <p className="card-text text-muted">2 bed room</p>
       <p className="card-text text-muted"> 2 Living room</p>
       <a href="#" className="btn btn-primary"data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request</a>
     </div>
   </div>
               </div>
     </div>
     
   
   </div>
   
   <div id="rentals" className="container">
        <h2 className="text-white mb-5 mt-5">Rentals</h2>
        <p className="text-muted mb-4">Find the latest homes for sale, <br/>property news & real estate market data</p>
   
        <div className="row">
             <div className="col-sm">
             <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active" data-bs-interval="10000">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
           <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>5.7</p>
         </div>
       </div>
       <div className="carousel-item" data-bs-interval="2000">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>3.4</p>
           <a href="#" className="btn btn-outline-secondary text-white"><p>View details</p></a>
         </div>
       </div>
       <div className="carousel-item">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>4.5</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
   </div>
             </div>
             <div className="col-sm">
             <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active" data-bs-interval="10000">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
           <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>4.7</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
       <div className="carousel-item" data-bs-interval="2000">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>4.5</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
       <div className="carousel-item">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>5</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
   </div>
         
                  </div>
                  
        </div>
        <div className="row">
             <div className="col-sm">
             <div className="col-sm">
             <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active" data-bs-interval="10000">
         <img src="https://i.ibb.co/GFs3kqv/cropped.jpg" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
           <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>5.7</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
       <div className="carousel-item" data-bs-interval="2000">
         <img src="https://i.ibb.co/GFs3kqv/cropped.jpg" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>3.4</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
       <div className="carousel-item">
         <img src="https://i.ibb.co/GFs3kqv/cropped.jpg" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>4.5</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
   </div>
             </div>
             </div>
             <div className="col-sm">
             <div className="col-sm">
             <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active" data-bs-interval="10000">
         <img src="https://i.ibb.co/GFs3kqv/cropped.jpg" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
           <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>5.7</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
       <div className="carousel-item" data-bs-interval="2000">
         <img src="https://i.ibb.co/GFs3kqv/cropped.jpg" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>3.4</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
       <div className="carousel-item">
         <img src="https://i.ibb.co/GFs3kqv/cropped.jpg" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>4.5</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
   </div>
             </div>
                  </div>
                  
        </div>
        <div className="row">
             <div className="col-sm">
             <div className="col-sm">
             <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active" data-bs-interval="10000">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
           <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>5.7</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
       <div className="carousel-item" data-bs-interval="2000">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>3.4</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
       <div className="carousel-item">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>4.5</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
   </div>
             </div>
             </div>
             <div className="col-sm">
             <div className="col-sm">
             <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active" data-bs-interval="10000">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
           <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>5.7</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
       <div className="carousel-item" data-bs-interval="2000">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>3.4</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
       <div className="carousel-item">
         <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
         <div className="carousel-caption d-none d-md-block">
         <h5>Nyamirambo, Kigali</h5>
           <p>Rwf 100,000</p>
           <p><i className="bi bi-star-fill"></i>4.5</p>
           <a href="#" className="btn btn-outline-secondary text-white">View details</a>
         </div>
       </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
   </div>
             </div>
                  </div>
                <Link to="/rentals2">  <p className="text-white btn mt-3"><i className="bi bi-three-dots-vertical text-white"></i>View more</p></Link>
        </div>
   </div>
   <div id="location" className="container mt-5">
<div class="row">
  <div class="col-sm-6">
  <img src="https://i.pinimg.com/originals/9d/bd/43/9dbd43cd2dd5a91e7983f6605fd2fe03.gif"/>
  </div>
  <div class="col">
  <h2 className="text-white text-center display-1" style={{fontWeight:"900",backgroundColor:"#000",borderRadius:"5px"}}>Let us find you a house of your Dream</h2>
</div>
</div>
   </div>
   <div id="devices" className="container">
   
   <div className="row mt-5">
        <div className="col">
   <h1 className="text-white">Available On<br/> Every Device</h1>
   <p className="text-muted">Search properties on mobile,<br/>
    tablet, or desktop</p>
    <a className="btn btn-primary text-white">Contact Us</a>
        </div>
        <div className="col">
   
   
       
   <img src="https://i.ibb.co/BGsnHzm/Screenshot-from-2021-08-24-14-04-15.png" alt="Screenshot-from-2021-08-24-14-04-15" border="0"/>
             
             </div>
   </div>
   
   </div>

   </div>
   
    
     )
   }

   export default Dashboard;