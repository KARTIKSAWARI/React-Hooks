import React, { useState } from 'react';
// import Button from '@material-ui/Button';

const FormComponent = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age, address });
    setName('');
    setAge('');
    setAddress('');
  };

  return (
    <div>
      <h2>From Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        {/* <button type="submit">Submit</button> */}

        {/* <Button type="submit" variant="contained">Contained</Button> */}
        <button type='submit'>Contained</button>
      </form>
    </div>
  );
};

export default FormComponent;
