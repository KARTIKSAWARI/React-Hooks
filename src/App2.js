import React, { useState } from 'react';
import FormComponent from './fromcomponent';
import DisplayComponent from './Displaycomponent';

const App2 = () => {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div style={{textAlign:'center'}}>
      <h1>Form App</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      <DisplayComponent  data={formData} />
    </div>
  );
};

export default App2;
