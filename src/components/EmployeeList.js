import React from 'react';
import Employee from './Employee';
import Card from './Card';

const EmployeeList = ({ employees }) => {
  return (
    <>
      <Card employees={employees} />
      <div className="container mx-auto">
        <div className="flex flex-col items-center my-8 mx-auto">
          <Employee employees={employees} />
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
