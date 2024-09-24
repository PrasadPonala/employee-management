// UpdateEmployeeComponent.js
import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployeeComponent = () => {
  const [employee, setEmployee] = useState({
    id: '',
    firstName: '',
    lastName: '',
    emailId: '',
    salary:'',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the employee details for update
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        const { id, firstName, lastName, emailId ,salary } = response.data;
        setEmployee({ id, firstName, lastName, emailId ,salary });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    // Update employee details
    EmployeeService.updateEmployee(id, employee)
      .then((response) => {
        console.log(response.data);
        // Redirect to the list of employees after update
        navigate('/employees');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Update Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={employee.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={employee.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Email Id:</label>
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    name="emailId"
                    className="form-control"
                    value={employee.emailId}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Salary:</label>
                  <input
                    type="text"
                    placeholder="salary"
                    name="salary"
                    className="form-control"
                    value={employee.salary}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    saveOrUpdateEmployee(e);
                  }}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger ml-2"
                  onClick={() => navigate('/employees')}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeComponent;
