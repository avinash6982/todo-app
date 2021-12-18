import React, { useState } from "react";
import { useNavigate } from "react-router";

import { signin } from "../api/mocks/Auth";
import { useAuth } from "../AuthContext";

import SigninComponent from "../components/welcome/Signin";

const Signin = () => {

    const auth = useAuth()
    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState({
        showSigninError: false
    })

    const showSignup = () => navigate('/welcome/signup')

    const onSignin = data => {

        signin(data)
            .then(res => auth.signin(res.data, () => navigate('/')))
            .catch(() => setErrorMessages({ showSigninError: true }))
    }

    return (
        <SigninComponent
            showSignup={showSignup}
            onSignin={onSignin}
            errMessages={errorMessages} />
    );
}

export default Signin