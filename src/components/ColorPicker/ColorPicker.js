import React from "react";
import classes from "./ColorPicker.module.scss";

const ColorPicker = (props) => (
  <div className={classes.ColorPicker} onClick={props.onClick.bind(this,props.palete)}>
    <img src={props.img} alt={props.text} />
    <p>{props.text}</p>
  </div>
);

export default React.memo(ColorPicker)