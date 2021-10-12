/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import './AddTenant.css'
import AuthApi from '../../AuthApi';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState } from 'react';
import * as yup from 'yup'
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import Users from '../Users/Users';

      

/* eslint-disable no-unused-vars */



const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({


});



  
  
export function AddTenant () {
  const Auth = React.useContext(AuthApi)

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const onSubmit = async (values) => {
    setError(null);
    const response = await axios
      .post("https://endpoint.drimsy.com/rentals", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
      });

      if (response && response.data) {
        setError(null);
        setSuccess(response.data.message);
        
        formik.resetForm();

      alert("Tenant Added successfully")
      }
  };

  const formik = useFormik({
    initialValues: { 
     tenant_id: "",
     property_id: ""
     },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
 

return (

<div class="container">
<div>
<Header/>
            </div>
            
        
            <section id="gridGallery">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-xs-6 box" id="boxOne">
        <div class="toggleIcon"></div>
        <div class="col-sm-6 captionBox hiddenText">
          <h3>Here is some text</h3>
          <p>Fixie banh mi blog, YOLO sriracha roof party mumblecore post-ironic. Keytar 90's cornhole drinking vinegar deep v, VHS messenger bag Pinterest. Etsy farm-to-table Intelligentsia Thundercats, pork belly vegan authentic single-origin coffee dreamcatcher
            bespoke master cleanse street art art party.</p>
          <p>Fixie banh mi blog, YOLO sriracha roof party mumblecore post-ironic. Keytar 90's cornhole drinking vinegar deep v, VHS messenger bag Pinterest. Etsy farm-to-table Intelligentsia Thundercats, pork belly vegan authentic single-origin coffee dreamcatcher
            bespoke master cleanse street art art party.</p>
        </div>
      </div>

      <div class="col-sm-3 col-xs-6 box" id="box">
        <div class="toggleIcon"></div>
        <div class="col-sm-6 captionBox hiddenText">
          <h3>Here is some text</h3>
          <p>Fixie banh mi blog, YOLO sriracha roof party mumblecore post-ironic. Keytar 90's cornhole drinking vinegar deep v, VHS messenger bag Pinterest. Etsy farm-to-table Intelligentsia Thundercats, pork belly vegan authentic single-origin coffee dreamcatcher
            bespoke master cleanse street art art party.</p>
        </div>

      </div>

      <div class="col-sm-3 col-xs-6 box" id="boxThree">
        <div class="toggleIcon"></div>
        <div class="col-sm-6 captionBox hiddenText">
          <h3>Here is some text</h3>
          <p>Fixie banh mi blog, YOLO sriracha roof party mumblecore post-ironic. Keytar 90's cornhole drinking vinegar deep v, VHS messenger bag Pinterest. Etsy farm-to-table Intelligentsia Thundercats, pork belly vegan authentic single-origin coffee dreamcatcher
            bespoke master cleanse street art art party.</p>
        </div>

      </div>

      <div class="col-sm-3 col-xs-6 box" id="boxFour">
        <div class="toggleIcon"></div>
        <div class="col-sm-6 captionBox hiddenText">
          <h3>Here is some text</h3>
          <p>Fixie banh mi blog, YOLO sriracha roof party mumblecore post-ironic. Keytar 90's cornhole drinking vinegar deep v, VHS messenger bag Pinterest. Etsy farm-to-table Intelligentsia Thundercats, pork belly vegan authentic single-origin coffee dreamcatcher
            bespoke master cleanse street art art party.</p>
        </div>

      </div>

      <div class="col-sm-6 col-xs-6 pull-right box" id="boxEight">
        <div class="toggleIcon"></div>
        <div class="col-sm-6 captionBox hiddenText">
          <h3>Here is some text</h3>
          <p>Fixie banh mi blog, YOLO sriracha roof party mumblecore post-ironic. Keytar 90's cornhole drinking vinegar deep v, VHS messenger bag Pinterest. Etsy farm-to-table Intelligentsia Thundercats, pork belly vegan authentic single-origin coffee dreamcatcher
            bespoke master cleanse street art art party.</p>
        </div>

      </div>

      <div class="col-sm-3 col-xs-6 pull-right box" id="boxSeven">
        <div class="toggleIcon"></div>
        <div class="col-sm-6 captionBox hiddenText">
          <h3>Here is some text</h3>
          <p>Fixie banh mi blog, YOLO sriracha roof party mumblecore post-ironic. Keytar 90's cornhole drinking vinegar deep v, VHS messenger bag Pinterest. Etsy farm-to-table Intelligentsia Thundercats, pork belly vegan authentic single-origin coffee dreamcatcher
            bespoke master cleanse street art art party.</p>
        </div>

      </div>

      <div class="col-sm-3 col-xs-6 box" id="boxFive">
        <div class="toggleIcon"></div>
        <div class="col-sm-6 captionBox hiddenText bottomRight">
          <h3>Here is some text</h3>
          <p>Fixie banh mi blog, YOLO sriracha roof party mumblecore post-ironic. Keytar 90's cornhole drinking vinegar deep v, VHS messenger bag Pinterest. Etsy farm-to-table Intelligentsia Thundercats, pork belly vegan authentic single-origin coffee dreamcatcher
            bespoke master cleanse street art art party.</p>
        </div>

      </div>

      <div class="col-sm-3 col-xs-6 box" id="boxSix">
        <div class="toggleIcon"></div>
        <div class="col-sm-6 captionBox hiddenText bottomRight">
          <h3>Here is some text</h3>
          <p>Fixie banh mi blog, YOLO sriracha roof party mumblecore post-ironic. Keytar 90's cornhole drinking vinegar deep v, VHS messenger bag Pinterest. Etsy farm-to-table Intelligentsia Thundercats, pork belly vegan authentic single-origin coffee dreamcatcher
            bespoke master cleanse street art art party.</p>
        </div>

      </div>


    </div>


  </div>


</section>
       
       


          


  
       <div class="container mt-5">
            <div class="row">
                 <div id="col-li" class="col-sm-6">
                 <h2 class="text-white">Comfy Apartement</h2>
       <p class="text-secondary">This exceptional residence is one of only four homes in this 
            magnificent double townhouse on the second block of Commonwealth Avenue. 
             The elevator, shared with only three other families, opens directly 
             into approximately 3,000 square feet of single-level living on the 3rd floor of this boutique building.  

Surrounding these formal gardens are acres of private woodlands with trails for walking, riding, 
snow shoeing, cross-country skiing and access to Bateman’s Pond. These private acres abut hundreds of acres of conservation land and provide tranquility rarely found so close to Boston. Constructed by master craftsmen, using only the finest materials, 
the house fully integrates smart-house technology and is in new construction condition.</p>
                   <p class="text-muted"><i class="fas fa-sink me-2" ></i><br/>2 Bedrooms</p>
                <p class="text-muted"><i class="fas fa-sink me-2" ></i><br/>3 Bathrooms</p>
                   <p class="text-muted"><i class="fas fa-dollar-sign me-2"></i><br/>Rwf 100,000</p>
              
                 </div>
               
              
                 <div class="col">
                      <h2 class="text-white mb-3">Location</h2>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4469944162834!2d30.040164314171935!3d-1.9755053373220381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5955ec19b33%3A0xdf1cc8655e0cc320!2sKigali%20Baobab%20Hotel!5e0!3m2!1sen!2srw!4v1630416716526!5m2!1sen!2srw" width="105%" height="240" ></iframe>
                 </div>
               
                 <div className="col-12">
                 <h5 className="text-center mt-5 fw-bold">
                   Search Tenanat and add Them to your house
                 </h5>
                 <Users/>
                 </div>
              
            </div>




     
       </div>
      
<hr/>


<Footer/>
</div>

);
}

export default AddTenant;