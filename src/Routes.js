import { Route, Routes } from "react-router";

import Signup from "./container/Signup";
import Signin from "./container/Signin";
import RequireAuth from "./RequireAuth";

export default function ApplicationRoutes() {

    return (
        <Routes>
            <Route path="/welcome/signin" element={<Signin />} />
            <Route path="/welcome/signup" element={<Signup />} />
            <Route
                path="/"
                element={
                    <RequireAuth>
                        <h1>unda</h1>
                    </RequireAuth>
                } />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    )
}