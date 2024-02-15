import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";

const PreviousOrders = () => {
  const navigate = useNavigate();
  const { setOrdersData } = useData();

  const previousOrders = [
    {
      orderId: 4,
      itemName: "Samosa",
      quantity: 1,
      price: 12,
      date: "2024-02-16",
    },
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

  const navigateToPreviousOrdersList = () => {
    setOrdersData(previousOrders);
    navigate("/customer/previousorderslist");
  };

  const recentOrder = previousOrders[0];

  return (
    <div>
      <p>Order ID: {recentOrder.orderId}</p>
      <p>Item Name: {recentOrder.itemName}</p>
      <p>Qty: {recentOrder.quantity}</p>
      <p>Price: {recentOrder.price}</p>
      <p>Date: {recentOrder.date}</p>

      {/* Button to navigate to PreviousOrdersList */}
      <Link to="/customer/previousorderslist" onClick={navigateToPreviousOrdersList} className="btn btn-primary">
        View All Orders
      </Link>
    </div>
  );
};

export default PreviousOrders;
