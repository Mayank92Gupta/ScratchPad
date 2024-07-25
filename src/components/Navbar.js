
import React from "react";



const Navbar = () => {
  const handleScrollToMotion = (sectionId) => {
   const section = document.getElementById(sectionId);
    if(section){
    section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center px-1 p-2 border-r border-gray-600 pr-4 ">
    
      
    <button className="cursor-pointer mb-2  flex flex-col items-center mt-4" onClick={() => handleScrollToMotion("1")}>

    <div className="w-6 h-6 rounded-full mb-2" style={{ backgroundColor: "blue"  }}></div>
    <p className="text-xs text-gray-800 font-bold">Motion</p>
  </button>
    
      
  <button className="cursor-pointer mb-2  flex flex-col items-center mt-4" onClick={() => handleScrollToMotion("2")}>

  <div className="w-6 h-6 rounded-full mb-2" style={{ backgroundColor: "purple" }}></div>
  <p className="text-xs text-gray-800 font-bold">Looks</p>
</button>
      
     
<button className="cursor-pointer mb-2  flex flex-col items-center mt-4" onClick={() => handleScrollToMotion("3")}>

    <div className="w-6 h-6 rounded-full mb-2" style={{ backgroundColor: "yellow" }}></div>
    <p className="text-xs text-gray-800 font-bold">Control</p>
  </button>
      
  <button className="cursor-pointer mb-2  flex flex-col items-center mt-4" onClick={() => handleScrollToMotion("4")}>

    <div className="w-6 h-6 rounded-full mb-2" style={{ backgroundColor: "red" }}></div>
    <p className="text-xs text-gray-800 font-bold">Events</p>
  </button>
  
      
    </div>
  );
};

export default Navbar;
