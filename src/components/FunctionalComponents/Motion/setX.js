import React, { useState } from 'react';

const SetX = ({ value, setValue }) => {
    const [steps, setSteps] = useState(0);
  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
  };
  const handleIncrement = () => {
    setSteps(steps + 1);
  };

  const handleDecrement = () => {
    if (steps > 0) {
      setSteps(steps - 1);
    }
  };

  const caretIconStyle = {
    fontSize: '10px',
    color: '#808080',
    cursor: 'pointer',
    marginLeft: '5px',
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (/^-?\d+$/.test(inputValue)) {
      setSteps(parseInt(inputValue));
    } else {
      setSteps(0);
    }
  };

  return (
    <div style={parentContainerStyle}>
    <div className="bg-blue-400 rounded-md p-1 z-0 flex items-center relative">
      <p className="text-white text-xs mr-2 pt-1">Set Size {" "}</p>
      <div className="flex-1">
        <input
          id='setsize'
          type="text"
          placeholder="Enter Size"
          className="p-1 rounded-md w-full text-xs border-none"
          value={steps}
          onChange={handleInputChange}
        />
      </div>
      <span style={caretIconStyle} onClick={handleIncrement}>&#x25B2;</span>
      <span style={caretIconStyle} onClick={handleDecrement}>&#x25BC;</span>
      <div className="absolute bottom-5 left-0 h-5 w-10 bg-blue-400 transform rounded-all rounded-lg"></div>
    </div>
  </div>
  );
};

export default SetX;
