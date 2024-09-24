// ListEmployeeComponent.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployeeList();
  }, []);

  const loadEmployeeList = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log('Error fetching employee list:', error);
      });
  };

  const handleDelete = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((response) => {
        console.log(response.data);
        loadEmployeeList();
      })
      .catch((error) => {
        console.log('Error deleting employee:', error);
      });
  };

  const handleResetSequence = () => {
    EmployeeService.resetSequence()
      .then((response) => {
       
        loadEmployeeList();
      })
      .catch((error) => {
        console.log('Error resetting sequence:', error);
      });
  };

  

  return (

    
    <div className="container">
      <p><strong>Hi ! Welcome To our World..</strong></p>
      <h2 className="text-center">Our Employees List</h2>
      <div className="d-flex justify-content-between mb-2">
        <Link to="/add-employee" className="btn btn-primary">
          Add Employee
        </Link>
        <button className="btn btn-warning" onClick={handleResetSequence}>
          Reset Sequence
        </button>
      </div>

      
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Employee Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>{employee.salary}</td>
              <td>
                <Link to={`/update-employee/${employee.id}`} className="btn btn-info">
                  Update
                </Link>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
