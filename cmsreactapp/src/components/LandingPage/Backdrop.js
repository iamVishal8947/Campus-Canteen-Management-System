// Backdrop.js
import React from 'react';
import './Backdrop.css'; // Import CSS file for backdrop styles

const Backdrop = ({ children, onClick }) => {
  return (
    <div className="backdrop" onClick={onClick}>
      {children}
    </div>
  );
};

export default Backdrop;
