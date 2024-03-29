import React from "react";
import "./Main.css";

const Main = ({ children }) => {
  return (
    <div className="main" style={{ backgroundColor: "#dddddd" }}>
      {children}
    </div>
  );
};

export default Main;
