import React from "react";
import MoveX from "./FunctionalComponents/Motion/MoveX";
import MoveY from "./FunctionalComponents/Motion/MoveY";
import Goto from "./FunctionalComponents/Control/Goto";
import ChangeSize from "./FunctionalComponents/Looks/ChangeSize";
import Repeat from "./FunctionalComponents/Control/Repeat";
import SetSize from "./FunctionalComponents/Looks/SetSize";
import Speak from "./FunctionalComponents/Looks/Speak";
import TurnAnti from "./FunctionalComponents/Motion/TurnAnti";
import TurnClock from "./FunctionalComponents/Motion/TurnClock";
import Wait from "./FunctionalComponents/Control/Wait";
import Flag from "./FunctionalComponents/Events/Flag";
import GotoSpecific from "./FunctionalComponents/Motion/GotoSpecific";
import SetX from "./FunctionalComponents/Motion/setX";
import SetY from "./FunctionalComponents/Motion/setY";
import Hide from "./FunctionalComponents/Looks/Hide";
import BroadcastMessage from "./FunctionalComponents/Events/broadcast";
import SayMessage from "./FunctionalComponents/Looks/SayMessage";


export const getComponent = (key, id) => {
  switch (key) {
    case "MOVEX":
      return <MoveX />;
    case "MOVEY":
      return <MoveY />;
    case "Goto":
      return <Goto />;
    case "Wait":
      return <Wait />;
    case "TurnClock":
      return <TurnClock />;
    case "TurnAnti":
      return <TurnAnti />;
    case "Speak":
      return <Speak />;
    case "ChangeSize":
      return <ChangeSize />;
    case "SetSize":
      return <SetSize />;
    case "Repeat":
      return <Repeat />;
    case "Flag":
      return <Flag />;
    case "GotoSpecific":
        return <GotoSpecific/>;
    case "SetX":
        return <SetX/>;
    case "SetY":
        return <SetY/>;
    case "Hide":
        return <Hide/>
    case "Flag":
        return <Flag/>;
    case "BroadcastMessage":
      return <BroadcastMessage/>;
    case "SayMessage":
      return <SayMessage/>;
           
  }
};
