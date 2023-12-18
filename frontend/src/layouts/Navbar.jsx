import React, { useState } from 'react'
import jazzy from '../assets/image 2.svg'
import {Outlet, Link } from 'react-router-dom'
import location from '../assets/Vector (2).svg'
import foodpan from '../assets/Vector (3).svg'
import guest from '../assets/Vector (4).svg'
import guests from '../assets/Vector (1).jpg'
import cart from '../assets/cartt.svg'
import Cart from '../pages/Cart'
import '../styles/Navbar.css'
import LoginAndSignUp from '../pages/LoginAndSignUp'

const Navbar = () => {
    const [show,setShow]= useState(false)
    const [showing,setShowing]= useState(false)
  return (
    <main className='container position-relative'>
        <nav className='d-flex justify-content-between align-items-center gap-3'>
     <section className='d-flex justify-content-between align-items-center gap-3 my-3'>

               <div>
                <Link to='/'>
                    <img src={jazzy} alt="" />
                </Link>
               </div>

               <div>
                <img src={location} alt="" className='d-none d-lg-block'/>
               </div>
               <h5 className='d-none d-lg-block text-danger'>Lagos, Nigeria</h5>
     </section>

     <section className='d-flex justify-content-between align-items-center gap-3'>
          <img src={foodpan} alt="" className='img-fluid'/>
          <h5 className='d-none d-lg-block mt-2 text-danger'>All products</h5>
          <img src={guest} alt="" />
          
          <div>
        

          </div>

          <div className="d-none d-lg-block mt-2" role='button' onClick={()=>(!showing ? setShowing(true) : setShowing(false))}>
          <h5 className=' mt-2'>Hi, Guest<img src={guests} alt="" /></h5>

          </div>
      
          
          <div>
            <div onClick={()=>(!show ? setShow(true) :setShow(false))}>
                <img src={cart}alt="" role='button' />
            </div>
          </div>
     </section>
        </nav>
        <div className='position-absolute end-0'>{show && <Cart/>}</div>
        <div className='position-absolute end-0'>{showing && <LoginAndSignUp/>}</div>
      
        <Outlet/>
      
    </main>
  )
}

export default Navbar

{/* <div>
            <div onClick={()=>(!show ? setShow(true) :setShow(false))}>
                <img src={cart}alt="" role='button' />
            </div>
          </div> */}
{/* <h5 className='d-none d-lg-block mt-2'>Hi, Guest<img src={guests} alt="" /></h5> */}