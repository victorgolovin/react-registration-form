import React from "react";
import { useState } from "react";
import "./FormSection.css";
import FormTitle from "../FormTitle/FormTitle";
import FormText from "../FormText/FormText";

const FormSection = () => {

  const [formRegistering, setFormRegistering] = useState({
    name: 'name',
    surname: 'surname',
    number: 'number',
    email: 'email',

  });

  const handleNameInputChange = (event) => {
    setFormRegistering ({
      ...formRegistering,
      name: event.target.value,
      surname: event.target.value,
      number: event.target.value,
      email: event.target.value,
      password: event.target.value,
      repeatpassword: event.target.value
    })
    console.log(event.target.value)
  }

  const handleFormBtn = () => {
    console.log('press')
  }

  return (
    <div className="container">
      <div className="form-section-inner">
        <FormTitle />
        <FormText />
        <div className="form-inputs">
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Имя"
            onChange={handleNameInputChange}
          />

          <input
            className="form-input"
            type="text"
            surname="surname"
            placeholder="Фамилия"
            onChange={handleNameInputChange}
          />

          <input
            className="form-input"
            type="text"
            number="number"
            placeholder="Номер телефона"
            onChange={handleNameInputChange}
          />

          <input
            className="form-input"
            type="text"
            email="email"
            placeholder="Email"
            onChange={handleNameInputChange}
          />

          <input
            className="form-input"
            type="text"
            password="password"
            placeholder="Пароль"
            onChange={handleNameInputChange}
          />

          <input
            className="form-input"
            type="text"
            repeatpassword="repeatpassword"
            placeholder="Повторите пароль"
            onChange={handleNameInputChange}
          />

          <div className="form-checkbox-inner">
            <label className="custom-checkbox" htmlFor="form-checkbox">
              <input
                className="form-checkbox"
                type="checkbox"
                name="checkbox"
                id="form-checkbox"
              />
              Подтверждаю пароль
            </label>
          </div>
        </div>

        <button 
        className="form-button"
        onClick={handleFormBtn}>Продолжить</button>

        <div className="form-bottom-text-inner">
          <p className="form-bottom-text">Уже есть аккаунт ?</p>
          <a className="form-bottom-link" href="/">
            Войти
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
