
// import React from 'react';
// import CustomerNavBar from '../../components/CustomerComponents/CustomerNavBar';
// import './PreviousOrdersList.css'

// const PreviousOrdersList = () => {
//   const previousOrders = [
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
//         <CustomerNavBar></CustomerNavBar>
//       <h3 className="mb-4 header5">Previous Orders List</h3>
//       <table className="table table-bordered">
//         <thead className="thead-dark">
//           <tr>
//             <th>Order ID</th>
//             <th>Item Name</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Date</th>
//             {/* Add other order details... */}
//           </tr>
//         </thead>
//         <tbody>
//           {previousOrders.map((order) => (
//             <tr key={order.orderId}>
//               <td>{order.orderId}</td>
//               <td>{order.itemName}</td>
//               <td>{order.quantity}</td>
//               <td>{order.price}</td>
//               <td>{order.date}</td>
//               {/* Display other order details... */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PreviousOrdersList;



import React from 'react';
import CustomerNavBar from '../../components/CustomerComponents/CustomerNavBar';
import './PreviousOrdersList.css';

const PreviousOrdersList = ({ location }) => {
    console.log(location+"location");
  const previousOrders = location && location.state && location.state.orders;

  return (
    <div>
      <CustomerNavBar />
      <h3 className="mb-4 header5">Previous Orders List</h3>
      <table className="custom-table">
        <thead className="custom-table-head">
          <tr>
            <th>Order ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
            {/* Add other order details... */}
          </tr>
        </thead>
        <tbody>
          {previousOrders &&
            previousOrders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.itemName}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.date}</td>
                {/* Display other order details... */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousOrdersList;
