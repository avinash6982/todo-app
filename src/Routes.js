import { Route, Routes } from "react-router";

import Welcome from "./container/Welcome";

export default function ApplicationRoutes() {

    return (
        <Routes>
            <Route path="/signin" element={<Welcome />} />
            <Route path="/" element={<Welcome />} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    )
}