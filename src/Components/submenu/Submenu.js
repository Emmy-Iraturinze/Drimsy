import React from 'react'


import { Link } from 'react-router-dom'
import './submenu.css'
const Submenu = () => {
     return (
          <div>
               <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active"style={{textDecoration:"none"}} aria-current="page">Pay Rent</a>
        <a class="nav-link" style={{textDecoration:"none"}} aria-current="page"data-bs-toggle="modal" data-bs-target="#exampleModal" >Subscribe</a>
        <a class="nav-link">Features</a>
       <Link to="/add-tenant" style={{textDecoration:"none"}}><a class="nav-link">Add tenant</a></Link>
      </div>
    </div>
  </div>
</nav>
          </div>
     )
}

export default Submenu
