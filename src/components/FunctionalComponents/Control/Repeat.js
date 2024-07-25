import React, { useState } from 'react';

const Repeat = () => {
  const [steps, setSteps] = useState(0);

  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
  };

  const caretIconStyle = {
    fontSize: '10px',
    color: '#808080',
    cursor: 'pointer',
    marginLeft: '5px',
  };

  const handleInputChange = (e) => {
    let inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue)) {
      setSteps(inputValue);
    } else {
      setSteps(1);
    }
  };

  const handleIncrement = () => {
    setSteps((prevSteps) => prevSteps + 1);
  };

  const handleDecrement = () => {
    if (steps > 0) {
      setSteps((prevSteps) => prevSteps - 1);
    }
  };

  return (
    <div style={parentContainerStyle}>
      <div className="bg-yellow-300 rounded-md p-1 flex items-center relative">
        <p className="text-white text-xs mr-2 pt-1">Repeat  {" "} </p>
        <div className="flex-1">
          <input
            id='repeat'
            type="text"
            placeholder="Enter Steps"
            className="p-1 rounded-md w-full text-xs border-none"
            value={steps}
            onChange={handleInputChange}
          />
          
        </div>
        <span style={caretIconStyle} onClick={handleIncrement}>&#x25B2;</span>
        <span style={caretIconStyle} onClick={handleDecrement}>&#x25BC;</span>
        <div className="absolute bottom-5 left-0 h-5 w-10 bg-yellow-300 transform rounded-all rounded-lg"></div>
      </div>
    </div>
  );
};

export default Repeat;
