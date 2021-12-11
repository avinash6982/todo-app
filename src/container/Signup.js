import React, { useState } from "react";
import { useNavigate } from "react-router";

import SignupComponent from "../components/signup";
import Welcome from "./Welcome";

const Signup = () => {

    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState({
        showSignupError: false,
        showEmailError: false
    })

    const onSignup = data => {
        //TODO: mock signup
        navigate("/welcome/signin")
    }

    return (
        <Welcome>
            <SignupComponent onSignup={onSignup} errMessages={errorMessages} />
        </Welcome>
    );
}

export default Signup