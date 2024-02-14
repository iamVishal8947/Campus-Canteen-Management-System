import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../../Assets/imgblurbg.jpg" ;
export default function LoginComp() {

    const [formDetails, setFormDetails] = useState({
        id: "",
        name: "",
        email: "",
        pwd: "",
        mob: "",
        dob: "",
        course: "",
      });
      const [formErrors, setErrors] = useState({
        id: "",
        name: "",
        email: "",
        pwd: "",
        mob: "",
        dob: "",
        course: "",
      });
      const today = new Date();
      const navigate = useNavigate();
    
    //   useEffect(() => {
    //     if (props.action !== "add") setFormDetails({ ...props.customer });
    //   }, [props.customer]);
    
      useEffect(()=>{
        console.log(formErrors)
      },[formErrors])
    
      const handleChange = (event) => {
        let { name, value } = event.target;
        setFormDetails({ ...formDetails, [name]: value });
      };
    
      const validateData = () => {
        let id = document.getElementById("id").value;
        /*Check how to add error message stating that id is already registered.
        Steps:
        1. addForm submission
        2. Check in db
        3. Open add form to re-enter details stating customer registered.
        4. Repeat till new id entered
        */
        let errFlag = false;
        let name = document.getElementById("name").value;
        let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        let dob = new Date(document.getElementById("dob").value);
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
          age--;
        }
        let course = document.getElementById("course").value;
        let errors={}
        if (!regName.test(name)) {
          errors.name="Invalid name. Kindly Enter First_Name Last_Name";
          errFlag = true;
        } else {
          errors.name= ""
        }
        if (age < 18) {
          errors.dob= "Age must be above 18"
          errFlag = true;
        } else {
            errors.dob= ""
        }
        if (course === undefined || course === "" || course === "notSelected") {
          errors.course="Please select a Course." 
          errFlag = true;
        } else {
          errors.course=""
        }
        setErrors(errors) //set the returned value from this function to useGlobally
        
      };
    
      const resetForm = () => {
        setFormDetails({
          id: "",
          name: "",
          email: "",
          pwd: "",
          mob: "",
          dob: "",
          course: "",
        });
      };
    
    //   const submitHandler = () => {
    //     props.takeAction(formDetails);
    //   };
    
      const goToDashboard = () => {
        navigate("/");
      };
      const submitForm = ()=>{
        // navigate("/customer/")
        // call login backend
        const username = document.getElementById('mob').value;
        const password = document.getElementById('dob').value;
    
        if (username === 'admin' && password === 'admin') {
          navigate("/admin")
        } else if (username === '000000000000' && password === 'customer') {
          navigate("/customer")
        } else {
          // Handle invalid credentials
          alert('Invalid username or password');
        }
      }
  return (
    <div className="container vh-100 w-100 align-items-center" style={{backgroundImage : `url(${bgimg})`, height: "100%"}}>
      <div className="row g-3" style={{marginTop : "0px"}}>
        <div className="col-md-3"></div>
        <div className="col-md-6 border border-primary">
          <br />
          
          <br />
          <form >
            

              
            
            <div className="row mb-3">
              <label htmlFor="box" className="col-sm-5 col-form-label">
                Username 
              </label>

              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control"
                  required
                  name="mob"
                  id="mob"
                  placeholder="Enter your username"
                  onChange={handleChange}
                ></input>
                <span id="mobError" style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.mob}
                </span>
              </div>
            </div>

            <div className="row mb-3">
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
                  id="dob"
                  
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={goToDashboard}
                >
                  Cancel
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={submitForm}
                >
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
  )
}
