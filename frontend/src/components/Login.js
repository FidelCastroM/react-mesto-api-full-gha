import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="login">
            <form className="login" onSubmit={handleSubmit}>
                <h2 className="login__title">Вход</h2>
                <input
                    className="login__input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    className="login__input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <p className="login__error"></p>
                <button className="login__button" type="submit">Войти</button>
            </form>
        </div>
    )

}

export default Login;