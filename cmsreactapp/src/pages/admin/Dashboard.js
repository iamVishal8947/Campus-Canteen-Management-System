import React from 'react'
import CustomerControls from '../../components/admin/CustomerControls'

export default function Dashboard() {
  return (
    
    <div>
      
<div className="container" style={{marginTop : "50px"}}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body" style={{height : "300px",backgroundColor : "aquamarine"}}>
              Menu
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body" style={{height : "300px",backgroundColor : "grey"}}>
              Revenue
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body" style={{height : "300px",backgroundColor : "grey"}}>
              Pending Orders
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body" style={{height : "300px",backgroundColor : "aquamarine"}}>
              Fulfilled Orders
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}
