import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import './Add_prop.css'
import AuthApi from '../../../AuthApi'
import axios from 'axios';
import { useState } from 'react';
import * as yup from 'yup'
import Header from '../../Header/Header';



const validationSchema = yup.object({

  usage: yup.string().required(),
  name: yup.string().required(),
  rent_amount: yup.string().required(), 
  bedrooms: yup.string().required(), 
  bathrooms: yup.string().required(), 
 });
 
 


const Prop = () => {
  const Auth = React.useContext(AuthApi)

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

 

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios
      .post("https://endpoint.drimsy.com/properties", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
      });

      if (response && response.data) {
        setError(null);
        setSuccess(response.data.message);
        
        formik.resetForm();

     
      }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
    usage: "" ,
    rent_amount:"",
    bedrooms:"",
    other_amenities:"",
    country:"",
    state:"",
    region:"",},
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
     return (
          <div>
               {/* <!-- Navbar--> */}
<header class="header">
     <Header/>

</header>


<div class="container">
    <div class="row py-5 mt-4 align-items-center">
        {/* <!-- For Demo Purpose --> */}
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" class="img-fluid mb-3 d-none d-md-block"/>
            <h1>UpLoad Your Property</h1>
            <p class="font-italic text-muted mb-0">Create a minimal registeration page using Bootstrap 4 HTML form elements.</p>
            <p class="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" class="text-muted">
                <u>Bootstrapious</u></a>
            </p>
        </div>

        {/* <!-- Registeration Form --> */}
        <div class="col-md-7 col-lg-6 ml-auto">
        <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Usage</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Rent amount</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Bedroom</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">State</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Region</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Country</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Photos</label>
    <input type="file"  className id="inputAddress2" placeholder=""/>
  </div>
  <div class="col-12">
  <div class="form-floating">
  <textarea class="form-control text-muted" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
  <label for="floatingTextarea2 text-muted">Comments</label>
</div>
  </div>
 



  <div class="col-12">
    <button type="submit" class="btn btn-primary">Upload</button>
  </div>
</form>
        </div>
    </div>
</div>

          </div>
     )
}

export default Prop
