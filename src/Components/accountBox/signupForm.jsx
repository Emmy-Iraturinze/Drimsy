import { Field, useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  MutedLink,
  SubmitButton,
  FormError,
} from "./common";
import { AccountContext } from "./context";
import * as yup from "yup";
import axios from "axios";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(3, "Please enter you real name")
    .required("First name is required!"),
    lastName: yup
    .string()
    .min(3, "Please enter you real name")
    .required("Last name is required!"),
    
    
  email: yup.string().email("Please enter a valid email address").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match"),
    }),
});

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;

    const response = await axios
      .post("https://authify-ms.romalice.com/auth/signup", data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      bussiness_name:"",
      business_type:"",
      business_address:"",
      country:"",
      email: "",
      password: "",
      phone_number:"",
      confirmPassword: "",
      application_id:"6aa89518-bcf4-4765-9520-1ec564a1cf32"
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log("Error", error);

  return (
    <BoxContainer>
      {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
      <FormContainer onSubmit={formik.handleSubmit}>
 
 
        <div class="row mt-5 ">
  <div class="col">
  <FieldContainer>
          <Input
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : ""}
          </FieldError>
        </FieldContainer>
  </div>
  <div class="col">
  <FieldContainer>
          <Input
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : ""}
          </FieldError>
        </FieldContainer>
  </div>
  </div>
<div class="row">

  <div class="col">

  <FieldContainer>
          <Input
            name="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </FieldError>
        </FieldContainer>

  </div>
  <div class="col">

  <FieldContainer>
          <Input
          type="phone"
            name="phone_number"
            placeholder="Phone"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : ""}
          </FieldError>
        </FieldContainer>
  </div>

  
</div>
<div class="row">

  <div class="col">
  <FieldContainer>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </FieldError>
        </FieldContainer>

  </div>
  <div class="col">

  <FieldContainer>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""}
          </FieldError>
        </FieldContainer>

  </div>
</div>

        <div class="row">
  <div class="col">
    <input type="text"
     class="form-control " 
     name="country"
     placeholder="counrty" 
     aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text"
    name="business_name"
     class="form-control"
      placeholder="Business name" 
      aria-label="Last name"/>
  </div>
</div>


  <div class="row mt-5 ">
  <div class="col">
    <input type="text"
     class="form-control " 
     name="business_type"
     placeholder="business type" 
    />
  </div>
  <div class="col">
    <input type="text"
    name="business_address"
     class="form-control"
      placeholder="business address" 
     />
  </div>
  </div>

        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Signup
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
