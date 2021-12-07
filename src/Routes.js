import { Route, Routes } from "react-router";

import Welcome from "./container/Welcome";
import Signup from "./container/Signup";
import RequireAuth from "./RequireAuth";

export default function ApplicationRoutes() {

    return (
        <Routes>
            <Route path="welcome" element={<Welcome />}>
                <Route path="signin" element={<Welcome page="signin" />} />
                <Route path="signup" element={<Signup />} />
            </Route>
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