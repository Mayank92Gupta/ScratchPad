import React from 'react';

const Flag = () => {
  const parentContainerStyle = {
    maxWidth: '90px',
    margin: '10px',
  };
  
  const flagContainerStyle = {
    backgroundColor: 'green',
    borderRadius: '0.25rem',
    padding: '0.25rem 0.25rem 0.2rem 0.4rem' ,
    display: 'flex',
    alignItems: 'center',
  };

  const flagTextStyle = {
    color: 'white',
    fontSize: '0.95rem',
    marginLeft:'0.75rem',
    marginRight: '0.2rem',
  };

  const flagEmojiStyle = {
    fontSize: '1rem',
  };

  return (
    <div style={parentContainerStyle} id='flag'>
      <div className="bg-green-600 rounded-md p-1 flex items-center"
      >
        <p style={flagTextStyle}>Flag</p>
        <span style={flagEmojiStyle}>🚩</span>
      </div>
    </div>
  );
};

export default Flag;
