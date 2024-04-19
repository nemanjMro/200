import React from "react";
import Login from "./Login";

const TopBar = ({ gameName }) => {
  return (
    <header id="TopBar">
      <div>
        <h1 className="LogoTitle">{gameName}</h1>
      </div>
      <Login />
    </header>
  );
};

export default TopBar;
