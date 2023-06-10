import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if(count<10)
    {
      setCount(count + 1);
      console.log(count);
    }
    
  };
  const decrement = () =>{
    if(count>0)
    {
      setCount(count - 1);
    }

  };

  return (
    <div>
      <h5>Count between 0 to 10</h5>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;