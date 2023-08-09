import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password });
  };

  const handleLoginClick = () => {
    navigate("/sign-in");
  };

  return (
    <div className="registration">
      <form className="registration" onSubmit={handleSubmit}>
        <h2 className="registration__title">Регистрация</h2>
        <input
          className="registration__input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="registration__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="registration__button" type="submit"> Зарегистрироваться </button>
        <div className="registration__container">
          <span className="registration__link">Уже зарегистрированы? </span>
          <button className="registration__link registration__link-button" type="button" onClick={handleLoginClick}> Войти </button>
        </div>
      </form>
    </div>
  );
};

export default Register;