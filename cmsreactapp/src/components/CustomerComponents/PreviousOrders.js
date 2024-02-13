// // PreviousOrders.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const PreviousOrders = () => {
//   // Assume you have a state or data for the recent order
// //   const recentOrder = {
// //     orderId: 1,
// //     itemName:'Vada Pav',
// //     quantity : 1,
// //     price : 10,
// //     date: '2024-02-15',
// //     // Other order details...
// //   };

// const previousOrders = [
//     {
//       orderId: 1,
//       itemName: 'Vada Pav',
//       quantity: 1,
//       price: 10,
//       date: '2024-02-15',
//       // Other order details...
//     },
//     {
//       orderId: 2,
//       itemName: 'Tea',
//       quantity: 1,
//       price: 10,
//       date: '2024-02-15',
//       // Other order details...
//     },
//     {
//       orderId: 3,
//       itemName: 'Pohe',
//       quantity: 1,
//       price: 20,
//       date: '2024-02-14',
//       // Other order details...
//     },
//   ];

//   return (
//     <div>
//       {/* Display one recent order */}
//       <p>Order ID: {recentOrder.orderId}</p>
//       <p>Item Name: {recentOrder.itemName}</p>
//       <p>Qty: {recentOrder.quantity}</p>
//       <p>Price: {recentOrder.orderId}</p>
//       <p>Date: {recentOrder.date}</p>
//       {/* Add other order details... */}

//       {/* Button to navigate to PreviousOrdersList */}
//       <Link to="/previousorderslist" className="btn btn-primary">
//         View All Orders
//       </Link>
//     </div>
//   );
// };

// export default PreviousOrders;

import React from "react";
import { Link } from "react-router-dom";
import PreviousOrdersList from "../../pages/customer/PreviousOrdersList";

const PreviousOrders = () => {
  const previousOrders = [
    {
      orderId: 1,
      itemName: "Vada Pav",
      quantity: 1,
      price: 10,
      date: "2024-02-15",
    },
    {
      orderId: 2,
      itemName: "Tea",
      quantity: 1,
      price: 10,
      date: "2024-02-15",
    },
    {
      orderId: 3,
      itemName: "Pohe",
      quantity: 1,
      price: 20,
      date: "2024-02-14",
    },
  ];

  // Display one recent order
  const recentOrder = previousOrders[0];

  return (
    <div>
      <p>Order ID: {recentOrder.orderId}</p>
      <p>Item Name: {recentOrder.itemName}</p>
      <p>Qty: {recentOrder.quantity}</p>
      <p>Price: {recentOrder.price}</p>
      <p>Date: {recentOrder.date}</p>

      {/* Button to navigate to PreviousOrdersList */}
      <Link
        to={{
          pathname: "/customer/previousorderslist",
          state: { orders: previousOrders },
        }}
        className="btn btn-primary"
      >
        View All Orders
      </Link>

      
    </div>
  );
};

export default PreviousOrders;
