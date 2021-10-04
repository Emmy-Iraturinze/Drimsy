import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import './Add_prop.css'
import AuthApi from '../../../AuthApi'
import axios from 'axios';
import { useState } from 'react';
import * as yup from 'yup'
import Header from '../../Header/Header';


      

/* eslint-disable no-unused-vars */




const validationSchema = yup.object({

 usage: yup.string().required(),
 name: yup.string().required(),
 rent_amount: yup.string().required(), 
 bedrooms: yup.string().required(), 
 bathrooms: yup.string().required(), 
});



  
  
export function AddProperty() {
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
              <Header/>
               <section class="h-100 h-custom" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3">
          <img src="https://i.ibb.co/n1Fkx92/fernando-alvarez-rodriguez-M7-Gdd-Pq-Jowg-unsplash.jpg" class="w-100" style={{}} alt="Sample photo"/>
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Upload Your House</h3>


            <form onClick={formik.handleSubmit} class="row g-3">
  
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label text-muted"> Name</label>
    <input type="text"
     class="form-control"
     
       name="name"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.name}/>
       {formik.touched.name && formik.errors.name ? <small class="text-danger" > {formik.errors.name}</small> : null}
  </div>

  <div class="col-md-6">
    <label for="inputPassword4" class="form-label text-muted">Usage</label>
    <input type="text"
     class="form-control"
      id="password"
       name="usage"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.usage}/>
       {formik.touched.usage && formik.errors.usage ? <small class="text-danger" > {formik.errors.usage}</small> : null} 
       
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label text-muted">Rent_amount</label>
    <input type="number" 
    class="form-control"
     id="inputEmail4"
      name="rent_amount" 
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.rent_amount}/>
      {formik.touched.rent_amount && formik.errors.rent_amount? <small class="text-danger" > {formik.errors.rent_amount}</small> : null} 
  </div>

  <div class="col-md-6">
    <label for="inputPassword4" class="form-label text-muted">Bedrooms</label>
    <input type="number"
     class="form-control" 
     id="inputPassword4"
      name="bedrooms"  onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.bedrooms}/>
      {formik.touched.bedrooms && formik.errors.bedrooms ? <small class="text-danger" > {formik.errors.bedrooms}</small> : null} 
  </div>

  <div class="col-12">
    <label for="inputPassword4" class="form-label text-muted">Bathrooms</label>
    <input type="number"
     class="form-control" 
     id="inputPassword4" 
     name="bathrooms"  onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.bathrooms}/>
     {formik.touched.bathrooms && formik.errors.bathrooms ? <small class="text-danger" > {formik.errors.bathrooms}</small> : null} 
  </div>
  <div class="col-12">
    <label for="inputPassword4" class="form-label text-muted">country</label>
    <input type="text"
     class="form-control" 
     id="inputPassword4" 
     name="country"  onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.country}/>
     {formik.touched.country && formik.errors.country? <small class="text-danger" > {formik.errors.country}</small> : null} 
  </div>



  <div class="col-md-6">
    <label for="inputAddress2" class="form-label text-muted">state</label>
    <input type="text"
     class="form-control" 
     id="inputAddress2" 
     placeholder=""
      name="state"
      onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.state}/>
     {formik.touched.state && formik.errors.state? <small class="text-danger" > {formik.errors.state}</small> : null}
  </div>

  <div class="col-md-6">
    <label for="inputCity" class="form-label text-muted">Region</label>
    <input type="text"
     class="form-control"
      id="inputCity"
       name="region"
       onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.region}/>
     {formik.touched.region && formik.errors.region? <small class="text-danger" > {formik.errors.region}</small> : null} 
  </div>

  <div class="col-md-6">
    <label for="other_omenities" class="form-label text-muted">other_amenities</label>
    <input type="text"
     class="form-control"
      id="inputCity"
       name="other_omenities"
       onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.other_amenities}/>
     {formik.touched.other_amenities && formik.errors.other_amenities? <small class="text-danger" > {formik.errors.other_amenities}</small> : null} 
  </div>

  <div class="col-md-6">
    <label for="inputCity" class="form-label text-muted">Upload photos</label>
    <input type="file"
    placeholder=""
     class="form-control"
      id="inputCity"
       name="photo"/>
  </div>



 
  <div class="col-12">
    <button  class="btn btn-primary" >Upload</button>
  </div>

</form>


          </div>
        </div>
      </div>
    </div>
  </div>
</section>
               
          </div>
     )
}

export default AddProperty
