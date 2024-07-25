import React, { useState } from 'react';

const Hide = ({  }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(0);

  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
  };

  const handleTimeChange = (e) => {
    const inputValue = e.target.value;
    setTimeInSeconds(inputValue);
    
  };

  return (
    <div style={parentContainerStyle}>
      <div className="bg-purple-400 rounded-md p-1 flex items-center relative">
        <p className="text-white text-xs mr-2 ml-1">Hide</p>
        <input
          type="number"
          placeholder="Time (seconds)"
          value={timeInSeconds}
          onChange={handleTimeChange}
          className="text-black text-xs mr-6 ml-2 p-1 rounded-md"
        />
        <div className="flex-1">
          {/* Add any other content or styling for the "Hide" component */}
        </div>
        <div className="absolute bottom-5 left-0 h-5 w-10 bg-purple-400 transform rounded-all rounded-lg"></div>
      </div>
    </div>
  );
};

export default Hide;
