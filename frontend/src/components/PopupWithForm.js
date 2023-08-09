import React from 'react';

function PopupWithForm(props) {
    return (
        <section className={`popup ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" noValidate onSubmit={props.onSubmit}>
                    {props.children}
                    <button type="submit" className="popup__button">{props.buttonTitle}</button>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;