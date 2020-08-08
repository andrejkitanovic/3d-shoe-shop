import React from "react";
import classes from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";

const header = (props) => (
  <div className={classes.Header}>
    <span>
      <img src={logo} alt="logo" />
    </span>
    <p>CUSTOMIZE & ORDER</p>
    <div>
      <FontAwesomeIcon icon={faUserCircle} />
      <FontAwesomeIcon icon={faTimes} />
    </div>
  </div>
);

export default header;
