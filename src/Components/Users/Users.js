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

export default function Users() {
    const [APIData, setAPIData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    useEffect(() => {
        axios.get(`https://authify-ms.romalice.com/user`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchData = (value) => {
        setSearchTerm(value)
        if (searchTerm !== '') {
            const filteredData = APIData.filter((user) => {
                return Object.values(user).join('').toLowerCase().includes(searchTerm.toLowerCase())
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
            <div class="">
              
                <div class="d-flex justify-content-center px-5">
                    <div class="search"> <input type="text" 
                    class="search-input" 
                    placeholder="Search..." 
                    name=""  onChange={(e) => searchData(e.target.value)}/> <a href="#" class="search-icon"> <i class="fa fa-search"></i> </a> </div>
                </div>
              
            </div>
        </div>
    </div>
</div>
            {/* search2 */}
 <div class="container" >
        
            <div itemsPerRow={3} >
                {searchTerm.length > 1 ? (
                    filteredResults.map((user) => {
                        return (
                            <div class="container">
                                             <div class="row">
                        <div class="col">
                        <div class="card" style={{width:"28rem"}}>
  <div class="card-body">
    <h5 class=" text-dark">{user.first_name} {user.last_name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{user.email}</h6>
    <p class="card-text">{user.telephone}</p>
    <a href="#" class="btn btn-success me-2 mt-2">Add</a>
    <a href="#" class="btn btn-danger mt-2">Delete</a>
  </div>
</div>
                        </div>
                              
                                   

                                </div>
                            </div>
                        )
                    })
                ) : (
                    APIData.map((user) => {
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
