import React from "react";

function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  buttonTitle,
}) {
  return (
    <section className={`popup popup-${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <form
          className={`popup__form popup__form-${name}`}
          name={name}
          noValidate
        >
          <button
            type="button"
            className="popup__close popup__button-close"
            aria-label="Закрыть"
            onClick={onClose}
          ></button>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            className={`popup__submit popup__submit-${name}`}
            type="submit"
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
