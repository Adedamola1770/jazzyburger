import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Hero2 from './pages/Hero2'
import Login from '../src/pages/Login'
import SignUp from './pages/SignUp'
import AddToCart from './pages/AddToCart'
import Footer from './pages/Footer'

function App() {
  

  return (
    <>
      <BrowserRouter>

      <Routes>
     <Route path='/frontend/src/pages/Login.jsx' element={<Login/>}/>
     <Route path='/frontend/src/pages/SignUp.jsx' element={<SignUp/>}/>
        <Route element={<Navbar/>}>
          <Route path='/frontend/src/pages/AddToCart.jsx' element={<AddToCart/>}/>
          {/* <Route element={<Footer/>}> */}
          <Route path='/' element={<Home/>}/>

          
          
        
          
          
        </Route>
        
      </Routes>
      
      
      
      </BrowserRouter>
    </>
  )
}

export default App
