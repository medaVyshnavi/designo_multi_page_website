import React from "react";
import classes from "./Design.module.css";
import Graphic from "./Graphic";
import Web from "./Web";
import App from "./App";

const Design = () => {
  return (
    <div className={classes.layout}>
      <Web />
      <div className={classes.cardLayout}>
        <App />
        <Graphic />
      </div>
    </div>
  );
};

export default Design;
