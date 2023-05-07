import { useReducer, useState } from "react"
import { useNavigate } from "react-router-dom";

import { AuthData } from "../hoc/AuthWrapper"

export const Login = () => {
    // const navigate = useNavigate();
    const { login } = AuthData();
    const [formData, setFormData] = useReducer((formData, newItem) => { return ({ ...formData, ...newItem }) }, { userName: "", password: "" })
    const [errorMessage, setErrorMessage] = useState("");
    const doLogin = async () => {
        try {
            await login(formData.userName, formData.password);
           // navigate("/account");

        } catch (error) {
            setErrorMessage(error)
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            <div>
                <div>
                    <input
                        id="userName"
                        type="text"
                        onChange={(e) => setFormData({ userName: e.taget.value })}
                    />
                </div>
                <div>
                    <input
                        id="password"
                        type="password"
                        onChange={(e) => setFormData({ password: e.taget.value })}
                    />
                </div>
                <div>
                    <button onClick={doLogin}>Log In</button>
                </div>
                {
                    errorMessage ?
                        <div>{errorMessage}</div>
                        : null
                }
            </div>
        </div>
    )
}