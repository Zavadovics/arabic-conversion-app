import React, { useState } from 'react';
import InputField from './InputField';
import Result from './Result';

const Home = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  return (
    <div className='home'>
      <h1>Arabic number conversion tool</h1>
      <h3>
        I'm an awesome app that converts numeric input into the English phrase
        of that number
      </h3>
      <div className='inner-container'>
        <InputField
          number={number}
          setNumber={setNumber}
          setResult={setResult}
        />
        <Result result={result} number={number} />
      </div>
      <p>I hope you had fun :)</p>
    </div>
  );
};

export default Home;
