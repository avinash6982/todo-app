import {
    Routes,
    Route
} from "react-router-dom";

import Welcome from "./container/Welcome";

export default function ApplicationRoutes() {

    return (
        <Routes>
            <Route path="/welcome" component={Welcome} />
            <Route path="/" component={() => <h1>home</h1>} />
            <Route path="*" component={() => "404 NOT FOUND"} />
        </Routes>
    )
}