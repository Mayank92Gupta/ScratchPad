import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import Navbar from"./components/Navbar";
import { faCog, faFile, faEdit, faGraduationCap, faTurnDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import Hide from "./components/FunctionalComponents/Looks/Hide";
import CatSprite from "./components/CatSprite";
import TopNavbar from "./components/TopNavbar";

export default function App() {
 
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    // console.log(isSettingsOpen);
    if (dropdown === "settings") {
      if(isFileOpen===true)setIsFileOpen(!isFileOpen);
      if(isEditOpen===true)setIsEditOpen(!isEditOpen)
      setIsSettingsOpen(!isSettingsOpen);
     
    };
    if (dropdown === "file") {
      if(isSettingsOpen===true)setIsFileOpen(!isSettingsOpen);
      if(isEditOpen===true)setIsEditOpen(!isEditOpen)
      setIsFileOpen(!isFileOpen);
      
    }
    if (dropdown === "edit") {
      if(isSettingsOpen===true)setIsFileOpen(!isSettingsOpen);
      if(isFileOpen===true)setIsFileOpen(!isFileOpen);
      setIsEditOpen(!isEditOpen);
      
    }
  };

  const [repeatCount, setRepeatCount] = useState(1);

  const handleRepeatChange = (count) => {
    setRepeatCount(count);
  };
  const [containers, setContainers] = useState([
    {
      id: "container-1",
      items: [],
    },
  ]);
  const [isHidden, setIsHidden] = useState(true);
 const toggleHide=()=>{
  setIsHidden((prevIsHidden)=>!prevIsHidden);
 }
 
  const [inputValues, setInputValues] = useState([]);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceContainerId = result.source.droppableId;
    const destinationContainerId = result.destination.droppableId;
    const draggableId = result.draggableId.split("-")[0];

    const updatedContainers = containers.map((container) => {
      if (container.id === destinationContainerId) {
        return {
          ...container,
          items: [
            ...container.items,
            `${draggableId}-${container.items.length}`,
          ],
        };
      }
      return container;
    });

    setContainers(updatedContainers);
  };

  const handleDelete = (containerId, index) => {
    const container = containers.find((c) => c.id === containerId);

    if (container && container.items.length > index) {
      container.items.splice(index, 1);
      setContainers([...containers]);
    }
  };
 

  return (
    <Router>
    <div className="bg-white-100 overflow-hidden font-sans h-screen flex flex-col">
      {/* Navigation Bar */}
      {/* <nav className="fixed w-full bg-purple-500 text-white flex justify-between items-center ">
      <img src={process.env.PUBLIC_URL+'/icons/scratch.svg'} alt="Your Logo" className="h-8 pl-2" />
      
      <div className="flex mr-11 ml-2 space-x-6 ">
      <Link to="/" className="text-white p-2   px-2 py-2">
    <FontAwesomeIcon icon={faCog} />    Settings</Link>
            <Link to="/" className="text-white border-solid border-transperent px-2 py-2"><FontAwesomeIcon icon={faFile} />   File</Link>
            <Link to="/" className="text-white  px-2 py-2 "><FontAwesomeIcon icon={faEdit} />   Edit</Link>
            <Link to="/" className="text-white px-2 py-2"><FontAwesomeIcon icon={faGraduationCap} />  Tutorials</Link>
         
       </div>
          <div className="flex space-x-6 mr-8">
            <Link to="/join" className="text-white">Join Scratch</Link>
            <Link to="/signin" className="text-white">Sign In</Link>
          </div> 
      </nav> */}
        <nav className="fixed w-full bg-purple-500 text-white flex justify-between items-center z-10">
          <img src={process.env.PUBLIC_URL + '/icons/scratch.svg'} alt="Your Logo" className="h-8 pl-2" />

          <div className="flex mr-11 ml-2 space-x-6">
            <div className="relative">
              <div onClick={() => toggleDropdown("settings")} className="text-white p-2 px-2 py-2 cursor-pointer">
                <FontAwesomeIcon icon={faCog} /> Settings <FontAwesomeIcon icon={faArrowDown} />
              </div>
              {isSettingsOpen && (
                <div className="absolute bg-purple-500 text-white mt-2 py-2 w-48 rounded-md shadow-lg z-20">
                  <Link to="/" className="block px-4 py-2 hover:bg-purple-500">Language</Link>
                  <Link to="/" className="block px-4 py-2 hover:bg-purple-500">Color Mode</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <div onClick={() => toggleDropdown("file")} className="text-white p-2 px-2 py-2 cursor-pointer">
                <FontAwesomeIcon icon={faFile} /> File <FontAwesomeIcon icon={faArrowDown} />
              </div>
              {isFileOpen && (
                <div className="absolute bg-purple-500 text-white mt-2 py-2 w-48 rounded-md shadow-lg z-20">
                  <Link to="/" className="block px-4 py-2 hover:bg-purple-500">New</Link>
                  <Link to="/" className="block px-4 py-2 hover:bg-purple-500">Load from your Computer</Link>
                  <Link to="/" className="block px-4 py-2 hover:bg-purple-500">Save from your Computer</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <div onClick={() => toggleDropdown("edit")} className="text-white p-2 px-2 py-2 cursor-pointer">
                <FontAwesomeIcon icon={faEdit} /> Edit <FontAwesomeIcon icon={faArrowDown} />
              </div>
              {isEditOpen && (
                <div className="absolute bg-purple-500 text-white mt-2 py-2 w-48 rounded-md shadow-lg z-20">
                  <Link to="/" className="block px-4 py-2 hover:bg-purple-500">Undo</Link>
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
      

      
      {/* Main Content */}
      <div className="fixed  w-full top-12 flex-1 flex flex-row">
        {/* Left Section */}
        <div className="flex-1 overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          
          <DragDropContext onDragEnd={handleDragEnd}>
          <Navbar/>
     
            <Sidebar />
           
            <MidArea
              containers={containers}
              setContainers={setContainers}
              handleDelete={handleDelete}
              setInputValues={setInputValues}
            />
          </DragDropContext>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea inputValues={inputValues} />
          <Hide toggleHide={toggleHide} />
      <CatSprite />
        </div>
      </div>
    </div>
    </Router>
  );
}
