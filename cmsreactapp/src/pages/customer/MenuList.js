import React from "react";
import { useState, useEffect } from "react";
import MenuItemService from "../../services/MenuItemService ";
import { Link } from "react-router-dom";
import  './MenuList.css'
import defimg from '../../Assets/pick-meals-image.png' ;
export default function MenuList() {
  const placeholderImage = "https://via.placeholder.com/100";
  //---------------------------

  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchMenuItems = () => {
      try {
        const items = MenuItemService.getItems();
        setMenuItems(items);
        console.log("In use effect");
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    console.log("In use effect 2");
    fetchMenuItems();
  }, []);

  const addToOrder = (item, name) => {
    const updatedOrder = { ...order };
    console.log(item.item_name + "  " + item.item_price);
    console.log(order + "order ");
    console.log(updatedOrder[item.item_id]);
    console.log(updatedOrder + " Before");
    updatedOrder[item.item_id] = (updatedOrder[item.item_id] || 0) + 1;
    console.log(updatedOrder + " After");
    setOrder(updatedOrder);
  };

  const removeFromOrder = (item) => {
    const updatedOrder = { ...order };
    if (updatedOrder[item.item_id] > 0) {
      updatedOrder[item.item_id] -= 1;
      setOrder(updatedOrder);
    }
  };

  const totalAmount = Object.keys(order).reduce((total, itemId) => {
    const menuItem = menuItems.find(
      (item) => item.item_id === parseInt(itemId)
    );
    return total + menuItem.item_price * order[itemId];
  }, 0);

  return (


<div className="container"> {/* Apply the orange theme background */}
<h1>Food Menu Selection</h1>

<table className="table table-bordered">
  <thead className="thead-dark">
    <tr>
      <th>Image</th>
      
    </tr>
  </thead>
  <tbody>
    <div  className="menu-items-container">
    {menuItems.map((item) => (
      
      
   <div className="menu-item" key={item.item_id}>
      
      <div className="menu-item-details">
        <div className="menu-item-name">{item.item_name}</div>
        <img
        src={item.image_link || defimg}
        alt={item.item_name}
        className="menu-item-image"
      />
        <div className="menu-item-price">Price: {item.item_price}</div>
        <div className="menu-item-buttons">
          <button
            className="btn btn-success"
            onClick={() => addToOrder(item, item.item_name)}
          >
            +
          </button>
          <span>{order[item.item_id] || 0}</span>
          <button
            className="btn btn-danger"
            onClick={() => removeFromOrder(item)}
          >
            -
          </button>
        </div>
      </div>
    </div>
    
    
     
    ))}
    </div>
  </tbody>
</table>

<h2>Order Checkout List</h2>
<table className="table table-bordered">
  <thead className="thead-dark">
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(order).map((itemId) => {
      const menuItem = menuItems.find(
        (item) => item.item_id === parseInt(itemId)
      );

      return (
        <tr key={itemId}>
          <td>{menuItem.item_name}</td>
          <td>{menuItem.item_price}</td>
          <td>{order[itemId]}</td>
        </tr>
      );
    })}
  </tbody>
</table>
<div className="total-amount">
  <h4>
    <strong>Total Amount:</strong> ₹ {totalAmount.toFixed(2)}
  </h4>
</div>

<button type="button" id="order_button" className="btn btn-primary">
  Place Order
</button>
</div>
);
}