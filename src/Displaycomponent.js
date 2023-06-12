import React from 'react';

const DisplayComponent = ({ data }) => {
  return (
    <div>
      <h2>Display Component</h2>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Address: {data.address}</p>
    </div>
  );
};

export default DisplayComponent;
