import React from 'react'
import { Link } from 'react-router-dom'


const LoginAndSignUp = () => {
  return (
    <div>
        <div>
        <nav className='bg-white p-3 rounded'>
        
              <Link to='/frontend/src/pages/Login.jsx'>
              <button className='btn btn-primary w-100 mb-3 rounded'>Login</button>
              </Link>
              <Link to='/frontend/src/pages/SignUp.jsx'>
              <button className='btn border border-danger border-1 text-danger w-100  rounded'>Sign Up</button>
              </Link>
            
            </nav>
        </div>
    </div>
  )
}

export default LoginAndSignUp