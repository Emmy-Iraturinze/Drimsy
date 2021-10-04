/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{ Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import '../../rentalsTenant/rentalsTenant.css'
import { useState, useEffect} from 'react';
import { Card, Input } from 'semantic-ui-react'




export default function Search() {
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

<div class="container mt-4">
<div class="search-box align-item-center ml-5">
    <button class="btn-search"><i class="fas fa-search text-center "></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..."onChange={(e) => searchData(e.target.value)}/>
  </div> 
 
</div>
            {/* search2 */}
 <div class="container" style={{marginTop:"100px"}} >
        
            <div itemsPerRow={3} className="container bg-dark" >
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
                  

                         
                            </div>
                        )
                    })
                )}
            </div>
        </div>
     
        </div>
       
    )
}
