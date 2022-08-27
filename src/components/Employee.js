import React from 'react';

const Employee = ({ employees }) => {
  return (
    <div className="w-full mx-auto mt-0">
      {employees.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li
              className="border-b-1 border-x-1 border-solid border-slate-200 p-2 px-4 first:border-t-1 first:border-b-1 first:rounded-t-lg last:rounded-b-lg last:border-b-1 flex justify-between hover:bg-emerald-50 cursor-pointer"
              key={employee.id}
            >
              <span className="tracking-wide">
                {`${employee.lastname}, ${employee.firstname}`}
              </span>
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
