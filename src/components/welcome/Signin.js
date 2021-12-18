import React, { useEffect, useState } from "react";
import { Form, Collapse } from "react-bootstrap";

import WelcomeWrapper from './Wrapper';
import CustomButton from "../../common/buttons/CustomButton";
import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";
import { passwordValidator, emailValidator } from "../../services/validators/FormValidator";

import * as stateLabel from "../../common/constants/StateLabels";
import * as errorMessage from "../../common/constants/ErrorMessages";
import * as placeholder from "../../common/constants/PlaceHolder";
import * as title from "../../common/constants/Title";
import { SIGNIN } from "../../common/constants/Headings";
import classes from "./styles.module.css";

const Signin = ({
    showSignup,
    onSignin,
    errMessages
}) => {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const updateState = (label, data) =>
        setState(previousState => ({
            ...previousState,
            [label]: data
        }))

    const [passwordVisible, setPasswordVisible] = useState(false)

    const [errorMessages, setErrorMessages] = useState({
        showEmailError: false,
        showPasswordError: false,
    })

    const signinHandler = () => {

        onSignin(state)
    }

    useEffect(() => {

        setErrorMessages({
            showEmailError: state.email !== "" ? !emailValidator(state.email) : false,
            showPasswordError: state.password !== "" ? !passwordValidator(state.password) : false
        })
    }, [state])

    return (
        <WelcomeWrapper>
            <Form className="formContainer">

                <Form.Label>
                    <h3>
                        {SIGNIN}
                    </h3>
                </Form.Label>

                <Form.Group className={classes.inputContainer}>
                    <FontAwesomeIcon
                        title="user"
                        size="30"
                        color="#699EEE" />
                    <Form.Control
                        onChange={e => updateState(stateLabel.EMAIL, e.target.value)}
                        className={classes.inputField}
                        type="text"
                        placeholder={placeholder.EMAIL} />
                </Form.Group>

                <Collapse in={errorMessages.showEmailError}>
                    <div className={classes.errorMessages}>
                        {errorMessage.EMAIL_INVALID}
                    </div>
                </Collapse>

                <Form.Group className={classes.inputContainer}>
                    <FontAwesomeIcon
                        title={passwordVisible ? "eye" : "eye-slash"}
                        size="30"
                        color="#699EEE"
                        onMouseEnter={() => setPasswordVisible(true)}
                        onMouseOut={() => setPasswordVisible(false)} />
                    <Form.Control
                        onChange={e => updateState(stateLabel.PASSWORD, e.target.value)}
                        className={classes.inputField}
                        type={passwordVisible ? "text" : "password"}
                        placeholder={placeholder.PASSWORD} />
                </Form.Group>

                <Collapse in={errorMessages.showPasswordError}>
                    <div className={classes.errorMessages} title={title.PASSWORD_REQ}>
                        {errorMessage.PASSWORD_INVALID}
                    </div>
                </Collapse>

                <Collapse in={errMessages.showAuthErr}>
                    <div className={classes.errorMessages}>
                        {errorMessage.INVALID_CREDENTIALS}
                    </div>
                </Collapse>

                <Collapse in={errMessages.showSigninError}>
                    <div className={classes.errorMessages}>
                        {errorMessage.UNKNOWN_ERR}
                    </div>
                </Collapse>

                <div className={classes.signinContainer}>
                    <CustomButton
                        variant="primary"
                        styles={{ float: "right" }}
                        text="signin"
                        icon="arrow-right"
                        onClick={signinHandler} />
                </div>

                <div className={classes.signupContainer}>
                    <CustomButton
                        variant="success    "
                        styles={{ width: "100%" }}
                        text="Create an account"
                        onClick={() => showSignup()} />
                </div>

                <div className={classes.signinOptions}>
                    <a href="/" className={classes.links}>Forgot password</a>
                    <a href="/" className={classes.links}>
                        Help
                        <FontAwesomeIcon color="#2A4F96" title="question-circle" paddingLeft="5px" />
                    </a>
                </div>
            </Form>
        </WelcomeWrapper>
    );
}

export default Signin