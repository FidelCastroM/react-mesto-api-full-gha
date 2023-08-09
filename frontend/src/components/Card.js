import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

    const currentUser = useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`;

    const handleClickCard = () => {
        onCardClick(card);
    };

    const handleLikeClick = () => {
        onCardLike(card);
    }

    const handleDeleteClick = () => {
        onCardDelete(card);
    }

    return (
            <div className="element">
                <img src={card.link} alt={card.name} className="element__image" onClick={handleClickCard} />
                {isOwn && <button type='button' className='element__basket' onClick={handleDeleteClick}></button>}
                <div className="element__card">
                    <h2 className="element__landscape">{card.name}</h2>
                    <div className="element__box-like">
                        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                        <span className="element__like-quantity">{card.likes.length}</span>
                    </div>
                </div>
            </div>
    );
}

export default Card;