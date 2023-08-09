import React, { useContext } from 'react';
import profileSymbol from '../images/Vector.svg';
import profileEditInfo from '../images/EditButton.svg';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
    cards,
    onCardLike,
    onCardDelete
}) {

    const currentUser = useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <div style={{ backgroundImage: `url(${currentUser?.avatar})` }} className="profile__avatar"></div>
                <button className="profile__avatar-button" onClick={onEditAvatar}></button>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser?.name}</h1>
                    <button aria-label="Редактирование" type="button" className="profile__edit">
                        <img src={profileEditInfo} alt="редактирование" className="profile__edit-info" onClick={onEditProfile} />
                    </button>
                    <p className="profile__about-me">{currentUser?.about}</p>
                </div>
                <button aria-label="Добавление" type="button" className="profile__add" onClick={onAddPlace}>
                    <img src={profileSymbol} alt="Кнопка добавления" className="profile__symbol" />
                </button>
            </section>

            <ul className="elements">
                {cards.map(card => (
                    <Card 
                        key={card._id} 
                        card={card} 
                        onCardClick={onCardClick} 
                        onCardLike={onCardLike} 
                        onCardDelete={onCardDelete} />
                ))}
            </ul>
        </main>
    )
}

export default Main;