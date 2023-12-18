import React from 'react'
import { Link, Outlet } from "react-router-dom";
import add from '../assets/add to cart.jpg'
import '../styles/AddToCart.css'


const AddToCart = () => {
  return (
    <div className='row   pt-5  cart gap-'>
        <div className='col-8 border rounded container h-50 w-50  shadow'>
            <h2 className='fw-bold'>Review and Place Order</h2>
            <p>Review/Add address and fufill payments to complete your purchase</p>
            <hr />
            <h2>Recipient Information</h2>
            <button className='btn btn-dark w-25'>Add Recipient</button>
            <hr />
            <h2>Delivery Address</h2>
            <button className='btn btn-dark w-25'>Add Delivery Address</button>
            <hr />
            <button className='btn btn-success w-75 mb-3'>Place Your Order</button>
        </div>

        <div className='col-4 border rounded container shadow'>
            <h3 className='fw-bold'>Your Order Form</h3>
            <hr />
            <div>
            <h3 className='text-danger'>Double Grilled Chicken Burger</h3>
            <img src={add} alt="add to cart image" />
            </div>
            <hr />
            <h4>Items Total</h4>
            <h4>Discount</h4>
            <h4>Delivery Charge</h4>
            <hr />
            <h5>Total:</h5>
        </div>
    </div>
  )
}

export default AddToCart