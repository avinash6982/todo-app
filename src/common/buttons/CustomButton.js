import React from "react";
import { Button } from "react-bootstrap";

import FontAwesomeIcon from "../icons/FontAwesomeIcon";

import classes from "./styles.module.css";

const ButtonPrimary = ({
    text,
    icon,
    onClick,
    variant,
    styles
}) =>
    <Button variant={variant} style={{ ...styles }} onClick={() => onClick()} className={classes.button}>
        {text}
        {
            icon &&
            <FontAwesomeIcon title={icon} paddingLeft="10px" />
        }
    </Button>

export default ButtonPrimary