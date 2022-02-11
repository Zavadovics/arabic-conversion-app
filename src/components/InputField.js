import React, { useState } from 'react';
import convert from '../helper';

const InputField = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleChange = e => {
    setNumber(e.target.value);
  };

  const doTheMagic = e => {
    console.log('number', typeof number);
    setResult(convert(parseInt(number)));
    console.log('result', result);
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
