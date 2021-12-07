import React, { useEffect, useState } from "react";
import { Form, Collapse } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";
import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";
import { passwordValidator, emailValidator } from "../../services/validators/FormValidator";

import classes from "./styles.module.css";

const Signin = ({
    onSignin,
    setPage,
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
        <Form>
            <Form.Group className={classes.inputContainer}>
                <FontAwesomeIcon
                    title="user"
                    size="30"
                    color="#699EEE" />
                <Form.Control
                    onChange={e => updateState("email", e.target.value)}
                    className={classes.inputField}
                    type="text"
                    placeholder="Email" />
            </Form.Group>
            <Collapse in={errorMessages.showEmailError}>
                <div className={classes.errorMessages}>
                    Please enter a valid email address
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
            <Collapse in={errMessages.showAuthErr}>
                <div className={classes.errorMessages}>
                    Invalid credentials, please try again
                </div>
            </Collapse>
            <Collapse in={errMessages.showSigninError}>
                <div className={classes.errorMessages}>
                    Something went wrong, please try again
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

            <div className={classes.signinOptions}>
                <a href="/" className={classes.links}>Forgot password</a>
                <a href="/" className={classes.links}>
                    Help
                    <FontAwesomeIcon color="#2A4F96" title="question-circle" paddingLeft="5px" />
                </a>
            </div>
        </Form>
    );
}

export default Signin