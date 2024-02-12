import React, { useEffect, useState } from "react";


export default function CustomerForm(props) {
  const [formDetails, setFormDetails] = useState({
    id: "",
    name: "",
    email: "",
    pwd: "",
    mob: "",
    dob: "",
    course: "",
  });
  //const [formErrors, setErrors] = useState({});

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  
  const addCustomer=()=>{
    console.log("Inside add customer");
  }

  const editCustomer=()=>{
    console.log("Inside edit customer")
  }

  return (
    <div>
      <form>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="id" className="form-label">
              Customer Id
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              name="id"
              id="id"
              aria-describedby="idHelp"
              value={formDetails.id}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-auto">
            <span id="idHelp" className="form-text">
              Enter your id
            </span>
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="name" className="form-label">
              Customer Name
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="nameHelp"
              value={formDetails.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-auto">
            <span id="nameHelp" className="form-text">
              Enter your name as First_Name Middle_Name Last_Name
            </span>
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="email" className="form-label">
              Customer Email
            </label>
          </div>
          <div className="col-auto">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={formDetails.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-auto">
            <span id="emailHelp" className="form-text">
              Enter a valid mail id
            </span>
          </div>
        </div>
        {/* <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="email" className="form-label">
              Customer Password
            </label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              className="form-control"
              id="email"
              name="pwd"
              aria-describedby="pwdHelp"
              value={formDetails.pwd}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-auto">
            <span id="pwdHelp" className="form-text">
            The password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji
            </span>
          </div>
        </div> */}
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="mob" className="form-label">
              Mobile number
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              name="mob"
              id="mob"
              aria-describedby="mobHelp"
              value={formDetails.mob}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-auto">
            <span id="mobHelp" className="form-text">
              Enter 10 digit mobile number
            </span>
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="dob" className="form-label">
              Date of birth
            </label>
          </div>
          <div className="col-auto">
            <input
              type="date"
              className="form-control"
              name="dob"
              id="dob"
              aria-describedby="dobHelp"
              value={formDetails.dob}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-auto">
            <span id="dobHelp" className="form-text">
              Customer must be greater than 18 years of age
            </span>
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="id" className="form-label">
              Customer Course
            </label>
          </div>
          <div className="col-auto">
            <select
              className="form-select"
              name="course"
              id="course"
              onChange={handleChange}
            >
              <option value="notSelected">Select a course</option>
              <option value="DAC">DAC</option>
              <option value="DITISS">DITISS</option>
              <option value="DAI">DAI</option>
              <option value="DBDA">DBDA</option>
            </select>
          </div>
          <div className="col-auto">
            <span id="idHelp" className="form-text">
              Enter course name
            </span>
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
          {props.action==="add"?<button type="button" className="btn btn-primary" onClick={addCustomer}>Add Customer</button>:<button type="button" className="btn btn-primary" onClick={editCustomer}>Edit Customer</button>}
          </div>
        </div>
      </form>
    </div>
  );
}
