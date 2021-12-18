import React from "react";
import { Button } from "react-bootstrap";

import FontAwesomeIcon from "../icons/FontAwesomeIcon";

import classes from "./styles.module.css";

const ButtonPrimary = ({
    text,
    icon,
    onClick,
    variant,
    rounded,
    styles
}) =>
    <Button variant={variant} style={{ ...styles }} onClick={() => onClick()} className={classes.button}>
        {text}
        {
            icon &&
            <FontAwesomeIcon rounded={rounded && true} title={icon} paddingLeft={text && "10px"} />
        }
    </Button>

export default ButtonPrimary