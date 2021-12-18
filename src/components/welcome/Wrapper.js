import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { WELCOME_MESSAGE } from "../../common/constants/Headings";
import classes from "./styles.module.css";

const WelcomeMessage = () =>
    <Container className={classes.welcomeMessageContainer}>
        {
            Object.values(WELCOME_MESSAGE.split(" "))
                .map(item => <h1 key={item}>{item}</h1>)
        }
    </Container>

const WelcomeWrapper = props =>
    <Container className="main-container">
        <Row className="full-height">
            <Col sm={3} className="center">
                <WelcomeMessage />
            </Col>
            <Col sm={9} className="center">
                {props.children}
            </Col>
        </Row>
    </Container>

export default WelcomeWrapper