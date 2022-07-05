import React, { useContext } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import { AuthUserContext } from '../../context/userContext'


function RoutingReact() {
    const authUser = window.localStorage.getItem('user')
    let { User } = useContext(AuthUserContext)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={User || authUser ? <Home /> : <Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default RoutingReact;