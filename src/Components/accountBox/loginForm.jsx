/* eslint-disable no-unused-vars */
import { Field, useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import { useHistory, Redirect } from "react-router";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormError,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";



import { AccountContext } from "./context";
import * as yup from "yup";
import axios from "axios";


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup
  .string()
  .matches(PASSWORD_REGEX, "Invalid password")
  .required(),
  
});

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  

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

      alert("success")
      }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" ,application_id:"6aa89518-bcf4-4765-9520-1ec564a1cf32"},
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
 

  return (
    <div>
    <BoxContainer>
      <FormError>{error ? error : ""}</FormError>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer className="mt-5">
          <Input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <FieldContainer>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <MutedLink href="#">Forgot Password?</MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}  >
          Login
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}  >
          sign up
        </BoldLink>
      </MutedLink>

    </BoxContainer>
    
    </div>
  );
}
