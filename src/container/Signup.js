import React from "react";

import Signin from "../components/signup";
import Welcome from "./Welcome";

const Signup = () => {

    return (
        <Welcome>
            <Signin />
        </Welcome>
    );
}

export default Signup