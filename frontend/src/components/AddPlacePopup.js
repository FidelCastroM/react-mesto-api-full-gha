import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
    isOpen,
    onClose,
    onAddPlace
}) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        if (!isOpen) {
            setName('');
            setLink('');
        }
    }, [isOpen]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name,
            link,
        });
    }

    function handleClose() {
        onClose();
    }

    return (
        <PopupWithForm
            name="add"
            title="Новое место"
            buttonTitle="Создать"
            isOpen={isOpen}
            onClose={handleClose}
            onSubmit={handleSubmit}
        >
            <input
                value={name}
                onChange={handleNameChange}
                className="popup__input popup__input_one"
                type="text"
                name="name"
                id="denomination"
                placeholder="Название"
                required
                minLength="2" />

            <span className="denomination-error popup__input-error"></span>

            <input
                value={link}
                onChange={handleLinkChange}
                className="popup__input popup__input_two"
                type="url"
                name="link"
                id="link"
                placeholder="Ссылка на картинку"
                required />

            <span className="link-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;