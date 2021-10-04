/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{ Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import './rentalsTenant.css'
import { useState, useEffect} from 'react';
import { Card, Input } from 'semantic-ui-react'

import Header from '../Header/Header'
import Footer from '../footer/Footer'

export default function RentalsTenant() {
    const [APIData, setAPIData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    useEffect(() => {
        axios.get(`https://endpoint.drimsy.com/properties`)
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

    return (
        <div class="container-fluid">
<Header/>
<div class="container mt-4">
    <div class="row d-flex justify-content-center">
        <div class="col-md-9">
            <div class="card p-4 mt-3  bd-dark">
                <h3 class="heading mt-5 text-center text-muted">Search Any type of House you want</h3>
                <div class="d-flex justify-content-center px-5">
                    <div class="search"> <input type="text" 
                    class="search-input" 
                    placeholder="Search..." 
                    name=""  onChange={(e) => searchData(e.target.value)}/> <a href="#" class="search-icon"> <i class="fa fa-search"></i> </a> </div>
                </div>
                <div class="row mt-4 g-1 px-4 mb-5">
                    <div class="col-md-2">
                        <div class="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://cdn-icons-png.flaticon.com/512/259/259973.png" width="50"/>
                            <div class="text-center text-dark"> <p class="mg-text text-dark">Bathroom</p> </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://cdn-icons-png.flaticon.com/512/2148/2148404.png" width="50"/>
                            <div class="text-center mg-text"> <p class="text-dark">Bedroom</p> </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://cdn-icons-png.flaticon.com/512/927/927667.png" width="50"/>
                            <div class="text-center mg-text"> <p class="text-dark">Location </p> </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://cdn-icons-png.flaticon.com/128/2488/2488749.png" width="50"/>
                            <div class="text-center mg-text"> <p class="text-dark">Price</p> </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://cdn-icons-png.flaticon.com/512/1721/1721108.png" width="50"/>
                            <div class="text-center mg-text"> <p class="text-dark">Pool</p> </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://cdn-icons-png.flaticon.com/128/2439/2439889.png" width="50"/>
                            <div class="text-center mg-text"> <p class="text-dark">Parking</p> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            {/* search2 */}
 <div class="container" >
        
            <div itemsPerRow={3} >
                {searchTerm.length > 1 ? (
                    filteredResults.map((property) => {
                        return (
                            <div class="container">
                                <div class="row">

                                <div class="col-md-3">
                                    <Link to="/single-house">
                                    <div class="card-sl">
                                  <div class="card-image">
                                  <img
                                 src={property.thumbnail} />
                                  </div>

                                     <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                                     <div class="card-heading">
                                     {property.name}
                                      </div>
                                      <div class="card-text">
                                      {property.other_amenities}
                                        </div>
                                      <div class="card-text">
                                             {property.rent_amount}
                                               </div>
                                        <a href="#" class="card-button bg-danger"> Request</a>
                                           <a href="#" class="card-button mt-4 "> view details</a>
                                        </div>
                                    </Link>
                          
                                        </div>

                                <div class="col-md-3">
                                <div class="card-sl">
                                  <div class="card-image">
                                  <img
                                 src={property.thumbnail} />
                                  </div>

                                     <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                                     <div class="card-heading">
                                     {property.name}
                                      </div>
                                      <div class="card-text">
                                      {property.other_amenities}
                                        </div>
                                      <div class="card-text">
                                             {property.rent_amount}
                                               </div>
                                               <div class="card-text">
                                             {property.Bathroom}
                                               </div>
                                        <a href="#" class="card-button bg-danger"> Request</a>
                                           <a href="#" class="card-button mt-4 "> view details</a>
                                        </div>
                                        </div>

                                <div class="col-md-3">
                                <div class="card-sl">
                                  <div class="card-image">
                                  <img
                                 src={property.thumbnail} />
                                  </div>

                                     <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                                     <div class="card-heading">
                                     {property.name}
                                      </div>
                                      <div class="card-text">
                                      {property.other_amenities}
                                        </div>
                                      <div class="card-text">
                                             {property.rent_amount}
                                               </div>
                                        <a href="#" class="card-button bg-danger"> Request</a>
                                           <a href="#" class="card-button mt-4 "> view details</a>
                                        </div>
                                        </div>

                                <div class="col-md-3">
                                <div class="card-sl">
                                  <div class="card-image">
                                  <img
                                 src={property.thumbnail} />
                                  </div>

                                     <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                                     <div class="card-heading">
                                     {property.name}
                                      </div>
                                      <div class="card-text">
                                      {property.other_amenities}
                                        </div>
                                      <div class="card-text">
                                             {property.rent_amount}
                                               </div>
                                        <a href="#" class="card-button bg-danger"> Request</a>
                                           <a href="#" class="card-button mt-4 "> view details</a>
                                        </div>
                                        </div>
                         
                                  
                                 
                                </div>
                            </div>
                        )
                    })
                ) : (
                    APIData.map((property) => {
                        return (
                            <div>
                                <div class="row">
                                  <div className="col-md-3">
                              
                            
                                  <Link to={'/product/'+property.id}>
                                        <div class="card-sl">
                                  <div class="card-image">
                                  <img
                                 src={property.thumbnail} />
                                  </div>

                                     <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                                     <div class="card-heading">
                                     {property.name}
                                      </div>
                                      <div class="card-text">
                                      {property.other_amenities}
                                        </div>
                                      <div class="card-text">
                                             {property.rent_amount}
                                               </div>
                                        <a href="#" class="card-button bg-danger"> Request</a>
                                      
                                        </div>
                                        </Link>
                                 
                                  </div>
                                  <div className="col-md-3">
       
                                        <Link to={'/product/'+property.id}>
                                        <div class="card-sl">
                                  <div class="card-image">
                                  <img
                                 src={property.thumbnail} />
                                  </div>

                                     <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                                     <div class="card-heading">
                                     {property.name}
                                      </div>
                                      <div class="card-text">
                                      {property.other_amenities}
                                        </div>
                                      <div class="card-text">
                                             {property.rent_amount}
                                               </div>
                                        <a href="#" class="card-button bg-danger"> Request</a>
                                      
                                        </div>
                                        </Link>
                                  </div>
                                  <div className="col-md-3">
                        
                                  <Link to={'/product/'+property.id}>
                                        <div class="card-sl">
                                  <div class="card-image">
                                  <img
                                 src={property.thumbnail} />
                                  </div>

                                     <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                                     <div class="card-heading">
                                     {property.name}
                                      </div>
                                      <div class="card-text">
                                      {property.other_amenities}
                                        </div>
                                      <div class="card-text">
                                             {property.rent_amount}
                                               </div>
                                        <a href="#" class="card-button bg-danger"> Request</a>
                                      
                                        </div>
                                        </Link>
                                  </div>
                                  <div className="col-md-3">
                    
                                        <Link to={'/product/'+property.id}>
                                        <div class="card-sl">
                                  <div class="card-image">
                                  <img
                                 src={property.thumbnail} />
                                  </div>

                                     <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                                     <div class="card-heading">
                                     {property.name}
                                      </div>
                                      <div class="card-text">
                                      {property.other_amenities}
                                        </div>
                                      <div class="card-text">
                                             {property.rent_amount}
                                               </div>
                                        <a href="#" class="card-button bg-danger"> Request</a>
                                      
                                        </div>
                                        </Link>
                                  </div>
                                   

                                </div>

                         
                            </div>
                        )
                    })
                )}
            </div>
        </div>
        <Footer/>
        </div>
       
    )
}
