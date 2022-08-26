import React from 'react';

const Employee = ({ employees }) => {
  return (
    <div className="w-3/5 mx-auto my-5">
      {employees.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li
              className="border-b-1 border-x-1 border-solid border-slate-200 p-2 px-4 first:border-t-1 first:border-b-1 first:rounded-t-lg last:rounded-b-lg last:border-b-1 flex justify-between hover:bg-emerald-50"
              key={employee.id}
            >
              <span> {`${employee.lastname}, ${employee.firstname}`}</span>
              <span className="text-slate-400 font-light">
                {employee.badge}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Employee;
