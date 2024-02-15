// // // PreviousOrdersList.js
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import CustomerNavBar from '../../components/CustomerComponents/CustomerNavBar';
// // import { useData } from "../../DataContext";
// // import './PreviousOrdersList.css'
// // import AboutBackGround from  '../../Assets/about-background.png'

// // const PreviousOrdersList = () => {
// //   const { data } = useData();

// //   return (
// //     <div>
// //       <CustomerNavBar />
// //       <div className="home-bannerImage-container" style={{marginRight : '1400px'}}>
// //           <img src={AboutBackGround} alt=""  />
// //         </div>
// //       <h3 className="mb-4 header5">Previous Orders List</h3>

// //       <table className="table table-bordered">
// //         <thead className="thead-dark">
// //           <tr>
// //             <th>Order ID</th>
// //             <th>Item Name</th>
// //             <th>Quantity</th>
// //             <th>Price</th>
// //             <th>Date</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.map((order) => (
// //             <tr key={order.orderId}>
// //               <td>{order.orderId}</td>
// //               <td>{order.itemName}</td>
// //               <td>{order.quantity}</td>
// //               <td>{order.price}</td>
// //               <td>{order.date}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       {/* Add a Link to go back to PreviousOrders */}
// //       <Link to="/customer/" className="btn btn-primary">
// //         Go Back
// //       </Link>
// //     </div>
// //   );
// // };

// // export default PreviousOrdersList;
// // PreviousOrdersList.js
// import React from "react";
// import { Link } from "react-router-dom";
// import CustomerNavBar from '../../components/CustomerComponents/CustomerNavBar';
// import { useData } from "../../DataContext";
// import AboutBackGround from '../../Assets/about-background.png';

// const PreviousOrdersList = () => {
//   const { data } = useData();

//   // Inline CSS for table styling
//   const tableStyle = {
//     border: '1px solid #dee2e6',
//     borderRadius: '10px', // Add rounded borders
//     marginBottom: '1.5rem',
//   };

//   return (
//     <div>
//       <CustomerNavBar />
//       <div className="home-bannerImage-container" style={{ marginRight: '1400px' }}>
//         <img src={AboutBackGround} alt="" />
//       </div>
//       <h3 className="mb-4 header5">Previous Orders List</h3>

//       {/* Apply inline styles for the table */}
//       <table className="table table-bordered" style={tableStyle}>
//         <thead className="thead-dark">
//           <tr>
//             <th>Order ID</th>
//             <th>Item Name</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((order) => (
//             <tr key={order.orderId}>
//               <td>{order.orderId}</td>
//               <td>{order.itemName}</td>
//               <td>{order.quantity}</td>
//               <td>{order.price}</td>
//               <td>{order.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Add a Link to go back to PreviousOrders */}
//       <Link to="/customer/" className="btn btn-primary">
//         Go Back
//       </Link>
//     </div>
//   );
// };

// export default PreviousOrdersList;

// // PreviousOrdersList.js
// import React from "react";
// import { Link } from "react-router-dom";
// import CustomerNavBar from '../../components/CustomerComponents/CustomerNavBar';
// import { useData } from "../../DataContext";
// import './PreviousOrdersList.css'
// import AboutBackGround from  '../../Assets/about-background.png'

// const PreviousOrdersList = () => {
//   const { data } = useData();

//   return (
//     <div>
//       <CustomerNavBar />
//       <div className="home-bannerImage-container" style={{marginRight : '1400px'}}>
//           <img src={AboutBackGround} alt=""  />
//         </div>
//       <h3 className="mb-4 header5">Previous Orders List</h3>

//       <table className="table table-bordered">
//         <thead className="thead-dark">
//           <tr>
//             <th>Order ID</th>
//             <th>Item Name</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((order) => (
//             <tr key={order.orderId}>
//               <td>{order.orderId}</td>
//               <td>{order.itemName}</td>
//               <td>{order.quantity}</td>
//               <td>{order.price}</td>
//               <td>{order.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Add a Link to go back to PreviousOrders */}
//       <Link to="/customer/" className="btn btn-primary">
//         Go Back
//       </Link>
//     </div>
//   );
// };

// export default PreviousOrdersList;
// PreviousOrdersList.js
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import CustomerNavBar from "../../components/CustomerComponents/CustomerNavBar";
import { useData } from "../../DataContext";
import AboutBackGround from "../../Assets/about-background.png";
import TableColumnFilter from "../../components/common/TableColumnFilter";
import TableComponent from "../../components/common/TableComponent";
import { PreviousOrderTableColumns } from "../../components/CustomerComponents/PreviousOrderTableColumns";

const PreviousOrdersList = () => {
  const columns = useMemo(() => PreviousOrderTableColumns, []);
  const { data } = useData();
  console.log("data " + data);
  // Inline CSS for table styling
  const tableStyle = {
    border: "1px solid #dee2e6",
    borderRadius: "10px", // Add rounded borders
    marginBottom: "1.5rem",
  };

  return (
    <div>
      <CustomerNavBar />
      <div
        className="home-bannerImage-container"
        style={{ marginRight: "1400px" }}
      >
        <img src={AboutBackGround} alt="" />
      </div>
      <h3
        className="mb-4 header5"
        style={{ textAlign: "center", marginTop: "2.5rem" }}
      >
        Previous Orders List
      </h3>

      <TableComponent
        colStructure={columns}
        data={data}
        filterClass={TableColumnFilter}
      ></TableComponent>

      {/* Add a Link to go back to PreviousOrders */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/customer/" className="btn btn-primary">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default PreviousOrdersList;
