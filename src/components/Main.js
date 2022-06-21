import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getCards()])
      .then(([userData, userCard]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(userCard);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  return (
    <main>
      <section className="profile page__section">
        <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        <button
          type="button"
          className="profile__avatar-edit"
          onClick={onEditAvatar}
        ></button>
        <div className="profile__info">
          <div className="profile__discription">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add"
          aria-label="Добавить фото"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements page__section">
        <ul className="elements__grid">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
