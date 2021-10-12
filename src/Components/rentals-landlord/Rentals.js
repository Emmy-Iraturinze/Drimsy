/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{ Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

import { useState, useEffect} from 'react';
import { Card, Input } from 'semantic-ui-react'

import Header from '../Header/Header'
import Footer from '../footer/Footer'

export default function Rentals() {
    const [APIData, setAPIData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    useEffect((ownerId) => {
        axios.get(`https://endpoint.drimsy.com/properties/owner/${ownerId}`)
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


            {/* search2 */}
 <div class="container" >
        
            <div itemsPerRow={3} >
                {searchTerm.length > 1 ? (
                    filteredResults.map((property) => {
                        return (
                            <div class="container">
                    
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
                                  <div class="card" style="width: 18rem;">
  <img src={property.thumbnail} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{property.name}</p>
  </div>
</div>
                                        </Link>
                                 
                                  </div>
                                  <div className="col-md-3">
       
                                        <Link to={'/product/'+property.id}>
                                        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                                        </Link>
                                  </div>
                                  <div className="col-md-3">
                        
                                  <Link to={'/product/'+property.id}>
                                  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                                        </Link>
                                  </div>
                                  <div className="col-md-3">
                    
                                        <Link to={'/product/'+property.id}>
                                        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
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
