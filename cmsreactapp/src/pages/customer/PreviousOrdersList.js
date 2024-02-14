// PreviousOrdersList.js
import React from "react";
import { Link } from "react-router-dom";
import CustomerNavBar from '../../components/CustomerComponents/CustomerNavBar';
import { useData } from "../../DataContext";

const PreviousOrdersList = () => {
  const { data } = useData();

  return (
    <div>
      <CustomerNavBar />
      <h3 className="mb-4 header5">Previous Orders List</h3>

      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Order ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.itemName}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add a Link to go back to PreviousOrders */}
      <Link to="/customer/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
};

export default PreviousOrdersList;
