// import React, { useState } from 'react';
// import FormComponent from './fromcomponent';
// import DisplayComponent from './Displaycomponent';

// const App2 = () => {
//   const [formData, setFormData] = useState({});

//   const handleFormSubmit = (data) => {
//     setFormData(data);
//   };

//   return (
//     <div style={{textAlign:'center'}}>
//       <h1>Form App</h1>
//       <FormComponent onSubmit={handleFormSubmit} />
//       <DisplayComponent  data={formData} />
//     </div>
//   );
// };

// export default App2;


import React, { useState } from 'react';
import FormComponent from './fromcomponent';
import DisplayComponent from './Displaycomponent';

const App = () => {
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>App Component</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      <DisplayComponent data={formData} isSubmitted={isSubmitted} />
    </div>
  );
};

export default App;
