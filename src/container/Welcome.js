import React from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../AuthContext";
import WelcomeComponent from "../components/welcome";

const Welcome = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    const onSignin = () =>
        auth.signin("userOne", () => navigate("/"))

    return (
        <WelcomeComponent onSignin={onSignin} />
    );
}

export default Welcome