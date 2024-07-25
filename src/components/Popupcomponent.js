import React, { useState } from "react";

const BasicComponent = ({ container }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [currentContainerId, setCurrentContainerId] = useState(null);

  const togglePopup = (containerId) => {
    setCurrentContainerId(containerId);
    setCurrentItems(container[containerId].map(subItem => `${subItem.key}: ${subItem.value}`));
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      {Object.keys(container).map((containerId) => (
        <button
          key={containerId}
          onClick={() => togglePopup(containerId)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 m-2"
        >
          History for {containerId}
        </button>
      ))}

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Details for {currentContainerId}</h2>
            <ul className="list-disc pl-5">
              {currentItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicComponent;
