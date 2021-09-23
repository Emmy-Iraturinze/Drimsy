import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import './Login.css'
import AuthApi from '../../AuthApi';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState } from 'react';
import * as yup from 'yup'


      

/* eslint-disable no-unused-vars */



const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({

  email: yup.string().required(),
  password: yup
  .string()
  .matches(PASSWORD_REGEX, "Invalid password")
  .required(),

});



  
  
export function Login () {
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
      .post("https://authify-ms.romalice.com/auth/user", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
      });

      if (response && response.data) {
        setError(null);
        setSuccess(response.data.message);
        
        formik.resetForm();

      alert("You have successfully Logged in")
      }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" ,application_id:"6aa89518-bcf4-4765-9520-1ec564a1cf32"},
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
 

  return ( 
  
    <div class=" login-dark bg-dark ">
<form onClick={formik.handleSubmit} class="" style={{background:""}} >
   <h2 class="sr-only">Login Form</h2>

   <div class="illustration "><img src="https://api.freelogodesign.org/files/95d71dec2e024c6db036e3fb73e35817/thumb/logo_200x200.png?v=637652951930000000"/></div>

   <div class="form-group">
   
   <input  class="form-control text-muted"
    type="email" name="email" 
    placeholder="Email"
    autoFocus
         onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.email}/>
{formik.touched.email && formik.errors.email ? <small class="text-danger" > {formik.errors.email}</small> : null}


   </div>


   <div class="form-group">
   <input class="form-control text-muted"
    type="password" name="password" 
    placeholder="Password" 
         onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.password}/>
{formik.touched.password && formik.errors.password ? <small class="text-danger" > {formik.errors.password}</small> : null}

    </div>
   <div class="form-group">

   <button class="btn btn-primary btn-block" onClick={handleOnClick} disabled={!formik.isValid} >Log In</button>
   </div>

   <a href="#" class="forgot">Forgot your email or password?</a><br/>
 <Link to="/signup">  <a class="forgot">Don't have an Account? </a></Link>
   
   </form>
 </div>



  )
}

export default Login;