// import React from 'react'
// import './Customer.css'
// import CustomerNavBar from './CustomerNavBar'
// import FoodMenu from './FoodMenu'
// export default function Customer() {
//   return (
//     <div>
//         <CustomerNavBar />

//    <div className="container">
       
        
//         <div className="row">
//         <div className="col-8 component1"> <FoodMenu></FoodMenu> </div>
//         <div className="col-4 component2">Selected List</div>
//       </div>        
//        <button type="button" class="btn btn-primary" id='order-btn'>ORDER</button>
      


// import React from 'react';
// import './Customer.css';
// import CustomerNavBar from './CustomerNavBar';
// import FoodMenu from './FoodMenu';

// export default function Customer() {
//   return (
//     <div>
//       <CustomerNavBar />

//       <div className="container mt-4">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Food Menu</h5>
//                 <FoodMenu />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Selected List</h5>
//                 {/* Add your content for the selected list */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <button type="button" className="btn btn-primary mt-3" id="order-btn">
//           ORDER
//         </button>

//         <div className="row mt-4">
//           <div className="col-lg-6">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Feedback</h5>
//                 {/* Add your content for the feedback */}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Wallet Balance</h5>
//                 {/* Add your content for the wallet balance */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import './Customer.css';
import CustomerNavBar from './CustomerNavBar';
import FoodMenu from './FoodMenu';

export default function Customer() {
  return (
    <div>
      <CustomerNavBar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Food Menu</h5>
                <FoodMenu />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Selected List</h5>
                {/* Add your content for the selected list */}
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
