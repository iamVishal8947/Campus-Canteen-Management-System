import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerForm(props) {
  const [formDetails, setFormDetails] = useState({
     
    name: "",
    studentId: 0,
        email: "",
        password: "0000",
        mobileNo: "",
        balance: 0,
        dob: "",
        courseName: ""
  });
  const [formErrors, setErrors] = useState({
  
    name: "",
    studentId: 0,
        email: "",
        password: "",
        mobileNo: "",
        balance: 0,
        dob: "",
        courseName: ""
  });
  const today = new Date();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.action !== "add") setFormDetails({ ...props.customer });
  }, [props.customer]);

  useEffect(()=>{
    console.log(formErrors)
  },[formErrors])

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const validateData = () => {
    // let id = document.getElementById("id").value;
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
    let course = document.getElementById("courseName").value;
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
    if (!errFlag) {
      submitHandler();
    }
  };

  const resetForm = () => {
    setFormDetails({
       
      name: "",
      studentId: 0,
        email: "",
        password: "0000",
        mobileNo: "",
        balance: 0,
        dob: "",
        courseName: ""
    });
  };

  const submitHandler = () => {
    console.log("in  customer form")

    props.takeAction(formDetails);
  };

  const goToDashboard = () => {
    navigate("/admin/");
  };

  return (
    <div className="container align-items-center">
      <div className="row g-3">
        <div className="col-md-3"></div>
        <div className="col-md-6 border border-primary">
          <br />
          {props.action === "add" ? (
            <h3>Add Customer</h3>
          ) : (
            <h3>Edit Customer</h3>
          )}
          <br />
          <form>
            {/* <div className="row mb-3">
              <label htmlFor="id" className="col-sm-5 col-form-label">
                Customer Id
              </label>

              <div className="col-md-7">
                <input
                  type="text"
                  readOnly={props.action === "add" ? false : true}
                  className="form-control"
                  name="id"
                  id="id"
                  pattern="[789][0-9]"
                  placeholder="Enter your id"
                  value={formDetails.id}
                  onChange={handleChange}
                ></input>
                <span id="idError" style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.id}
                </span>
              </div>
            </div> */}
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-5 col-form-label">
                Customer Name
              </label>

              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="First_Name Last_Name"
                  value={formDetails.name}
                  onChange={handleChange}
                ></input>
                <span
                  asp-validation-for="name"
                  className="text danger"
                  id="nameError"
                  style={{ color: "red", fontSize: "10px" }}
                >
                  {formErrors.name}
                </span>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-5 col-form-label">
                Customer Email
              </label>

              <div className="col-md-7">
                <input
                  type="email"
                  required
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter primary email id"
                  aria-describedby="emailHelp"
                  value={formDetails.email}
                  onChange={handleChange}
                ></input>
                <span
                  id="emailError"
                  style={{ color: "red", fontSize: "10px" }}
                >
                  {formErrors.email}
                </span>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="mobileNo" className="col-sm-5 col-form-label">
                Mobile number
              </label>

              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control"
                  required
                  name="mobileNo"
                  id="mobileNo"
                  placeholder="Enter 10-digit mobile number"
                  pattern="[789][0-9]{9}"
                  value={formDetails.mob}
                  onChange={handleChange}
                ></input>
                <span id="mobError" style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.mob}
                </span>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="dob" className="col-sm-5 col-form-label">
                Date of birth
              </label>

              <div className="col-md-7">
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  required
                  id="dob"
                  max={today.toISOString().split("T")[0]}
                  aria-describedby="dobHelp"
                  value={formDetails.dob}
                  onChange={handleChange}
                ></input>
                <span id="dobError" style={{ color: "red", fontSize: "10px" }}>
                  {formErrors.dob}
                </span>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="courseName" className="col-sm-5 col-form-label">
                Customer Course
              </label>

              <div className="col-md-7">
                <select
                  className="form-select"
                  name="courseName"
                  id="courseName"
                  onChange={handleChange}
                >
                  <option value="notSelected">Select a course</option>
                  <option value="DAC">DAC</option>
                  <option value="DITISS">DITISS</option>
                  <option value="DAI">DAI</option>
                  <option value="DBDA">DBDA</option>
                </select>
                <span
                  id="courseError"
                  style={{ color: "red", fontSize: "10px" }}
                >
                  {formErrors.course}
                </span>
              </div>
            </div>
            <div className="row-mb-3">
              &nbsp;
              <span className="col-md-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={validateData}
                >
                  {props.action === "add" ? "Add" : "Edit"}
                </button>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="col-md-4">
                {props.action === "add" ? (
                  <button
                    type="reset"
                    className="btn btn-primary"
                    onClick={resetForm}
                  >
                    Reset
                  </button>
                ) : null}
                &nbsp;&nbsp;&nbsp;
              </span>
              <span className="col-md-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={goToDashboard}
                >
                  Cancel
                </button>
                &nbsp;
              </span>
            </div>
            <div className="row-mb-3">
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
