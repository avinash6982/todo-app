import React, { useState } from "react";
import { useNavigate } from "react-router";

import SigninComponent from "../components/signin";
import Welcome from "./Welcome";

const Signin = () => {

    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState({
        showSignupError: false,
        showEmailError: false
    })

    const onSignup = data => {
        //TODO: mock signin
        console.log(data)
        // navigate("/")
    }

    return (
        <Welcome>
            <SigninComponent onSignup={onSignup} errMessages={errorMessages} />
        </Welcome>
    );
}

export default Signin