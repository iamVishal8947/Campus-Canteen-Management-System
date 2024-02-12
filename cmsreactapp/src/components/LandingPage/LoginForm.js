// LoginForm.js
import React from 'react';
import './LoginForm.css'; // Import CSS file for login form styles

const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from parent component
    onSubmit();
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Add your login form fields here */}
      </form>
    </div>
  );
};

export default LoginForm;
