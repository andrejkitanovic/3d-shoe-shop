import React from "react";
import classes from "./DropDown.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const DropDown = (props) => {
  if (!props.active) {
    return (
      <div className={classes.DropDown}>
        <p>{props.text}</p>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    );
  }

  return (
    <div className={classes.DropDown}>
      <p>{props.text}</p>
      <FontAwesomeIcon icon={faCaretUp} />
    </div>
  );
};

export default DropDown;
