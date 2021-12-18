import React, { useEffect, useState } from "react";
import { Collapse, Form, } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";
import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";
import * as formValidators from "../../services/validators/FormValidator";

import * as placeholder from "../../common/constants/PlaceHolder";
import * as stateLabel from "../../common/constants/StateLabels";
import * as errorMessage from "../../common/constants/ErrorMessages";
import * as title from "../../common/constants/Title";
import { SIGNUP } from "../../common/constants/Headings";
import classes from "./styles.module.css";
import WelcomeWrapper from "./Wrapper";

const Signup = ({
    showSignin,
    onSignup,
    errMessages
}) => {

    const [state, setState] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    //function to safe update component state
    const updateState = (label, data) =>
        setState(previousState => ({
            ...previousState,
            [label]: data
        }))

    const [passwordVisible, setPasswordVisible] = useState(false)

    const [errorMessages, setErrorMessages] = useState({
        showFullNameError: false,
        showEmailError: false,
        showPasswordError: false,
        showConfirmPasswordError: false
    })

    const [formCompleted, setFormCompleted] = useState(true)

    const signupHandler = () =>
        Object.values(state).every(item => item !== "") ?
            (formCompleted &&
                Object.values(errorMessages).every(item => item === false)) &&
            onSignup({
                fullname: state.fullname,
                email: state.email,
                password: state.password
            }) : setFormCompleted(false)

    useEffect(() => {

        setErrorMessages({
            showFullNameError: state.fullname !== "" ? !formValidators.fullNameValidator(state.fullname) : false,
            showEmailError: state.email !== "" ? !formValidators.emailValidator(state.email) : false,
            showPasswordError: state.password !== "" ? !formValidators.passwordValidator(state.password) : false,
            showConfirmPasswordError: state.confirmPassword !== "" ? !formValidators.confirmPasswordValidator(state.password, state.confirmPassword) : false
        })
    }, [state])

    return (
        <WelcomeWrapper>
            <Form className="formContainer">

                <Form.Label>
                    <h3>
                        {SIGNUP}
                    </h3>
                </Form.Label>

                <Form.Group className={classes.inputContainer}>
                    <FontAwesomeIcon
                        title="user"
                        size="30"
                        color="#699EEE" />
                    <Form.Control
                        onChange={e => updateState(stateLabel.FULLNAME, e.target.value)}
                        className={classes.inputField}
                        type="text"
                        placeholder={placeholder.FULLNAME} />
                </Form.Group>

                <Collapse in={errorMessages.showFullNameError}>
                    <div className={classes.errorMessages}>
                        {errorMessage.NAME_INVALID}
                    </div>
                </Collapse>

                <Form.Group className={classes.inputContainer}>
                    <FontAwesomeIcon
                        title="envelope"
                        size="30"
                        color="#699EEE" />
                    <Form.Control
                        onChange={e => updateState(stateLabel.EMAIL, e.target.value)}
                        className={classes.inputField}
                        type="email"
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

                <Form.Group className={classes.inputContainer}>
                    <FontAwesomeIcon
                        title={passwordVisible ? "eye" : "eye-slash"}
                        size="30"
                        color="#699EEE"
                        onMouseEnter={() => setPasswordVisible(true)}
                        onMouseOut={() => setPasswordVisible(false)} />
                    <Form.Control
                        onChange={e => updateState(stateLabel.CONFIRM_PASSWORD, e.target.value)}
                        className={classes.inputField}
                        type={passwordVisible ? "text" : "password"}
                        placeholder={placeholder.CONFIRM_PASSWORD} />
                </Form.Group>

                <Collapse in={errorMessages.showConfirmPasswordError}>
                    <div className={classes.errorMessages} title={title.CONFIRM_PASSWORD_REQ}>
                        {errorMessage.PASSWORDS_MATCH_ERR}
                    </div>
                </Collapse>

                <Collapse in={!formCompleted}>
                    <div className={classes.errorMessages}>
                        {errorMessage.FORM_FILL_ERR}
                    </div>
                </Collapse>

                <Collapse in={errMessages.showSignupErr}>
                    <div className={classes.errorMessages}>
                        {errorMessage.UNKNOWN_ERR}
                    </div>
                </Collapse>

                <Collapse in={errMessages.showEmailError}>
                    <div className={classes.errorMessages}>
                        {errorMessage.EMAIL_ALREADY_IN_USE}
                    </div>
                </Collapse>

                <div className={classes.signupContainer}>
                    <CustomButton
                        variant="primary"
                        styles={{ float: "right" }}
                        text="signup"
                        icon="arrow-right"
                        onClick={signupHandler} />
                </div>

                <div className={classes.signinContainer}>
                    <CustomButton
                        variant="success    "
                        styles={{ width: "100%" }}
                        text="Already have an account?"
                        onClick={() => showSignin()} />
                </div>

                <div className={classes.signinOptions}>
                    <a href="/" className={classes.links}>
                        Help
                        <FontAwesomeIcon color="#2A4F96" title="question-circle" paddingLeft="5px" />
                    </a>
                </div>

            </Form>
        </WelcomeWrapper>
    );
}

export default Signup