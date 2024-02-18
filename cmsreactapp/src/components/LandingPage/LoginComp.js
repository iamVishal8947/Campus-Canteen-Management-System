import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../../Assets/bgbgbg.jpeg";
import StudentService from "../../services/StudentService";

export default function LoginComp() {
  const password = "07072000" // 
  const passwords = {1 :"pass@123", 2:"2222",3:"3333", 4: "4444", 7:"07072000", "admin":"admin",14 : "2001-02-18" }
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
  // const getStudentFromEmail = async (email) => {
  //   await StudentService.getStudentByEmail(email).then((res) => {
  //     console.log(res.data)
  //     // const studentObj = res.data;  
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  // }
  //----------------------------------------------------
  // const submitForm = () => {
  //   const username = document.getElementById('username').value
  //   const pwd = document.getElementById('password').value

  //   const studentCredentials = {
  //     userName: username,
  //     password : pwd
  //   }
  //   StudentService.login(studentCredentials).then((res) => {
      
  //     // alert(res.data)
  //     if(res.data=== "Login successful1"){
  //       alert("Login Successful Change your password from Dashboard")
  //       localStorage.setItem("username", username);
  //       StudentService.getStudentByEmail(username).then((res) => {
          
  //         console.log(res.data)
  //         // const studentObj = res.data;  
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //       navigate("/student/changePassword/")
  //     }
  //     else if(res.data === "Login successful1 successful2"){
  //       alert("Login successful")
  //       localStorage.setItem("username", username);

  //       navigate("/student/dashboard")
  //     }
  //     else if(res.data === "Invalid password"){
  //       alert("Password Invalid")
  //       window.location.reload();
  //     }
  //     else if(res.data === "Invalid username"){
  //       alert("Username invalid")
  //     }
      
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  
   //------------------------------------------------------------- 
  //   if(username === "admin" && pwd === "admin"){
  //     localStorage.setItem("username", username);
  //     alert("Admin Login Successful!");
  //     navigate( "/admin/dashboard" );
  //   }
  //   else{
  //   // alert(username)


  //   if(passwords[Number(username)]!=undefined){ //check if the username is present

  //     if(passwords[Number(username)] === pwd){ //check if the password matches the username
  //       localStorage.setItem("username", username);
  //       alert(`Welcome back `);
  //       navigate('/student/dashboard');
  //       }else{
  //         alert("wrong  password!");
  //       }
      
  //   }else{
  //     alert ('Invalid User ID')
      
  //   }
  // }
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
    const submitForm = async () => {
      const username = document.getElementById('username').value;
        const pwd = document.getElementById('password').value;
      if(username==="admin"&&pwd==="admin"){
        alert("Welcome Back Admin")
        localStorage.setItem("username","admin")
        navigate("/admin/dashboard")
      }
      else{
      try {
       
    
        const studentCredentials = {
          userName: username,
          password: pwd
        };
    
        const res = await StudentService.login(studentCredentials);
        console.log()
        if (res.data === "Login successful1") {
          const studentRes = await StudentService.getStudentByEmail(username);
          alert("Login Successful Change your password from Dashboard");
          localStorage.setItem("email", username);
          
          console.log(studentRes.data);
          localStorage.setItem("username",studentRes.data.studentId)
          localStorage.setItem("name",studentRes.data.name)
          navigate("/student/changePassword/");
        } else if (res.data === "Login successful1 successful2") { 
          const studentRes = await StudentService.getStudentByEmail(username);
          alert("Login successful! Welcome " + studentRes.data.name);
          localStorage.setItem("email", username);
          
          console.log(studentRes.data)
          localStorage.setItem("username",studentRes.data.studentId)
          localStorage.setItem("name",studentRes.data.name)
          navigate("/student/dailymenu/");
        } else if (res.data === "Invalid password") {
          alert("Password Invalid");
          window.location.reload();
        } else if (res.data === "Invalid username") {
          alert("Username invalid");
        }
      } catch (err) {
        console.error(err);
      }
    }
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
