import React from "react";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <figure className="element__figure">
        <button
          type="button"
          className="element__delete"
          aria-label="Удалить"
        ></button>
        <button
          type="button"
          className="element__large"
          aria-label="Увеличить"
          onClick={handleCardClick}
        >
          <img className="element__image" src={card.link} alt={card.name} />
        </button>
        <figcaption className="element__caption">
          <h2 className="element__caption-text">{card.name}</h2>
          <div className="element__like-column">
            <button
              type="button"
              className="element__like"
              aria-label="Нравится"
            ></button>
            <span className="element__like-count">{card.likes.length}</span>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

export default Card;
