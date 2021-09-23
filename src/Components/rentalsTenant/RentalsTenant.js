/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{ Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

import './rentalsTenant.css'




class RentalsTenant  extends Component {
  constructor(){
  super();
  this.state={
    data:false,
  }
  }
  
  state={};
  
  componentDidMount(){
  
  let url ="https://endpoint.drimsy.com/properties/";
  fetch(url,{
  method:'GET',
  headers:{
    'Accept':'application/json',
    'content-type':'application/json',
  }
  
  
  }).then((result)=>{
    result.json().then((resp)=>{
  
  
  this.setState({property:resp})
      
    })
  })
  
  const config = {
    headers:{
      Authorization:'Bearer' + localStorage.getItem('id')
    }
  };
  
  axios.get('user',config).then(
  
    res =>{
  
      this.setState({
  
        user:res.data
  
      });
  
    },
  
    err => {
      console.log(err)
    }
  )
  
  }
  
  
  
    render(){
  
  if(this.state.user){
  
  return( 
  <h2>Good Afternoon {this.state.user.first_name} {this.state.user.Last_name}</h2>
  
  )
  
  }
  
      const properties=this.state.property;
  console.warn(properties);
  
      return <div>
  
  {
    properties?
  
  
  <div>
   <div class="section1 bg-dark" >
         
         <div class="container">
         <div>
         <nav class="navbar navbar-expand-lg navbar-light justify-content-end   ">
  <div class="container-fluid">
    <a class="navbar-brand mt-2" href="#"><img src="https://api.freelogodesign.org/files/95d71dec2e024c6db036e3fb73e35817/thumb/logo_200x200.png?v=637652951930000000"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/dashboard" style={{textDecoration:"none",marginLeft:"320px"}}>  <a class="nav-link active text-dark" aria-current="page"style={{textDecoration:"none"}}>HOME</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page"data-bs-toggle="modal" data-bs-target="#exampleModal">SUBSCRIBE</a>
        </li>
        <li class="nav-item">
       <Link to="/rentals" style={{textDecoration:"none"}}><a class="nav-link " aria-current="page" href="#">MY RENTALS</a></Link>
        </li>
        <li class="nav-item">
         <Link to="/rental-pay" style={{textDecoration:"none"}}> <a class="nav-link " aria-current="page" href="#">PAY RENT</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">PAYMENT STATUS</a><Link to="/status-tenant" style={{textDecoration:"none"}}></Link>
        </li>
        <li className="nav-item me-2">
<Link to="/login" className="link"style={{textDecoration:"none"}}> <a className="nav-link btn btn-primary me-5 " >Login/Register</a></Link>
        </li>
  
      </ul>

    </div>
  </div>
</nav>
         </div>
 <div id="section1" class="container">
 <div class="row ">
  <div class="col-sm-8">
  <div id="carouselExampleControls" class="carousel slide w-100" data-bs-ride="carousel">
<div class="carousel-inner">
 <div class="carousel-item active">
   <img src={properties[1].thumbnail} class="d-block w-100" alt="..."/>
 </div>
 <div class="carousel-item">
   <img src={properties[1].thumbnail} class="d-block w-100" alt="..."/>
 </div>
 <div class="carousel-item">
   <img src={properties[1].thumbnail} class="d-block w-100" alt="..."/>
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
  </div>
  <div class="col-sm-4">
       <h2 class="text-white">House 1</h2><br/>
       
       <p class="text-secondary">This exceptional residence is one of only 
         four homes in this magnificent double 
 
            square feet of single-level living on 
            the 3rd floor of this boutique building</p>
            <p ><i class="fas fa-bed text-white me-2"></i>Bedrooms</p>
            <p> <i class="fas fa-bath me-2"></i>Bathrooms</p>
            <h5 class="text-white"><i class="fas fa-dollar-sign me-2 text-white"></i>Rwf 100,000</h5>
            <iframe class="mt-3" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15949.877336139529!2d30.12427405!3d-1.9661770499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1629969202800!5m2!1sen!2srw" width="100%" height="36%" allowfullscreen="" loading="lazy"></iframe>
          <a class="btn text-white"style={{backgroundColor:"#ED4C5C"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request</a>      </div>
       <div class="col-sm">
       
       </div>
</div>

<div class="row mt-5 ">
  <div class="col-sm-8">
  <div id="carouselExampleControls" class="carousel slide w-100" data-bs-ride="carousel">
<div class="carousel-inner">
 <div class="carousel-item active">
   <img src={properties[1].thumbnail} class="d-block w-100"  alt="..."/>
 </div>
 <div class="carousel-item">
   <img src={properties[1].thumbnail} class="d-block w-100" alt="..."/>
 </div>
 <div class="carousel-item">
   <img src={properties[1].thumbnail} class="d-block w-100" alt="..."/>
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
  </div>
  <div class="col-sm-4">
       <h2 class="text-white">House 1</h2><br/>
       
       <p class="text-secondary">This exceptional residence is one of only four homes in this magnificent double 
 
            square feet of single-level living on the 3rd floor of this boutique building</p>
            <p><i class="fas fa-bed text-white me-2"></i>Bedrooms</p>
            <p> <i class="fas fa-bath me-2"></i>Bathrooms</p>
            <p class="text-white"><i class="fas fa-dollar-sign me-2 text-white"></i>Rwf 100,000</p>
            <iframe class="mt-3" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15949.877336139529!2d30.12427405!3d-1.9661770499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1629969202800!5m2!1sen!2srw" width="100%" height="36%"allowfullscreen="" loading="lazy"></iframe>
            <a class="btn text-white"style={{backgroundColor:"#ED4C5C"}}data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request</a>    
       </div>
       <div class="col-sm">
       
       </div>
</div>

<div class="row mt-5 ">
  <div class="col-sm-8">
  <div id="carouselExampleControls" class="carousel slide w-100" data-bs-ride="carousel">
<div class="carousel-inner">
 <div class="carousel-item active">
   <img src={properties[1].thumbnail} class="d-block w-100" alt="..."/>
 </div>
 <div class="carousel-item">
   <img src={properties[1].thumbnail}class="d-block w-100" alt="..."/>
 </div>
 <div class="carousel-item">
   <img src={properties[1].thumbnail} class="d-block w-100" alt="..."/>
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
  </div>
  <div class="col-sm-4">
       <h2 class="text-white">House 1</h2><br/>
       
       <p class="text-secondary">This exceptional residence is one of only four homes in this magnificent double 
 
            square feet of single-level living on the 3rd floor of this boutique building</p>
            <p><i class="fas fa-bed text-white me-2"></i>Bedrooms</p>
            <p> <i class="fas fa-bath me-2"></i>Bathrooms</p>
            <p class="text-white"><i class="fas fa-dollar-sign me-2 text-white"></i>Rwf 100,000</p>
            <iframe class="mt-3" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15949.877336139529!2d30.12427405!3d-1.9661770499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1629969202800!5m2!1sen!2srw" width="100%" height="36%" allowfullscreen="" loading="lazy"></iframe>
            <a class="btn text-white"style={{backgroundColor:"#ED4C5C"}}data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request</a>         </div>
      
</div>

         </div>
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




         
       </div>
 
  
  </div>
  
  
  : <h1 className="text-danger text-center  loading-text">Please wait..</h1>
  
  
  }
  
  
      </div>
    }
  
  }
  
  export default RentalsTenant;
  
  
  