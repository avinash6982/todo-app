import React from "react";
import { Route, Navigate } from "react-router-dom";

import { useAuth } from "./AuthContext";
import LoadingScreen from "./common/loading";

const UserRoute = ({
    component: Component,
    id,
    ...rest
}) => {

    let auth = useAuth()

    return (
        <Route
            {...rest}
            element={props => {
                if (auth.user.isLoading)
                    return <LoadingScreen />
                else if (auth.user.user)
                    return <Component id={id} {...props} />
                else {
                    return (
                        <Navigate
                            to={{
                                pathname: "/welcome",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default UserRoute