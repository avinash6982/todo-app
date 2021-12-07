import React from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../AuthContext";
import WelcomeComponent from "../components/welcome";

const Welcome = props => {

    const auth = useAuth()
    const navigate = useNavigate()

    const onSignin = () =>
        auth.signin("userOne", () => navigate("/"))

    return (
        <WelcomeComponent onSignin={onSignin} component={props.children && props.children} />
    );
}

export default Welcome