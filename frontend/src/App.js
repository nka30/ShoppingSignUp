import './App.css'
import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import axios from 'axios'
import * as Yup from 'yup'

function App() {
  const initialValues={
    email:"",
    pass:"",
    confirmPass:"",
    firstName:"",
    lastName:"",
    address:"",
    option:""
  }
  const validateEmail = (value) => {
    let error;
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!value || !emailPattern.test(value)) {
      error = 'Email is not in the proper format';
    }
    return error;
  };
  // Validation function for matching password and confirm password
   
  const validationSchema=Yup.object().shape({
    firstName:Yup.string().required("You must input your first name"),
    lastName:Yup.string().required("You must input your first name"),
    pass:Yup.string().min(6,"Must be at least 6 characters").max(18,"Must be less than 18 characters").required("You must input your password"),
    confirmPass: Yup.string()
    .oneOf([Yup.ref('pass'), null], 'Password and Confirm Password do not match')
    .required('You must confirm your password'),
    address:Yup.string().required("You must input your address"),
})
  const onSubmit=(data)=>{
    axios.post("http://localhost:5000/signup",data).then((response)=>{
      if (response.data.error) {
        console.log(response.data.error)
        alert("Sign up failed")
      }
      else{
        console.log(response)
        alert("Success!")
      }
  }) 
  }
  return (
  <div className="App">
    <label className='title'>Shop With Us</label>
    <div className="Signup">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
      <Form className='formContainer'>
          <div className='email'>
            <label>Email:</label>
            <Field type="email" name="email" validate={validateEmail} />
            <ErrorMessage name="email" component="div" className="error"/>
          </div>

          <div className='password'>
            <label>Password:</label>
            <Field type="password" name="pass" className="inp" />
            <ErrorMessage name="pass" component="div" className="error"/>
          </div>

          <div className='confirmpassword'>
            <label>Confirm Password:</label>
            <Field type="password" name="confirmPass" className="inp" />
            <ErrorMessage name="confirmPass" component="div" className="error"/>
          </div>
          <div className='firstname'>
            <label>First Name:</label>
            <Field type="text" name="firstName" className="inp" />
            <ErrorMessage name="firstName" component="div" className="error"/>
          </div>
          <div className='lastname'>
            <label>Last Name:</label>
            <Field type="text" name="lastName" className="inp" />
            <ErrorMessage name="lastName" component="div" className="error"/>
          </div>
          <div className='address'>
            <label>Address:</label>
            <Field type="text" name="address" className="inp" />
            <ErrorMessage name="address" component="div" className="error"/>
          </div>
          <div className='ads'>
            <label>Allow Advertisements?:</label>
            <Field type="checkbox" name="option" />
            <ErrorMessage name="option" component="div" className="error"/>
          </div>
          <div>
            <button type="submit">Sign up</button>
          </div>
        </Form>
      </Formik>
    </div>
  </div>
  );
}

export default App;
