class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    getUserInfo() {// добавление данных пользователя
        return this._request(`${this._url}/users/me`, "GET");
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            }),
        })
            .then(this._checkResponse);
    }
    
    getInitialCards() {//добавление карточек вместо массива
        return this._request(`${this._url}/cards`, "GET");
    }
    userAvatar({ avatar }) {
        return this._request(`${this._url}/users/me/avatar`, "PATCH", { avatar: avatar })
    };

    postNewCard({ name, link }) {
        return this._request(`${this._url}/cards`, "POST", { "name": name, "link": link })
    };

    deleteCard(cardId) {
        return this._request(`${this._url}/cards/${cardId}`, "DELETE")
    };

    putLike(cardId) {
        return this._request(`${this._url}/cards/${cardId}/likes`, "PUT")
    };

    deleteLike(cardId) {
        return this._request(`${this._url}/cards/${cardId}/likes`, "DELETE")
    };

    changeLike(cardId, isLiked) {
        const method = isLiked ? 'PUT' : 'DELETE';
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: method,
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    _request(url, method, body) {
        return fetch(url, {
            method,
            headers: this._headers,
            body: body ? JSON.stringify(body) : null
        })
            .then(this._checkResponse);
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

}

export const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-64",
    headers: {
        authorization: "7248d597-ad88-4774-97e9-2ed80a94a34f",
        "Content-Type": "application/json"
    }
}
);