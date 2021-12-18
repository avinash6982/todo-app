import React, { useState } from "react";
import { useNavigate } from "react-router";

import SignupComponent from "../components/welcome/Signup";
import { signup } from "../api/mocks/Auth";
import { useAuth } from "../AuthContext";

import { EMAIL_ALREADY_IN_USE } from "../common/constants/ErrorMessages";

const Signup = () => {

    const auth = useAuth()
    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState({
        showSignupError: false,
        showEmailError: false
    })

    const showSignin = () =>
        navigate('/welcome/signin')

    const onSignup = data =>
        signup(data)
            .then(res => auth.signin(res.data.email, () => navigate('/')))
            .catch(err =>
                err === EMAIL_ALREADY_IN_USE ?
                    setErrorMessages(previousState => ({
                        ...previousState,
                        showEmailError: true
                    })) :
                    setErrorMessages(previousState => ({
                        ...previousState,
                        showSignupError: true
                    })))

    return (
        <SignupComponent showSignin={showSignin} onSignup={onSignup} errMessages={errorMessages} />
    );
}

export default Signup