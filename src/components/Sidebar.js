import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { getComponent } from './getComp';
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} 
from "./sidebarcomponents";

const renderComponentList = (components) => {
  return components.map((item, index) => (
    <Draggable
      key={`${item}-sideArea`}
      draggableId={`${item}-sideArea`}
      index={index}
      type="container-1"
    >
      {(provided) => (
        <ul
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {getComponent(item)}
        </ul>
      )}
    </Draggable>
    
    
  ));
};

const Sidebar = () => {
  const sidebarStyle = {
    maxHeight: 'calc(100vh - 8px)',
    
  };

  return (
    <div
      style={sidebarStyle}
      className="w-60 flex-none h-full overflow-hidden flex flex-col items-start p-2 border-r border-gray-200"
    >
     
     {motionComponents.length > 0 && (
        <Droppable droppableId="container-1" type="container-1">
          {(provided) => (
            <div className="my-3" id='1'>
              <p className="text-gray-600 font-semibold">Motion Components</p>
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="sidearea"
              >
                {renderComponentList(motionComponents)}
              </ul>
            </div>
          )}
        </Droppable>
      )}
      

       {looksComponents.length > 0 && (
        <Droppable droppableId="container-2" type="container-1">
          {(provided) => (
            <div className="my-3" id='2'>
              <p className="text-gray-600 font-semibold">Looks Components</p>
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="sidearea"
              >
                {renderComponentList(looksComponents)}
              </ul>
            </div>
          )}
        </Droppable>
      )}
      {controlComponents.length > 0 && (
        <Droppable droppableId="container-3" type="container-1">
          {(provided) => (
            <div className="my-3" id='3'>
              <p className="text-gray-600 font-semibold">Control Components</p>
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="sidearea"
              >
                {renderComponentList(controlComponents)}
              </ul>
            </div>
          )}
        </Droppable>
      )}
  {eventsComponents.length > 0 && (
        <Droppable droppableId="container-4" type="container-1">
          {(provided) => (
            <div className="my-3" id='4'>
              <p className="text-gray-600 font-semibold">Event Components</p>
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="sidearea"
              >
                {renderComponentList(eventsComponents)}
              </ul>
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default Sidebar;
