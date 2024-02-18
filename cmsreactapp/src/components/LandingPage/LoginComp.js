import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../../Assets/bgbgbg.jpeg";

export default function LoginComp() {
  const password = "07072000" // 
  const passwords = {1 :"1111", 2:"2222",3:"3333", 4: "4444", 7:"07072000", "admin":"admin" }
  const usernames = [1,2,3,4,5,6,7]
  const [formDetails, setFormDetails] = useState({
    username: "",
    pwd: "",
  });

  const [formErrors, setErrors] = useState({
    username: "",
    pwd: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Check if username exists in localStorage
    
    const storedUsername = localStorage.getItem("username");
    console.log("stored USer name = "+storedUsername)
    if (storedUsername) {
      // Redirect based on the username
      if (storedUsername === "admin") {
        navigate("/admin");
      } else {
        navigate("/student/dashboard");
      }
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const submitForm = () => {
    
    const username = document.getElementById('username').value
    const pwd = document.getElementById('password').value
    if(username === "admin" && pwd === "admin"){
      localStorage.setItem("username", username);
      alert("Admin Login Successful!");
      navigate( "/admin/dashboard" );
    }
    else{
    alert(username)

    
    if(passwords[Number(username)]!=undefined){ //check if the username is present

      if(passwords[Number(username)] === pwd){ //check if the password matches the username
        localStorage.setItem("username", username);
        alert(`Welcome back ${username}!`);
        navigate('/student/dashboard');
        }else{
          alert("wrong  password!");
        }
      
    }else{
      alert ('Invalid User ID')
      
    }
  }
    // Perform login validation
    // if (username === "admin" && pwd === "admin") {
    //   // Redirect to admin page
    //   localStorage.setItem("username", "admin");
    //   navigate("/admin/dashboard");
    //   // Store username in localStorage
      
    // } else if (username === "student" && pwd === "student") {
    //   // Redirect to student dashboard
    //   localStorage.setItem("username", "student");
    //   navigate("/student/dashboard");
    //   // Store username in localStorage
      
    // } else {
    //   // Handle invalid credentials
    //   alert("Invalid username or password");
    // }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url(${bgimg})` }}>
      <div style={{ border: "1px solid #007bff", padding: "20px", borderRadius: "5px", width: "400px" }}>
        <form>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="username" style={{ color: "black", marginRight: "10px" }}>
              Username
            </label>
            <input
              type="text"
              required
              name="username"
              id="username"
              placeholder="Enter your username"
              onChange={handleChange}
              style={{ width: "calc(100% - 80px)", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
            />
            <span style={{ color: "red", fontSize: "10px" }}>{formErrors.username}</span>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="password" style={{ color: "black", marginRight: "10px" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              id="password"
              onChange={handleChange}
              style={{ width: "calc(100% - 80px)", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
            />
            <span style={{ color: "red", fontSize: "10px" }}>{formErrors.password}</span>
          </div>

          <div>
            <button type="button" style={{ marginRight: "10px", padding: "5px 10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "3px", cursor: "pointer" }} onClick={() => navigate("/")}>
              Cancel
            </button>
            <button type="button" style={{ padding: "5px 10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "3px", cursor: "pointer" }} onClick={submitForm}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
