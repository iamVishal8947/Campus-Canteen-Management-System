import React from 'react'
import './Customer.css'
import CustomerNavBar from './CustomerNavBar'
import FoodMenu from './FoodMenu'
export default function Customer() {
  return (
    <div>
        <CustomerNavBar />

   <div className="container">
       
        
        <div className="row">
        <div className="col-8 component1"> <FoodMenu></FoodMenu> </div>
        <div className="col-4 component2">Selected List</div>
      </div>        
       <button type="button" class="btn btn-primary" id='order-btn'>ORDER</button>
      
        <div className="row">
        <div className="col-6 component1">Feedback</div>
        <div className="col-6 component2">Wallet Balance</div>
      </div>
    </div>
    </div>
  )
}


