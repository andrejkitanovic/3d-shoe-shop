import React from "react";
import classes from "./DropDown.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropDown = (props) => {
  const currClass = [classes.DropDown]

  if(props.active){
    currClass.push(classes.active)
  }

  return (
    <div className={currClass.join(' ')} onClick={props.onClick}>
      <div className={classes.Flex}>
        <p>{props.text}</p>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>

      <div className={classes.Display}></div>
    </div>
  );

};

export default DropDown;
