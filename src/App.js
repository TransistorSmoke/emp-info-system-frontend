import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Employee from './components/Employee';
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

      <Card />
      <Employee employees={allEmployees} />
    </div>
  );
}

export default App;
