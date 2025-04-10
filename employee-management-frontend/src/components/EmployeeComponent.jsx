import React, { useEffect, useState } from "react";
import { createEmployee, getEmployeeById, updateEmployee } from "../services/EmployeeService";
import { createRequestHandler, useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  useEffect(() => {

    if(id){
      getEmployeeById(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch((error) =>{
        console.error("Error while fetching employee details");
      })
    }

  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    const employee = {firstName,lastName,email};
    console.log(employee);

    if(id){
      updateEmployee(id,employee).then((response) => {
        console.log(response.data);
        navigator("/employees");
      }).catch((error) => {
        console.error("Error while updating employee details");
      });
    }else{
      createEmployee(employee).then((response)=>{
        console.log(response.data);
        navigator("/employees");
      }).catch((error) =>{
        console.error("Error while creating employee details");
      })
    }

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      createEmployee(employee).then((response) => {
        console.log(response.data);
        navigator("/employees");
      });
    }
  }

  function validateForm() {
    let valid = true;

    const errorCopy = { ...errors };

    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "First Name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "Last Name is required";
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Email is required";
      valid = false;
    }

    setErrors(errorCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="card col-md-6 offset-md-3 offset-md-3">
        {pageTitle()}
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="'form-label" htmlFor="firstName">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter Employee First Name"
                value={firstName}
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>

            <div className="form-group mb-2">
              <label className="'form-label" htmlFor="lastName">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Employee Last Name"
                value={lastName}
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>

            <div className="form-group mb-2">
              <label className="'form-label" htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Employee Email"
                value={email}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <button className="btn btn-success" onClick={saveOrUpdateEmployee}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;