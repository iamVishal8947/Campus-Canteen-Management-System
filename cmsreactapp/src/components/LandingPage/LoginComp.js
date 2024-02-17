import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../../Assets/imgblurbg.jpg";

export default function LoginComp() {
  const password = "07072000" // 
  const passwords = {1 :"1111", 2:"2222",3:"3333", 4: "4444", 7:"07072000" }
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
    const pwd = document.getElementById('pwd').value
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
    <div className="container vh-100 w-100 align-items-center" style={{ backgroundImage: `url(${bgimg})`, height: "100%" }}>
      <div className="row g-3" style={{ marginTop: "0px" }}>
        <div className="col-md-3"></div>
        <div className="col-md-6 border border-primary">
          <br />
          <br />
          <form>
            <div className="row mb-3">
              <label htmlFor="box" className="col-sm-5 col-form-label" style={{ color: "black" }}>
                Username
              </label>

              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control"
                  required
                  name="uSername"
                  id="username"
                  placeholder="Enter your username"
                  onChange={handleChange}
                ></input>
                <span id="mobError" style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.mob}
                </span>
              </div>
            </div>

            <div className="row mb-3" style={{ color: "black" }}>
              <label htmlFor="pwd" className="col-sm-5 col-form-label">
                Password
              </label>

              <div className="col-md-7">
                <input
                  type="password"
                  className="form-control"
                  name="pwd"
                  placeholder="Enter your password"
                  required
                  id="pwd"
                  onChange={handleChange}
                ></input>
                <span id="dobError" style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.dob}
                </span>
              </div>
            </div>

            <div className="row-mb-3">
              &nbsp;
              &nbsp;&nbsp;&nbsp;
              <span className="col-md-4">
                <button type="button" className="btn btn-primary" onClick={() => navigate("/")}>
                  Cancel
                </button>
                &nbsp;
                <button type="button" className="btn btn-primary" onClick={submitForm}>
                  Submit
                </button>
              </span>
            </div>

            <div className="row-mb-3">
              <br />
            </div>
          </form>
        </div>
      </div>
      <br></br>
    </div>
  );
}
