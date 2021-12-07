import React from "react";
import { Navigate, useLocation } from "react-router";

import { useAuth } from "./AuthContext";
import LoadingScreen from "./common/loading";

const RequireAuth = props => {

    const auth = useAuth()
    const location = useLocation()

    if (auth.user.isLoading)
        return <LoadingScreen />

    if (!auth.user.user)
        return <Navigate to="/welcome/signin" state={{ from: location }} />

    return props.children
}

export default RequireAuth