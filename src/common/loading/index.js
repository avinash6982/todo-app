import React from "react";
import { Container, Spinner } from "react-bootstrap";

import classes from "./styles.module.css";

const LoadingScreen = () =>
    <Container className={classes.container}>
        <Spinner animation="grow" />
    </Container>

export default LoadingScreen