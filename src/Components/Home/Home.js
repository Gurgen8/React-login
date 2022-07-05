import React, { useContext } from "react";
import { AuthUserContext } from '../../context/userContext'
function Form() {
    let { logOut } = useContext(AuthUserContext)

    return (
        <>
            <div>Home</div>
            <button onClick={() => { logOut(); return window.location.replace('/') }}>LOGOUT</button>
        </>
    );
}
export default Form;