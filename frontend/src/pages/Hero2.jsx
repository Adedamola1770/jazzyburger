import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import image4 from '../assets/image 4.jpg';
import rectangle from '../assets/Rectangle 5.jpg';
import rectangle2 from '../assets/burger2.jpg';
import { Link, Outlet } from "react-router-dom";
import plus from '../assets/plus icon.jpg';


const Hero2 = () => {
  return (
    
      <div   className='d-flex justify-content-between gap-3'>
        <div className='d-flex justify-content-between pt-5 gap-3'>
        
    <img src={image4} alt="jazzy image" className='imgg d-none d-lg-block h-100 w-100'/>
    </div>
    <div  className='d-flex justify-content-end pt-5 gap-3'>
    <div>
    <Card style={{ width: '18rem' }} className='crd'>
      <Card.Img variant="top" src={rectangle} />
      <Card.Body>
        <Card.Title> Double Beef Burger</Card.Title>
        <Card.Text>
          Total Price
        </Card.Text>
        <Card.Text>
          $10,500
        </Card.Text>
        <button className='btn btn-danger btn-sm w-50'><Link to={'/frontend/src/pages/AddToCart.jsx'} className='text-deco text-light'>+ Add To Cart</Link></button>
      </Card.Body>
      
      
    </Card>
    <div className='pt-5'>
    <Card style={{ width: '18rem' }} className='crd'>
      <Card.Img variant="top" src={rectangle2} />
      <Card.Body>
        <Card.Title>Double Beef Burger</Card.Title>
        <Card.Text>
          Total Price
        </Card.Text>
        <Card.Text>
          $10,500
        </Card.Text>
        <button className='btn btn-danger btn-sm w-50'>+ Add To Cart</button>
      </Card.Body>
      
      
    </Card>
    </div>
    </div>
<div>
    <Card style={{ width: '18rem' }} className='crd'>
      <Card.Img variant="top" src={rectangle} />
      <Card.Body>
        <Card.Title>Double Beef Burger</Card.Title>
        <Card.Text>
          Total Price
        </Card.Text>
        <Card.Text>
          $10,500
        </Card.Text>
        <button className='btn btn-danger btn-sm w-50'>+ Add To Cart</button>
      </Card.Body>
      
      
    </Card>
    <div className='pt-5'>
    <Card style={{ width: '18rem' }} className='crd'>
      <Card.Img variant="top" src={rectangle} />
      <Card.Body>
        <Card.Title>Double Beef Burger</Card.Title>
        <Card.Text>
          Total Price
        </Card.Text>
        <Card.Text>
          $10,500
        </Card.Text>
        <button className='btn btn-danger btn-sm w-50'>+ Add To Cart</button>
      </Card.Body>
      
      
    </Card>
    </div>
    </div>
<div>
    <Card style={{ width: '18rem' }} className='crd'>
      <Card.Img variant="top" src={rectangle} />
      <Card.Body>
        <Card.Title>Double Beef Burger</Card.Title>
        <Card.Text>
          Total Price
        </Card.Text>
        <Card.Text>
          $10,500
        </Card.Text>
        <button className='btn btn-danger btn-sm w-50'>+ Add To Cart</button>
      </Card.Body>
      
      
    </Card>
    <div className='pt-5'>
    <Card style={{ width: '18rem' }} className='crd'>
      <Card.Img variant="top" src={rectangle} />
      <Card.Body>
        <Card.Title>Double Beef Burger</Card.Title>
        <Card.Text>
          Total Price
        </Card.Text>
        <Card.Text>
          $10,500
        </Card.Text>
        <button className='btn btn-danger btn-sm w-50'>+ Add To Cart</button>
      </Card.Body>
      
      
    </Card>
    </div>
    
    </div>
    
    </div>
    <div>
    
    </div>
    
    
    

        </div>
        
        
      
        
    
  )
}

export default Hero2


{/* <img src={rectangle} alt="burger-img" />
    <img src={rectangle2} alt="burger-img" /> */}