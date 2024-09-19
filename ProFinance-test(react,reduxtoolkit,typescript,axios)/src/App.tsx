import React from "react";
import "./App.css";
import LeftComponent from "./LeftPart";
import RightComponent from "./RightPart";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="left">
        <LeftComponent />
      </div>
      <div className="right">
        <RightComponent />
      </div>
    </div>
  );
};

export default App;
