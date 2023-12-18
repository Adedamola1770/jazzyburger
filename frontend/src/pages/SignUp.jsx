import React from 'react'
import '../styles/SignUp.css'
import { Link, Outlet } from "react-router-dom";
import burgerlogo from '../assets/burger logo.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





const SignUp = () => {
  return (
  <>
  <main className='border'>
    <div className='container img-fluid pt-5 text-center'>
    <Link to={'/'}>  <img src={burgerlogo} alt="burger-logo" className='' /></Link>
    <h1 className='pt-3 fs-1 fw-bold lh-sm'>CREATE YOUR ACCOUNT</h1>
    </div>

    
    <div className='container border shadow rounded'>
       <Form>
      <Form.Group className="mb-3 lh-sm pt-5" controlId="formBasicEmail " >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email"  placeholder="First Name"className='' />
      </Form.Group>
      <Form.Group className="mb-3 lh-sm pt-4" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Last Name"className='' />
       
      </Form.Group>

      <Form.Group className="mb-3 lh-sm pt-4" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example@emil.com"className='' />
       
      </Form.Group>
     

      <Form.Group className="mb-3 lh-sm pt-4" controlId="">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="" placeholder="+234 12345..."className='' />
       
      </Form.Group>

      {/* <form action="#" method="post">
        <label for="numberInput">Enter a Number:</label>
        <input type="number" id="numberInput" name="numberInput" min="1" max="100" required>

        <br>

        <input type="submit" value="Submit">
    </form> */}




      <Form.Group className="mb-3 pt-4" controlId="formBasicPassword">
        <Form.Label>Password(8 minimum charcters)</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      
      <Form.Group className="mb-3 pt-4" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className='d-flex justify-content-between'>
      <div className='d-flex justify-content-start'>
      <Form.Group className="mb-3 pt-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me Signed In" />
        
      </Form.Group>
      </div>

     
      </div>
      <Button variant="primary" type="submit" className='w-100 bg-danger fs-4 border1 fw-bold'>
        Create account
      </Button>
    </Form>
    <div className='pt-3 d-flex justify-content-center fw-bold'>
    <p>Have an account? <a href="" className='text-deco'>
      <Link to={'/frontend/src/pages/Login.jsx'} className='text-deco'>Sign In</Link>
      </a></p>
    </div>
       </div>
    
  </main>
  
  </>
  )
}

export default SignUp