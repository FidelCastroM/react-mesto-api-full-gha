import React, {useState, useEffect, useContext} from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({
    isOpen,
    onClose,
    onUpdateUser
}) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        if (currentUser && isOpen) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser({
            name: name,
            about: description,
        });
    };

    return (
        <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            buttonTitle="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input value={name} onChange={(e) => setName(e.target.value)} className="popup__input popup__input_one" type="text" name="name" id="name"
                placeholder="Имя" required minLength="2" maxLength="40" />
            <span className="name-error popup__input-error"></span>

            <input value={description} onChange={(e) => setDescription(e.target.value)} className="popup__input popup__input_two" type="text" name="about" id="description"
                placeholder="О себе" required minLength="2" maxLength="200" />
            <span className="description-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;