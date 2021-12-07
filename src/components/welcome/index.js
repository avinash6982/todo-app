import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router";

import { OR, SIGNIN, SIGNUP, WELCOME_MESSAGE } from "../../common/constants/Headings";
import classes from "./styles.module.css";

const WelcomeMessage = () =>
    <Container className={classes.welcomeMessageContainer}>
        {
            Object.values(WELCOME_MESSAGE.split(" "))
                .map(item => <h1 key={item}>{item}</h1>)
        }
    </Container>

const ActionButtons = ({ showSignup, onSignin }) =>
    <Container>
        <Container className={classes.actionsContainer}>
            <Container className={classes.iconCenterContainer}>
                <Container className={classes.iconCenter}>
                    {OR}
                </Container>
            </Container>
            <Row className="full-height">
                <Col className="full-height nopadding">
                    <Button onClick={() => onSignin()} className="full-height full-width noborder">{SIGNIN}</Button>
                </Col>
                <Col className="full-height nopadding">
                    <Button onClick={() => showSignup()} className="full-height full-width noborder" variant="success">{SIGNUP}</Button>
                </Col>
            </Row>
        </Container>
    </Container>

const WelcomeComponent = ({ onSignin }) => {

    const navigate = useNavigate()

    const showSignup = () =>
        navigate("/welcome/signup")

    return (
        <Container className="main-container">
            <Row className="full-height">
                <Col sm={3} className="center">
                    <WelcomeMessage />
                </Col>
                <Col sm={9} className="center">
                    <ActionButtons showSignup={showSignup} onSignin={onSignin} />
                </Col>
            </Row>
        </Container>
    );
}

export default WelcomeComponent