import React, { useState } from "react";
import { useNavigate } from "react-router";

import SigninComponent from "../components/welcome/Signin";
import Welcome from "./Welcome";

const Signin = () => {

    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState({
        showSignupError: false,
        showEmailError: false
    })

    const showSignup = () => navigate('/')

    const onSignup = data => {
        //TODO: mock signin
        console.log(data)
        // navigate("/")
    }

    return (
        <SigninComponent
            showSignup={showSignup}
            onSignup={onSignup}
            errMessages={errorMessages} />
    );
}

export default Signin