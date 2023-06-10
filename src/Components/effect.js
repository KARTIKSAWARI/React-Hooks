import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      const fakeData = 'Fetched data!';
      setData(fakeData);
    }, 3000);
  }, []);

  return (
    <div>
      <p>{data ? data : 'Loading in 3 Sec...'}</p>
    </div>
  );
};

export default DataFetcher;
