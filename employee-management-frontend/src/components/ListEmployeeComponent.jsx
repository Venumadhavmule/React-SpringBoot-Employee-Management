import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { listEmployees } from "../services/EmployeeService";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error while fetching employee details");
      });
  },[]);

  const headingStyle = {
    textAlign: "center",
    margin: "20px 0",
  };

  return (
    <div className="container">
      <h2 style={headingStyle}>List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {
          employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;