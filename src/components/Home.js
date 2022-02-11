import React from 'react';
// import Button from './Button';
import InputField from './InputField';
import Result from './Result';

const Home = () => {
  return (
    <div className='home'>
      <h1>Arabic number conversion tool</h1>
      <h3>
        I'm an awesome app that converts numeric input into the English phrase
        of that number
      </h3>
      <div className='inner-container'>
        <InputField />
        {/* <Button /> */}
        <Result />
      </div>
      <p>I hope you had fun :)</p>
    </div>
  );
};

export default Home;
