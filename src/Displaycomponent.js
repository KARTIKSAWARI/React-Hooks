import React, { useState, useEffect } from 'react';

const DisplayComponent = ({ data }) => {
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    if (data) {
      setDisplayedData((prevData) => [...prevData, data]);
    }
  }, [data]);

  return (
    <div>
      <h2>Display Component</h2>
      {displayedData.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <p>Address: {item.address}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default DisplayComponent;
