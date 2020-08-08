import React from "react";
import classes from "./Button.module.scss";

const Button = () => {
  return (
    <div className={classes.Button}>
        <p>from <span>EUR 249</span></p>
      <button>ORDER SNEAKER</button>
    </div>
  );
};

export default Button;
