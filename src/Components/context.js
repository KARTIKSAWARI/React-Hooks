import React, { useContext } from 'react';

const MyContext = React.createContext();

const DisplayData = () => {
  const value = useContext(MyContext);

  return <p>{value}</p>;
};

const App = () => {
  return (
    <MyContext.Provider value="Hello, Context!">
      <DisplayData />
    </MyContext.Provider>
  );
};

export default App;
