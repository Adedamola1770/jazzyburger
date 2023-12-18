import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Hero2 from '../pages/Hero2';
import Footer from '../pages/Footer';


const Home = () => {
    useEffect(()=>{
        document.title = 'Jazzyburger || home'
    })
  return (
    <>
    <Hero/>
    <Hero2/>
    <Footer/>
 
   
    </>
  )
}

export default Home