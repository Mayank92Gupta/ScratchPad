import React, { useState, useEffect } from 'react';

const SayMessage = ({}) => {
  const [message, setMessage] = useState("");
  const [time, setTime] = useState(0);

  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(Number(e.target.value));
  };

  useEffect(() => {
    let timer;

    if (time > 0) {
      timer = setTimeout(() => {
        // Do something when the timer expires
        console.log(`Time's up! Message: ${message}`);
       
      }, time * 1000);
    }

    return () => {
      clearTimeout(timer); // Cleanup the timer on component unmount or when time changes
    };
  }, [time, message]);

  return (
    <div style={parentContainerStyle}>
      <div className="bg-purple-400 rounded-md p-1 flex items-center relative">
        <p className="text-white text-xs mr-2">SayMessage</p>

        <div className="flex-1">
          <input
            id='SayMessage'
            type="text"
            placeholder="Enter Message"
            className="p-1 rounded-md w-full text-xs border-none"
            value={message}
            onChange={handleInputChange}
          />
          
          <input
            id='time'
            type="number"
            placeholder="Enter Time (seconds)"
            className="p-1 rounded-md w-full text-xs border-none mt-2"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
        
        

      </div>
      
    </div>
    
  );
};

export default SayMessage;
