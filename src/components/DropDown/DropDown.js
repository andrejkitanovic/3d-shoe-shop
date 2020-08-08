import React from 'react'
import classes from './DropDown.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropDown = (props) => {

    return (
        <div className={classes.DropDown}>
            <p>{props.text}</p>
            <FontAwesomeIcon icon={faCaretDown} />
        </div>
    )
}

export default DropDown