import React from 'react'
import '../styles/Login.css'
import { Link, Outlet } from "react-router-dom";
import burgerlogo from '../assets/burger logo.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <div >
      <div className=''>
        <div className='container img-fluid pt-5 text-center '>
       <Link to={'/'}>  <img src={burgerlogo} alt="burger-logo" className='' /></Link>
         <h1 className='pt-3 fs-1 fw-bold lh-sm'>SIGN IN TO YOUR ACCOUNT</h1>
        </div>

       <div className='container border shadow rounded'>
       <Form>
      <Form.Group className="mb-3 lh-sm pt-5" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example@emil.com"className='' />
       
      </Form.Group>

      <Form.Group className="mb-3 pt-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className='d-flex justify-content-between'>
      <div className='d-flex justify-content-start'>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me Signed In" />
        
      </Form.Group>
      </div>

      <div className='d-flex justify-content-end align-items-center '>
      <p className=''><a href="" className='text-deco   fw-bold'>Reset Password</a></p>
      </div>
      </div>
      <Button variant="primary" type="submit" className='w-100 bg-danger fs-4 border1'>
        Sign In
      </Button>
    </Form>
    <div className='pt-3 d-flex justify-content-center fw-bold '>
    <p>Dont have an account? <Link to={'/frontend/src/pages/SignUp.jsx'} className='text-deco'><a href="" className='text-deco'>Create one</a></Link></p>
    </div>
    </div>
       </div>
    </div>
  )
}

export default Login