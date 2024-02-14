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
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Menu Items</h2>
          <MenuTable onAddToMenu={handleAddToMenu} />
          {/* Render your menu items here */}
        </div>
        <div className="col-md-6">
          <h2>Today's Menu</h2>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
