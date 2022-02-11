import React from 'react';

const Result = ({ result, number }) => {
  return (
    <div className='result-container'>
      <p>Number {number} written out in English:</p>
      <p className='result'>{result}</p>
    </div>
  );
};

export default Result;
