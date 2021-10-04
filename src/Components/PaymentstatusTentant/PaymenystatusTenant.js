/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom'
import Header from '../Header/Header';


function PaymentstatusTenant()

{
     return(
          <div>
                
 <Header/>


<div class=" section1 container " style={{marginTop:"200px"}}>

<div class="card" >
  <div class="card-body">
  <h1 class="card-title display-3 mt-2 text-center"style={{fontWeight:"600"}}>Good Morning Sabin</h1>
  <h3 class="mt-4 mb-2 text-center"style={{fontWeight:"600"}}>Rental Payment Status</h3> 
   <p class="text-secondary">Current Month ,January</p>

  <div class="row">
       <div class="col text-center">
       <div id="card1" class="card border-0 bg-dark " style={{width:"100%"}}>  
       <div class="header text-white"><i class="bi bi-cash display-5 "></i></div> 
  <div class="card-body rounded">
    <h5 class="card-title text-white mb-4 text-center">Total Paid</h5>
<h5 class="text-success display-4"style={{fontWeight:"600"}}>Rwf 500K</h5>
  </div>
</div>
       </div>
       <div class="col text-center">
       <div id="card2" class="card border-0 bg-danger" style={{width:"100%"}}> 
       <div class="header text-white"><i class="bi bi-stopwatch display-5 text-white"></i></div>   
  <div class="card-body rounded">
    <h5 class="card-title text-white mb-4 text-center">Pending</h5>
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
<div class="container mt-5" >
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Last Months<i class="fas fa-chevron-circle-down"></i></a>

</p>


</div>
<div class="container collapse multi-collapse" id="multiCollapseExample1">
<div class="row">
  <div class="col">
  <div class="card" >
  <div class="card-body">
  <h5 class="card-title display-5">February</h5>
  <li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>
  <h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Kicukiro Apartement <i class="bi bi-tag"></i>150k</h5>
  <p class="text-white btn btn-success mt-3">Paid: 100k</p><br/>

  <p class="text-white btn btn-danger">Remaining: -50k</p><br/>
  <small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
  </li>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card" >
  <div class="card-body">
  <h5 class="card-title display-5">March</h5>
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
<div class="card" >
  <div class="card-body">
    <h5 class="card-title display-5">April</h5>
  
    <li class="list-group-item mt-2" style={{fontWeight:"bolder"}}>  <h5 class="text-dark mt-2 "style={{fontWeight:"bolder"}}>Comfy Apartement  <i class="bi bi-tag"></i>150k</h5> <img src="https://i.ibb.co/yP5M6hz/CITYPNG-COM-Circular-Red-Paid-Stamp-Business-Icon-1773x1845.png" 
alt="CITYPNG-COM-Circular-Red-Paid-Stamp-Business-Icon-1773x1845" border="0" width="43%" style={{position:"relative",marginLeft:"55px"}}/><br/>

<small class="text-secondary">09th, January, 2020 at 5:48 pm</small>
</li>
  </div>
</div>
</div>


  
</div>
</div>


          </div>
     );
}

export default PaymentstatusTenant;