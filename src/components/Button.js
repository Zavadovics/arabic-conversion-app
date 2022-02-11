import React, { useState } from 'react';

const Button = () => {
  const [number, setNumber] = useState('');

  const doTheMagic = e => {
    //     e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className='button' onClick={doTheMagic}>
      Do the magic
    </div>
  );
};

export default Button;
