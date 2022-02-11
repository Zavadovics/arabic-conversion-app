import React from 'react';
import convert from '../helper';

const InputField = ({ number, setNumber, setResult }) => {
  const handleChange = e => {
    setNumber(e.target.value);
  };

  const doTheMagic = () => {
    setResult(convert(parseInt(number)));
  };

  return (
    <div className='input-container'>
      <label>Number to be converted:</label>
      <input
        className='input'
        type='number'
        value={number}
        onChange={handleChange}
      />
      <div className='button' onClick={doTheMagic}>
        Do the magic
      </div>
    </div>
  );
};

export default InputField;
