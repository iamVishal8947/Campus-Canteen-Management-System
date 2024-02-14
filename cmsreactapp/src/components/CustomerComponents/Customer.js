import React from 'react';
// import './Customer.css';
import CustomerNavBar from './CustomerNavBar';
import FoodMenu from './FoodMenu';
import PreviousOrders from './PreviousOrders';
import BannerBackground from  '../../Assets/home-banner-background.png'

export default function Customer() {
  return (
    
    <div>
      <CustomerNavBar />
      <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body component1">
                <h5 className="card-title">Food Menu</h5>
                <FoodMenu />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Previous Orders</h5>
                <PreviousOrders></PreviousOrders>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Feedback</h5>
                {/* Add your content for the feedback */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wallet Balance</h5>
                {/* Add your content for the wallet balance */}
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-primary mt-3" id="order-btn">
          ORDER
        </button>
      </div>
    </div>
    
  );
}
