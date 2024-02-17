import React from "react";
import { useState, useEffect } from "react";
import MenuItemService from "../../services/MenuItemService ";
import { Link,useNavigate } from "react-router-dom";

import defimg from '../../Assets/pick-meals-image.png';

export default function MenuList() {
  const placeholderImage = "https://via.placeholder.com/100";
  //---------------------------

  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState({});
  const navigate = useNavigate();
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

  const placeOrder = () => {
    console.log(order)
    navigate("/student/placeorder", { state: { order } });
  }
  return (
    <div className="menu-container" style={{ background: 'rgb(245, 228, 193)', padding: '20px', borderRadius: '10px',marginLeft: 'auto', marginRight: 'auto', maxWidth: '90%'  }}>
      <h1 style={{ textAlign: 'center' }}>Food Menu Selection</h1>
      <div className="menu-items-container">
        {menuItems.map((item) => (
          <div className="menu-item" key={item.item_id}>
            <div className="menu-item-details">
              <div className="menu-item-name">{item.item_name}</div>
              <img
                src={item.image_link || defimg}
                alt={item.item_name}
                className="menu-item-image"
                onClick={() => addToOrder(item, item.item_name)}
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
      <h2 style={{ textAlign: 'center', marginTop: "60px" , backgroundColor : "#888" }}>Order Checkout List</h2>
      <table className="table table-bordered" style={{ textAlign: 'center', marginTop: "60px" , backgroundColor : "#888" }} >
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
              <tr key={itemId} >
                <td>{menuItem.item_name}</td>
                <td>{menuItem.item_price}</td>
                <td>{order[itemId]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total-amount" style={{ textAlign: 'center', marginTop: '60px', backgroundColor : "#888" }}>
        <h4>
          <strong>Total Amount:</strong> ₹ {totalAmount.toFixed(2)}
        </h4>
      </div>
      <button type="button" id="order_button" className="btn btn-primary" style={{ display: 'block', margin: '0 auto' }} onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}
