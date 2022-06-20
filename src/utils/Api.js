class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfile() {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getCards() {
    return fetch(this._baseUrl + "/cards", {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editProfile(userData) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then(this._checkResponse);
  }

  addCard(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse);
  }

  addLike(id) {
    return fetch(this._baseUrl + `/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteLike(id) {
    return fetch(this._baseUrl + `/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  removeCard(id) {
    return fetch(this._baseUrl + `/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editAvatar(data) {
    return fetch(this._baseUrl + `/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-41",
  headers: {
    authorization: "f3c649e7-6f2a-4944-a10d-90e02594a0a0",
    "Content-type": "application/json",
  },
});

export default api;