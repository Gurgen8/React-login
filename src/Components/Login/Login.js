import React, { useState, useContext } from "react";
import { user } from '../user'
import { AuthUserContext } from '../../context/userContext'
import "./Login.css";
function Form() {
    const [login, setLogin] = useState('')
    const [pasword, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [reqError, setReqError] = useState('')
    let { changeContext } = useContext(AuthUserContext)



    const handleSubmit = (e) => {
        e.preventDefault();
        if (login.length == 0 || pasword.length == 0) {
            setError(true)
        }
        if (login && pasword && login === user.login && pasword === user.password) {
            window.localStorage.setItem('user', JSON.stringify(user))
            // alert('YOU HAVE BEEN SUCCESFULY REGITRED')
            console.log("Login: ", login, "\nPassword: ", pasword)
            changeContext(user)
        }
        else if (pasword.length && login.length) {
            setReqError('invalid password or email')
        }

    }


    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>{reqError && reqError}</label>
                <div>
                    <input placeholder="Login" onChange={e => setLogin(e.target.value)} />
                </div>
                {error && login.length <= 0 ?
                    <label>Login can't be Empty</label> : ""}
                <div>
                    <input placeholder="password" onChange={e => setPassword(e.target.value)} />
                </div>
                {error && pasword.length <= 0 ?
                    <label>Password can't be Empty</label> : ""}
                <div>
                    <button>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Form;