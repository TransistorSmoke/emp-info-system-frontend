import React, { useEffect, useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';

function App() {
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/employees`)
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.employees.map((item) => {
          return {
            id: item._id,
            firstname: item.firstname,
            lastname: item.lastname,
            badge: item.badge,
            department: item.department,
          };
        });
        setAllEmployees(transformedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" mx-auto font-thin border-2">
      {/* {allEmployees.length === 0 ? (
        <p>Loading...</p>
      ) : (
        allEmployees.map((employee) => (
          <p
            key={employee.id}
          >{`Badge #: ${employee.badge}:  ${employee.lastname}, ${employee.firstname}`}</p>
        ))
      )} */}

      <Navbar />

      <div className="border-emerald-300 w-2/5 mx-auto">
        <h1 className="text-center my-10 text-3xl font-bold uppercase text-gray-500">
          Employee Profile
        </h1>

        <EmployeeList employees={allEmployees} />
      </div>
    </div>
  );
}

export default App;
