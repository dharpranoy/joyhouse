import React from 'react';

const BorderText = ({text}) => {
  const borderTextStyle = {
    color: '#1E1E1E', // Inside color
    textShadow: `
      -1px -1px 0 #b8b4b4,  
       1px -1px 0 #b8b4b4,
      -1px  1px 0 #b8b4b4,
       1px  1px 0 #b8b4b4`
  };

  return (
    <>
      <h1 style={borderTextStyle} className='text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase'>{text}</h1>
    </>
  );
};

export default BorderText;
