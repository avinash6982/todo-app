import React, { useEffect, useState } from "react";
import { Collapse, Form, } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";
import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";
import * as formValidators from "../../services/validators/FormValidator";

import classes from "./styles.module.css";

const Signup = ({
    onSignup,
    errMessages
}) => {

    const [state, setState] = useState({
        fullName: "",
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
                fullName: state.fullName,
                email: state.email,
                password: state.password
            }) : setFormCompleted(false)

    useEffect(() => {

        setErrorMessages({
            showFullNameError: state.fullName !== "" ? !formValidators.fullNameValidator(state.fullName) : false,
            showEmailError: state.email !== "" ? !formValidators.emailValidator(state.email) : false,
            showPasswordError: state.password !== "" ? !formValidators.passwordValidator(state.password) : false,
            showConfirmPasswordError: state.confirmPassword !== "" ? !formValidators.confirmPasswordValidator(state.password, state.confirmPassword) : false
        })
    }, [state])

    return (
        <Form className="formContainer">
            <Form.Group className={classes.inputContainer}>
                <FontAwesomeIcon
                    title="user"
                    size="30"
                    color="#699EEE" />
                <Form.Control
                    onChange={e => updateState("fullName", e.target.value)}
                    className={classes.inputField}
                    type="text"
                    placeholder="FullName" />
            </Form.Group>
            <Collapse in={errorMessages.showFullNameError}>
                <div className={classes.errorMessages}>
                    Please input a valid name
                </div>
            </Collapse>

            <Form.Group className={classes.inputContainer}>
                <FontAwesomeIcon
                    title="envelope"
                    size="30"
                    color="#699EEE" />
                <Form.Control
                    onChange={e => updateState("email", e.target.value)}
                    className={classes.inputField}
                    type="email"
                    placeholder="Email" />
            </Form.Group>
            <Collapse in={errorMessages.showEmailError}>
                <div className={classes.errorMessages}>
                    Please input a valid email id
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
                    onChange={e => updateState("password", e.target.value)}
                    className={classes.inputField}
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password" />
            </Form.Group>
            <Collapse in={errorMessages.showPasswordError}>
                <div className={classes.errorMessages} title="password must contain atleast one digit, one special character and must be of 8 character length">
                    Please input a valid password
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
                    onChange={e => updateState("confirmPassword", e.target.value)}
                    className={classes.inputField}
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Confirm password" />
            </Form.Group>
            <Collapse in={errorMessages.showConfirmPasswordError}>
                <div className={classes.errorMessages} title="passwords must be same">
                    Passwords doesnot match
                </div>
            </Collapse>
            <Collapse in={!formCompleted}>
                <div className={classes.errorMessages}>
                    Please fill in all fields
                </div>
            </Collapse>
            <Collapse in={errMessages.showSignupErr}>
                <div className={classes.errorMessages}>
                    Something went wrong, try again later
                </div>
            </Collapse>
            <Collapse in={errMessages.showEmailError}>
                <div className={classes.errorMessages}>
                    Email already in use
                </div>
            </Collapse>

            <div className={classes.signinContainer}>
                <CustomButton
                    variant="primary"
                    styles={{ float: "right" }}
                    text="signup"
                    icon="arrow-right"
                    onClick={signupHandler} />
            </div>
        </Form>
    );
}

export default Signup