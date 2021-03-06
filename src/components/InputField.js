import React from 'react';
import { convert } from '../helper';
import Button from './Button';

const InputField = ({ number, setNumber, setResult, setFeedback }) => {
  const handleChange = e => {
    setNumber(e.target.value);
  };

  const doTheMagic = () => {
    const result = convert(parseFloat(number));
    setFeedback(result.feedback);
    setResult(result.text);
  };

  const handleKeypress = e => {
    if (e.key === 'Enter') {
      doTheMagic();
    }
  };

  return (
    <div className='input-container'>
      <label>Number to be converted:</label>
      <input
        className='input'
        type='number'
        value={number}
        onChange={handleChange}
        onKeyPress={handleKeypress}
      />
      <Button doTheMagic={doTheMagic} />
    </div>
  );
};

export default InputField;
