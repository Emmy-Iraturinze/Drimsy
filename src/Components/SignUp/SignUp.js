import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import './SignUp.css'
import AuthApi from '../../AuthApi';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState } from 'react';
import * as yup from 'yup'


      

/* eslint-disable no-unused-vars */



const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({

  email: yup.string().required(),
  password: yup.string().required("This field is required"),
  comfirmPassword: yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("password")],
      "Both password need to be the same"
    )
  }),
  phone_number: yup.string().required(),
 first_name: yup.string().required(),
 last_name: yup.string().required(),
 country:yup.string().required(),
});



  
  
export function SignUp () {
  const Auth = React.useContext(AuthApi)

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleOnClick = () =>{
    Auth.setAuth(true);
    Cookies.set("user","loginTrue")

  }

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios
      .post("https://authify-ms.romalice.com/auth/signup", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
      });

      if (response && response.data) {
        setError(null);
        setSuccess(response.data.message);
        
  

      }
  };

  const formik = useFormik({
    initialValues: { email: "",
     password:"" ,
     application_id:"6aa89518-bcf4-4765-9520-1ec564a1cf32",
     first_name:"",
     last_name:"",
     country:"",
     business_name:"",
     business_type:"",
     business_address:"",
     phone_number:"",

},
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
 

  return ( 
  
    <div class=" login-dark bg-dark ">
<form onClick={formik.handleSubmit} class=" text-muted row g-3" style={{background:"rgb(10, 10, 10)"}}>
<div class="illustration"><img src="https://api.freelogodesign.org/files/95d71dec2e024c6db036e3fb73e35817/thumb/logo_200x200.png?v=637652951930000000"/></div>
   <h2 class="sr-only">Login Form</h2>
   <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="text"
    name="first_name"
    autoFocus
     class="form-control"
      id=""      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.first_name}/>
      {formik.touched.first_name && formik.errors.first_name ? <small class="text-danger" > {formik.errors.first_name}</small> : null}
  </div>

  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="text" 
    name="last_name"
    class="form-control" 
    id="inputPassword4"      onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.last_name}/>
    {formik.touched.last_name && formik.errors.last_name ? <small class="text-danger" > {formik.errors.last_name}</small> : null}
  </div>


  <div class="col-md-6">
  <label for="inputPassword4" class="form-label">Email</label>
<input class="form-control text-muted"
 type="email" name="email" 
 placeholder=""

      onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.email}/>
{formik.touched.email && formik.errors.email ? <small class="text-danger" > {formik.errors.email}</small> : null}


</div>

<div class="col-md-6">
<label for="inputPassword4" class="form-label">Password</label>
<input class="form-control text-muted"
 type="password" name="password" 
 placeholder="" 
      onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.password}/>
{formik.touched.password && formik.errors.password ? <small class="text-danger" > {formik.errors.password}</small> : null}

 </div>
 <div class="col-md-6">
<label for="inputPassword4" class="form-label">Comfirm Password</label>
<input class="form-control text-muted"
 type="password" name="comfirmPassword" 
 placeholder="" 

onBlur={formik.handleBlur}
value={formik.values.comfirmPassword}/>
{formik.touched.comfirmPassword && formik.errors.comfirmPassword ? <small class="text-danger" > {formik.errors.comfirmPassword}</small> : null}

 </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">phone</label>
    <input type="phone" 
    name="phone_number"
    class="form-control"
      placeholder=""
      onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.phone_number}/>
{formik.touched.phone_number && formik.errors.phone_number? <small class="text-danger" > {formik.errors.phone_number}</small> : null}
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Country</label>
    <input type="country" 
    name="country"
    class="form-control"
      placeholder=""
      onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.country}/>
{formik.touched.country && formik.errors.country? <small class="text-danger" > {formik.errors.country}</small> : null}
  </div>

  <div class="col-md-6">
    <label for="inputCity" class="form-label">Business Name</label>
    <input type="text"
    name="business_name"
     class="form-control"
      id="inputCity"/>
  </div>


  <div class="col-md-6">
    <label for="inputState" class="form-label">Business Type</label>
    <input type="text"
    name="business_type"
     class="form-control"
      id="inputCity"/>
  </div>


  <div class="col-md-6">
    <label  class="form-label">Business Address</label>
    <input type="text"
     class="form-control"
     name="business_address"
      id="inputZip"/>
  </div>


   <div class="form-group">

   <button class="btn btn-primary btn-block" onClick={handleOnClick} disabled={!formik.isValid} >Sign Up</button>
   </div>


 <Link to="/login" style={{textDecoration:"none"}}>  <a class="forgot">Already Have an account? Login here </a></Link>
   <p class="text-dark mt-3 font-light">*By Signing up, you agree our use of cookies</p>
   </form>
 </div>



  )
}

export default SignUp;