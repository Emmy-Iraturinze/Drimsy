/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */

import {Link} from 'react-router-dom'
import './Rentals'
function Rentals (){

     return(
          <div class="section1 bg-dark ">
         
            <div class="container">
            <div>
            <nav class="navbar navbar-expand-lg navbar-light nav4">
  <div class="container-fluid">
  <h1 class="navbar-brand text-white " href="#"><img src="https://api.freelogodesign.org/files/95d71dec2e024c6db036e3fb73e35817/thumb/logo_200x200.png?v=637652951930000000"/></h1>
    <button class="navbar-toggler btn-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      
      <li>   

   
  
    </li>
      <li class="nav-item me-2">
   <Link to="/" style={{textDecoration:"none" }}><a class="nav-link btn1" href="#">HOME</a></Link>
        </li>
        
      
   
     
    
        <li class="nav-item me-2">
        <Link to="/add-prop" style={{textDecoration:"none"}}> <a class="nav-link">ADD PROPERTY</a></Link>
        </li>
        <li class="nav-item me-2">
        <Link to="/status-landlord" style={{textDecoration:"none"}}> <a class="nav-link">PAYMENT STATUS</a></Link>
        </li>
     
        <li class="nav-item me-2">
<Link to="/login" class="link" style={{textDecoration:"none"}}> <a class="nav-link btn btn-primary " >LOG OUT</a></Link>
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
      <img src="https://i.ibb.co/vdtVbfZ/joe-ciciarelli-08-AJKJf75kw-unsplash.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/hC8vs1M/photo-1494203484021-3c454daf695d-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/vdtVbfZ/joe-ciciarelli-08-AJKJf75kw-unsplash.jpg" class="d-block w-100" alt="..."/>
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
               <iframe class="mt-3" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15949.877336139529!2d30.12427405!3d-1.9661770499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1629969202800!5m2!1sen!2srw" width="100%" height="" allowfullscreen="" loading="lazy"></iframe>
               <Link to="/add-tenant"><i class="fas fa-user-circle"></i></Link> <i class="fas fa-pen-square" title="Edit Property"></i>   <Link to="/tenant-details" ><i class="fas fa-info-circle" title="Tenant Details"></i></Link> <i class="far fa-trash-alt" title="Remove Property"></i>          </div>
          <div class="col-sm">
          
          </div>
</div>

<div class="row mt-5 ">
     <div class="col-sm-8">
     <div id="carouselExampleControls" class="carousel slide w-100" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.ibb.co/vdtVbfZ/joe-ciciarelli-08-AJKJf75kw-unsplash.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/vdtVbfZ/joe-ciciarelli-08-AJKJf75kw-unsplash.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/vdtVbfZ/joe-ciciarelli-08-AJKJf75kw-unsplash.jpg" class="d-block w-100" alt="..."/>
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
               <iframe class="mt-3" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15949.877336139529!2d30.12427405!3d-1.9661770499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1629969202800!5m2!1sen!2srw" width="100%" height="" allowfullscreen="" loading="lazy"></iframe>
               <Link to="/add-tenant"><i class="fas fa-user-circle"></i></Link> <i class="fas fa-pen-square" title="Edit Property"></i>   <i class="fas fa-info-circle" title="Tenant Details" ></i>  <i class="far fa-trash-alt" title="Remove Property"></i>
          </div>
          <div class="col-sm">
          
          </div>
</div>

<div class="row mt-5 ">
     <div class="col-sm-8">
     <div id="carouselExampleControls" class="carousel slide w-100" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.ibb.co/DYQb70N/neonbrand-kdwahp-WYf-Qo-unsplash.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/DYQb70N/neonbrand-kdwahp-WYf-Qo-unsplash.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/DYQb70N/neonbrand-kdwahp-WYf-Qo-unsplash.jpg" class="d-block w-100" alt="..."/>
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
               <iframe class="mt-3" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15949.877336139529!2d30.12427405!3d-1.9661770499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1629969202800!5m2!1sen!2srw" width="100%" height="" allowfullscreen="" loading="lazy"></iframe>
               <Link to="/add-tenant"><i class="fas fa-user-circle"></i></Link> <i class="fas fa-pen-square" title="Edit Property"></i>  <i class="fas fa-info-circle" title="Tenant Details"></i>  <i class="far fa-trash-alt" title="Remove Property"></i>          </div>
         
</div>

            </div>
    </div>
          
    <div id="footer">
<div  class="container">



<div class="row">
     <div class="col col1">
          <h2><img src="https://api.freelogodesign.org/files/95d71dec2e024c6db036e3fb73e35817/thumb/logo_200x200.png?v=637652951930000000" width="100px"/></h2>
          <p>A solution For  Real Estate  The solution 
               will cater for the majority real estate
                management such as property listing,
                 applicant screening and approval, 
             .</p>

     </div>
     <div class="col col2">
          <h3 class="text-white mt-5"> Contacts</h3>
          <p class="mt-4">+250782251506</p>
          <p>iraturinzeemmy@gmail.com</p>
          <p>Coldwell Banker
399 Boylston St., Suite 200
Boston, MA 02116</p>
          </div>
          <div class="col col3">
          <h3 class="text-white mt-5"> Follow us</h3>
           <li><i class="bi bi-twitter"></i></li>
      <li> <i class="bi bi-instagram"></i></li>

          
          </div>
          <div class="col col3">
          <h3 class="text-white mt-5"> Get the app</h3>
          <img src="https://i.ibb.co/b5Kf5KJ/pngwing-com.png" alt="pngwing-com" border="0" width="100%"/>
          
          </div>
</div>
<p class="text-muted text-center">Copyright <i class="far fa-copyright"></i>Drimsy</p>
</div>





</div>





            
          </div>
     );
}

export default Rentals;