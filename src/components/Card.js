import React from 'react';

const Card = ({ employees }) => {
  const samplePhoto = `/${employees[0]?.firstname}-${employees[0]?.lastname}.jpg`;
  let photo =
    process.env.REACT_APP_ENV === 'development'
      ? `${process.env.REACT_APP_BE}${samplePhoto}`
      : samplePhoto;

  return (
    <>
      {employees.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="border-2 w-3/5 mx-auto mt-5 p-3 rounded-md">
          <img src={photo} alt="Avatar" />
          <div className="container text-center my-3">
            <h4>
              <b>{`${employees[0].firstname} ${employees[0].lastname}`}</b>
            </h4>
            <p>{employees[0].department}</p>
          </div>
        </div>
      )}
    </>

    //   <div className="border-2 w-2/5 mx-auto mt-20">
    //   <img src="" alt="Avatar" />
    //   <div className="container">
    //     <h4>
    //       <b>{`${employees.firstname} ${employees.lastname}`}</b>
    //     </h4>
    //     <p>Architect & Engineer</p>
    //   </div>
    // </div>
  );
};

export default Card;
