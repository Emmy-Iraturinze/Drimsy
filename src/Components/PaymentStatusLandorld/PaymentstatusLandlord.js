/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom';

function PaymentstatusLandlord(){
     return(

          <div class="container-fluid">

<div class="container">
   
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
   <Link to="/" style={{textDecoration:"none",marginLeft:"610px" }}><a class=" nav-link" id="btn1">HOME</a></Link>
        </li>
        
      
   
        <li class="nav-item me-2">
        <a class="nav-link" href="#"data-bs-toggle="modal" data-bs-target="#exampleModal">SUBSCRIBE</a>
        </li>
    
    
        <li class="nav-item me-2 active">
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
<div style={{marginTop:"200px"}} class="container">
<div class="row">
     <div class="col-12 ">
     <div class="card" >
  <div class="card-body">
    <div >
    <h1 class="card-title display-3 mt-2 text-center"style={{fontWeight:"600"}}>Good Morning  Emmy</h1>
    </div>
  
    <h3 class="mt-4 mb-2 text-center"style={{fontWeight:"600"}}>Rental Payment Status</h3>
   

  <div class=" row ">
  
  <div class="col-2  mt-5" style={{marginLeft:"320px"}}>
 
    <input type="date" class="form-control" name="date1"  />
  </div>
  <div class="col-2 mt-5">

  <input type="date" class="form-control"  />
    
  </div>
  <div class="col-auto mt-5">
 
    <button type="button" class="btn btn-primary">Go </button>
    

  
</div>
 


    </div>

  <div class="row">
       <div class="col text-center">
       <div id="card1" class="card border-0 bg-dark " style={{width:"100%"}}>  
       <div class="header text-white"><i class="bi bi-cash display-5 "></i></div> 
  <div class="card-body rounded">
    <h5 class="card-title text-white mb-4 text-center">Total Paid</h5>
<h5 class="text-success display-4 text-center"style={{fontWeight:"600"}}>Rwf 500K</h5>
  </div>
</div>
       </div>
       <div class="col text-center">
       <div id="card2" class="card border-0 bg-danger" style={{width:"100%"}}> 
       <div class="header text-white"><i class="bi bi-stopwatch display-5 text-white"></i></div>   
  <div class="card-body rounded">
    <h5 class="card-title text-white mb-4 text-center">Remaining</h5>
<h5 class="text-white display-4 text-center" style={{fontWeight:"600"}}>Rwf 100K</h5>
  </div>
</div>
       </div>
       <div class="col text-center">
      
       <div id="card2" class="card border-0 bg-dark" style={{width:"100%"}}> 
       <div class="header text-white"><i class="bi bi-percent display-5 text-white"></i></div>   
  <div class="card-body rounded">
    <h5 class="card-title text-white mb-4 text-center">Remaining</h5>
<h5 class="text-success display-4 text-center"style={{fontWeight:"600"}}>30%</h5>
  </div>

</div>
    
       </div>
  </div>

   

    
   
  </div>
</div>
     </div>
</div>
<div class="container-fluid " >
  <h5 class="text-white">Current Month, January</h5>
<div class="row">
  <div class="col">
  <div class="card">
  <div class="card-body">
  <li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>
  <h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Kicukiro Apartement <i class="bi bi-tag"></i>150k</h5>
  <p class="text-white btn btn-success mt-3">Paid: 100k</p><br/>

  <p class="text-white btn btn-danger">Pending: -50k</p><br/>
  <small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
  </li>
   

  </div>
</div>
  </div>
  <div class="col">
  <div class="card">
  <div class="card-body">
  <li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>  <h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Comfy Apartement  <i class="bi bi-tag"></i>150k</h5> <img src="https://i.ibb.co/yP5M6hz/CITYPNG-COM-Circular-Red-Paid-Stamp-Business-Icon-1773x1845.png" 
alt="CITYPNG-COM-Circular-Red-Paid-Stamp-Business-Icon-1773x1845" border="0" width="43%" style={{position:"relative",marginLeft:"55px"}}/><br/>

<small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
</li>
   

  </div>
</div>
  </div>
  <div class="col">
  <div class="card">
  <div class="card-body">
  <li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>
  <h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Kicukiro Apartement <i class="bi bi-tag"></i>150k</h5>
  <p class="text-white btn btn-success mt-3">Paid: 100k</p><br/>

  <p class="text-white btn btn-danger">Pending: -50k</p><br/>
  <small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
  </li>

  </div>
</div>
  </div>



  
</div>
</div>

<div class="container mb-5 " >
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Last Months<i class="fas fa-chevron-circle-down"></i></a>

</p>


</div>
<div class="container collapse multi-collapse" id="multiCollapseExample1">
<div class="row">
  <div class="col">
  <div class="card" >
  <div class="card-body">
  <h6 class="card-title display-5">January </h6>
  <ul class="list-group">

      <div class="col">
      <li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>  <h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Comfy Apartement  <i class="bi bi-tag"></i>150k</h5> <img src="https://i.ibb.co/yP5M6hz/CITYPNG-COM-Circular-Red-Paid-Stamp-Business-Icon-1773x1845.png" 
      alt="CITYPNG-COM-Circular-Red-Paid-Stamp-Business-Icon-1773x1845" border="0" width="30%" style={{position:"relative",marginLeft:"55px"}}/><br/>

  <small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
  </li>
      </div>
   

 
      <li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>
  <h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Kicukiro Apartement <i class="bi bi-tag"></i>150k</h5>
  <p class="text-white btn btn-success mt-3">Paid: 100k</p><br/>

  <p class="text-white btn btn-danger">Pending: -50k</p><br/>
  <small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
  </li>
  <li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>
  <h5 class="text-dark mt-2 " style={{fontWeight:"bolder"}}>Remera Apartement <i class="bi bi-tag"></i>150k</h5>
  <p class="text-white btn btn-success mt-3">Paid: 100k</p><br/>

  <p class="text-white btn btn-danger">Pending: -50k</p><br/>
  <small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
  </li>
</ul>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card" >
  <div class="card-body">
  <h6 class="card-title display-5">February</h6>
  <ul class="list-group">

<div class="col">
<li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>  <h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Comfy Apartement  <i class="bi bi-tag"></i>150k</h5> <img src="https://i.ibb.co/yP5M6hz/CITYPNG-COM-Circular-Red-Paid-Stamp-Business-Icon-1773x1845.png" 
alt="CITYPNG-COM-Circular-Red-Paid-Stamp-Business-Icon-1773x1845" border="0" width="30%" style={{position:"relative",marginLeft:"55px"}}/><br/>

<small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
</li>
</div>



<li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>
<h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Kicukiro Apartement <i class="bi bi-tag"></i>150k</h5>
<p class="text-white btn btn-success mt-3">Paid: 100k</p><br/>

<p class="text-white btn btn-danger">Pending: -50k</p><br/>
<small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
</li>
<li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>
<h5 class="text-dark mt-2 " style={{fontWeight:"bolder"}}>Remera Apartement <i class="bi bi-tag"></i>150k</h5>
<p class="text-white btn btn-success mt-3">Paid: 100k</p><br/>

<p class="text-white btn btn-danger">Pending: -50k</p><br/>
<small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
</li>
</ul>
  </div>
</div>
</div>
<div class="col">
<div class="card" >
  <div class="card-body">
    <h6 class="card-title display-5">March</h6>
    <ul class="list-group">

<div class="col">
<li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>  <h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Comfy Apartement  <i class="bi bi-tag"></i>150k</h5> <img src="https://i.ibb.co/yP5M6hz/CITYPNG-COM-Circular-Red-Paid-Stamp-Business-Icon-1773x1845.png" 
alt="CITYPNG-COM-Circular-Red-Paid-Stamp-Business-Icon-1773x1845" border="0" width="30%" style={{position:"relative",marginLeft:"55px"}}/><br/>

<small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
</li>
</div>



<li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>
<h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Kicukiro Apartement <i class="bi bi-tag"></i>150k</h5>
<p class="text-white btn btn-success mt-3">Paid: 100k</p><br/>

<p class="text-white btn btn-danger">Pending: -50k</p><br/>
<small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
</li>
<li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>
<h5 class="text-dark mt-2 " style={{fontWeight:"bolder"}}>Remera Apartement <i class="bi bi-tag"></i>150k</h5>
<p class="text-white btn btn-success mt-3">Paid: 100k</p><br/>

<p class="text-white btn btn-danger">Pending: -50k</p><br/>
<small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
</li>
</ul>
  </div>
</div>
</div>


  
</div>
</div>



</div>
<div id="footer">
<div  class="container-fluid">



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
          <div class="col-sm-2 col3">
          <h3 class="text-white mt-5"> Get the app</h3>
          <img src="https://i.ibb.co/b5Kf5KJ/pngwing-com.png" alt="pngwing-com" border="0" width="100%"/>
          
          </div>
</div>
</div>





</div>
            </div>
       
     );
}
export default PaymentstatusLandlord;