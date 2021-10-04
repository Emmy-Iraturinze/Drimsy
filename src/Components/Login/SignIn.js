/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import './Login.css'
import AuthApi from '../../AuthApi';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState } from 'react';
import * as yup from 'yup'


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({

  email: yup.string().required(),
  password: yup
  .string()
  .matches(PASSWORD_REGEX, "Invalid password")
  .required(),

});



  
  
export function SignIn () {
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

      alert("You have successfully Logged in! Kindly Click ok button to enjoy Drimsy")
      }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" ,application_id:"6aa89518-bcf4-4765-9520-1ec564a1cf32"},
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
 return(
          <div>
             <div class="login-box">
  <h2>Login</h2>
  <form onClick={formik.handleSubmit}>
    <div class="user-box">
      <input type="text"
       name="email" 
       required=""
       autoFocus
       onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.email}/>
{formik.touched.email && formik.errors.email? <small class="text-danger" > {formik.errors.email}</small> : null}
      <label>Username</label>
    </div>

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

<a href="#" class="btn" type="">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    <button type="submit "class="btn btn1 text-white" onClick={handleOnClick} disabled={!formik.isValid} >Log In</button>
    </a>


  </form>
<Link to="/SignUp"><p className="text-center text-muted mt-2">Don't have an account? Sign up</p></Link>
</div>
          </div>
     )
}

export default SignIn;
