import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [allEmployees, setAllEmployees] = useState([]);

  // function getEmployees() {
  //   fetch(`${process.env.REACT_APP_API}/employees`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedData = data.employees.map((item) => {
  //         return {
  //           id: item._id,
  //           firstname: item.firstname,
  //           lastname: item.lastname,
  //         };
  //       });
  //       console.log(data.employees);
  //       setEmployees(transformedData);
  //     })
  //     .catch((err) => console.log(err));
  // }

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
    <div>
      {allEmployees.length === 0 ? (
        <p>Loading...</p>
      ) : (
        allEmployees.map((employee) => (
          <p
            key={employee.id}
          >{`Badge #: ${employee.badge}:  ${employee.lastname}, ${employee.firstname}`}</p>
        ))
      )}
    </div>
  );
}

export default App;
