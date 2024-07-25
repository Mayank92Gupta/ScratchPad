import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faFile, faEdit, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const TopNavbar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "settings") setIsSettingsOpen(!isSettingsOpen);
    if (dropdown === "file") setIsFileOpen(!isFileOpen);
    if (dropdown === "edit") setIsEditOpen(!isEditOpen);
  };

  return (
    <div className="bg-white-100 overflow-hidden font-sans h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-purple-500 text-white flex justify-between items-center">
        <img src={process.env.PUBLIC_URL + '/icons/scratch.svg'} alt="Your Logo" className="h-8 pl-2" />
        
        <div className="flex mr-11 ml-2 space-x-6">
          <div className="relative">
            <div onClick={() => toggleDropdown("settings")} className="text-white p-2 px-2 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faCog} /> Settings
            </div>
            {isSettingsOpen && (
              <div className="absolute bg-white text-black mt-2 py-2 w-48 rounded-md shadow-lg z-20">
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Option 1</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Option 2</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Option 3</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <div onClick={() => toggleDropdown("file")} className="text-white p-2 px-2 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faFile} /> File
            </div>
            {isFileOpen && (
              <div className="absolute bg-white text-black mt-2 py-2 w-48 rounded-md shadow-lg z-20">
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">New</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Open</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Save</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <div onClick={() => toggleDropdown("edit")} className="text-white p-2 px-2 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </div>
            {isEditOpen && (
              <div className="absolute bg-white text-black mt-2 py-2 w-48 rounded-md shadow-lg z-20">
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Undo</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Redo</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Cut</Link>
              </div>
            )}
          </div>
          <Link to="/" className="text-white px-2 py-2">
            <FontAwesomeIcon icon={faGraduationCap} /> Tutorials
          </Link>
        </div>
        
        <div className="flex space-x-6 mr-8">
          <Link to="/join" className="text-white">Join Scratch</Link>
          <Link to="/signin" className="text-white">Sign In</Link>
        </div>
      </nav>
    </div>
  );
};

export default TopNavbar;
