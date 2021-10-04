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
  password: yup.string().required("Password shoulld have atleast one character & uppercase"),
  comfirmPassword: yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("password")],
      "Both password need to be the same"
    )
  }),
  phone_number: yup.string().required(),

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
  
    <div class=" ">
           <div class="login-box">
  <h2>Sign Up</h2>
  <form onClick={formik.handleSubmit}>
    <div className="row">
      <div className="col mt-2">
      <div class="user-box">
      <input type="text"
       name="first_name" 
       required=""
      autoFocus
       onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.first_name}/>
{formik.touched.first_name && formik.errors.first_name? <small class="text-danger" > {formik.errors.first_name}</small> : null}
      <label>First Name</label>
    </div>
      </div>
      <div className="col mt-2">
      <div class="user-box">
      <input type="text"
       name="last_name" 
       required=""
   
       onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.last_name}/>
{formik.touched.last_name && formik.errors.last_name? <small class="text-danger" > {formik.errors.last_name}</small> : null}
      <label>Last Name</label>
    </div>
      </div>
      
    </div>
    <div class="row">
      <div class="col mt-2">

      <div class="user-box">
      <input type="email"
       name="email"
        required=""
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}/>
        {formik.touched.email && formik.errors.email? <small class="text-danger" > {formik.errors.email}</small> : null}
      <label>Email</label>
    </div>
      </div>
      <div class="col mt-2">

<div class="user-box">
<input type="phone"
 name="phone_number"
  required=""
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.phone_number}/>
  {formik.touched.phone_number && formik.errors.phone_number? <small class="text-danger" > {formik.errors.phone_number}</small> : null}
<label>Phone Number</label>
</div>
</div>
    </div>
    <div class="row">
      <div class="col mt-2">

      <div class="user-box">
      <input type="password"
       name="password"
        required=""
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}/>
        {formik.touched.password && formik.errors.password? <small class="text-danger" > {formik.errors.password}</small> : null}
      <label>Password</label>
    </div>
      </div>
      <div class="col mt-2">

<div class="user-box">
<input type="password"
 name="comfirmPassword"
  required=""
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.comfirmPassword}/>
  {formik.touched.comfirmPassword && formik.errors.comfirmPassword? <small class="text-danger" > {formik.errors.comfirmPassword}</small> : null}
<label>Comfirm Password</label>
</div>
</div>
<div class="col mt-2">

<div class="user-box">
<input type="text"
 name="country"
  required=""
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.country}/>
  {formik.touched.country && formik.errors.country? <small class="text-danger" > {formik.errors.country}</small> : null}
<label>Country</label>
</div>
</div>
    </div>
    <div class="row">
      <div class="col mt-2">

      <div class="user-box">
      <input type="text"
       name="business_name"
        required=""
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.business_name}/>
       
      <label>Business Name</label>
    </div>
      </div>
      <div class="col mt-2">

<div class="user-box">
<input type="text"
 name="business_type"
  required=""
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.business_type}/>
 
<label>business Type</label>
</div>
</div>
<div class="col mt-2">

<div class="user-box">
<input type="text"
 name="cbusiness_address"
  required=""
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.business_address}/>
 
<label>Business Address</label>
</div>
</div>
    </div>



<a href="#" class="btn" type="">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    <button type="submit" class="btn btn1 text-white" onClick={handleOnClick} disabled={!formik.isValid} >Sign Up</button>
    </a>


  </form>
<Link to="/SignIn"><p className="text-center text-muted mt-2">Already have an account? Login </p></Link>
</div>
 </div>



  )
}

export default SignUp;