import React, { useState } from "react";
import { useNavigate } from "react-router";

import SignupComponent from "../components/welcome/Signup";
import { signup } from "../api/mocks/Auth";

const Signup = () => {

    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState({
        showSignupError: false,
        showEmailError: false
    })

    const showSignin = () =>
        console.log("navigate to signin")

    const onSignup = data => {
        signup(data)
            .then(res => console.log(res))
    }

    return (
        <SignupComponent showSignin={showSignin} onSignup={onSignup} errMessages={errorMessages} />
    );
}

export default Signup