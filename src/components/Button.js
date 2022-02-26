import React from 'react';

const Button = ({ doTheMagic }) => {
  return (
    <div className='button' onClick={doTheMagic}>
      Do the magic
    </div>
  );
};

export default Button;
