import React from "react";
import { useState, useEffect } from "react";
import MenuItemService from "../../services/MenuItemService ";
import { Link } from "react-router-dom";
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
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1>Food Menu Selection</h1>

      <table className="table table-bordered" style={{ width: "100%" }}>
        <thead className="thead-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Add/Remove</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.item_id}>
              <td>
                <img
                  src={item.image_link || placeholderImage}
                  alt={item.item_name}
                  className="img-fluid"
                  width="100"
                  height="100"
                  // Make the image responsive
                  onError={(e) => {
                    console.error("Error loading image:", e.target.src);
                    e.target.src = placeholderImage;
                  }}
                />
              </td>
              <td>{item.item_name}</td>
              <td>{item.item_price}</td>
              <td>
                <button
                  variant="success"
                  onClick={() => addToOrder(item, item.item_name)}
                >
                  +
                </button>
                <span>{order[item.item_id] || 0}</span>
                <button variant="danger" onClick={() => removeFromOrder(item)}>
                  -
                </button>
              </td>
            </tr>
          ))}
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
      {/* <Link
        to={{
          pathname: "/payment",
          state: { orderData: order, totalAmount: totalAmount },
        }}
      >
        <button type="button" className="btn btn-primary">
          Place Order
        </button>
      </Link> */}
      <button type="button" class="btn btn-primary">
        Place Order
      </button>
    </div>
  );
}
