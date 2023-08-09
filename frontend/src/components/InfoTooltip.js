import React from "react";
import okLogin from "../images/okLogin.svg";
import errorLogin from "../images/errorLogin.svg";

const InfoTooltip = ({ isOpen, onClose, isError }) => {
   const popupClass = `popup popup__tooltip ${isOpen ? "popup_opened" : ""}`;

  return (
     <div className={popupClass}>
      <div className="popup__container popup__container_tooltip">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <img src={isError ? errorLogin : okLogin} className="popup__tooltip_image" alt="" />
        <p className="popup__tooltip_text"> {" "}
          {isError
            ? "Что-то пошло не так! Попробуйте ещё раз."
            : "Вы успешно зарегистрировались!"}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;