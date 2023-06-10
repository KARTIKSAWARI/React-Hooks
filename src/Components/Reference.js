import React, { useRef } from 'react';

const InputFocus = () => {
  const inputRef = useRef(null);

  const Input = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={Input}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
