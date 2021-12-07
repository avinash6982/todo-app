import { Route, Routes } from "react-router";

import Welcome from "./container/Welcome";
import RequireAuth from "./RequireAuth";
import UserRoute from "./UserRoute";

export default function ApplicationRoutes() {

    return (
        <Routes>
            <Route path="/welcome" element={<Welcome />}>
                <Route path="/welcome/signin" element={<Welcome />} />
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