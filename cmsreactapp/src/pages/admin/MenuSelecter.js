import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import MenuTable from './MenuTable'; // Assuming you have a MenuTable component

export default function MenuSelecter() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToMenu = (menuItem) => {
    console.log(menuItem)
    setSelectedItems((prevSelected) => [...prevSelected, menuItem]);
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-10">
          <h2>Menu Items</h2>
          <MenuTable onAddToMenu={handleAddToMenu} />
          {/* Render your menu items here */}
        </div>
        <div className="col-md-3" style={{marginRight:"300px"}} >
        <h2>Today's Menu</h2>
          {/* <ul>
            {selectedItems.map((item) => (
              <li key={item.item_id}>
                {item.item_name} (ID: {item.item_id})
              </li>
            ))}
          </ul> */}
          <table className="table" style={{marginTop : "50px"}}>
            <thead >
              <tr >
                <th style={{backgroundColor : "#cfe2ff"}}>Item Name</th>
                <th style={{backgroundColor : "#cfe2ff"}}>ID</th>
                <th style={{backgroundColor : "#cfe2ff"}}>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.map((item) => (
                <tr key={item.item_id}>
                  <td>{item.item_name}</td>
                  <td>ID: {item.item_id}</td>
                  <td> <input type='number' className='qty' style={{width:"70px"}}/>  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
          <button className='btn btn-primary'>Submit Today's Menu</button>
        </div>
      </div>
    </div>
  );
}
