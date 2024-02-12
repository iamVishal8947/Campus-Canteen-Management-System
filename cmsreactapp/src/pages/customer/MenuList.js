import React from 'react'
import { useState,useEffect } from 'react';
import MenuItemService from '../../services/MenuItemService ' 
export default function MenuList() {

  const placeholderImage = 'https://via.placeholder.com/100'
    //---------------------------

    const [menuItems, setMenuItems] = useState([]);
    const [order, setOrder] = useState({});
  
    useEffect(() => {
      const fetchMenuItems =  () => {
        try {
          const items = MenuItemService.getItems();
          setMenuItems(items);
        } catch (error) {
          console.error('Error fetching menu items:', error);
        }
      };
  
      fetchMenuItems();
    }, []);
  
    const addToOrder = (item) => {
      const updatedOrder = { ...order };
      updatedOrder[item.item_id] = (updatedOrder[item.item_id] || 0) + 1;
      setOrder(updatedOrder);
    };
  
    const removeFromOrder = (item) => {
      const updatedOrder = { ...order };
      if (updatedOrder[item.item_id] > 0) {
        updatedOrder[item.item_id] -= 1;
        setOrder(updatedOrder);
      }
    };
  
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <h1>Food Menu Selection</h1>
        {/*<div>
          {menuItems.map(item => (
            <div key={item.item_id}>
              <img src={item.image_link || placeholderImage} 
              alt={item.item_name} style={{ width: '100px', height: '100px' }} />
              <span>{item.item_name}</span>
              <button onClick={() => addToOrder(item)}>+</button>
              <span>{order[item.item_id] || 0}</span>
              <button onClick={() => removeFromOrder(item)}>-</button>
            </div>
          ))}
        </div>
          <div> */}

<table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th> </th>
            <th>Name</th>
            <th>Price</th>
            <th>Add/Remove</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map(item => (
            <tr key={item.item_id}>
              <td><img
                src={item.image_link || placeholderImage}
                alt={item.item_name}
                style={{ width: '100px', height: '100px' }}
                onError={(e) => { 
                  console.error('Error loading image:', e.target.src);
                  e.target.src = placeholderImage;
                }}
              /></td>
              <td>{item.item_name}</td>
              <td>{item.item_price}</td>
              <td>
                <button onClick={() => addToOrder(item)}>+</button>
                <span>{order[item.item_id] || 0}</span>
                <button onClick={() => removeFromOrder(item)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

          <h2>Order Checkout List</h2>
          <ul>
            {Object.keys(order).map(itemId => (
              <li key={itemId}>{menuItems.find(item => item.item_id === parseInt(itemId)).item_name} - Quantity: {order[itemId]}</li>
            ))}
          </ul>
        
      </div>
    );
  };
