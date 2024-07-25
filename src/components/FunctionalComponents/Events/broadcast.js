import React, { useState } from 'react'

const BroadcastMessage = ({}) => {
  
  const [steps, setSteps] = useState("");
  
  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
  };

  const handleInputChange = (e) => {
    setSteps(e.target.value);
  };

  return (
    <div style={parentContainerStyle}>
      <div className="bg-green-600 rounded-md p-1 flex items-center relative"
>
        <p className="text-white text-xs mr-2 pt-1">Broadcast{" "}</p>
        <div className="flex-1">
          <input
          id='speak'
            type="text"
            placeholder="Enter Message"
            className="p-1 rounded-md w-full text-xs border-none"
            value={steps}
            onChange={handleInputChange}
          />
          
        </div>
        <div className="absolute bottom-5 left-0 h-5 w-10 bg-green-600 transform rounded-all rounded-lg"></div>
      </div>
    </div>
    );
  };

export default BroadcastMessage;
