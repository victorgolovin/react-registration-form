import React from "react";
import { useState } from "react";
import "./FormSection.css";
import FormTitle from "../FormTitle/FormTitle";
import FormText from "../FormText/FormText";

const FormSection = () => {

  const [formRegistering, setFormRegistering] = useState({
    name: '',
    surname: '',
    number: '',
    email: '',
    password: '',
    repeatpassword: ''
  });

  const [formIsError, setFormIsError] = useState(false)
  const [formIsSuccess, setFormIsSuccess] = useState(false)

  const handleNameInputChange = (event) => {
    setFormRegistering ({
      ...formRegistering,
      name: event.target.value,
    })
  }

  const handleSurnameInputChange = (event) => {
    setFormRegistering ({
      ...formRegistering,
      surname: event.target.value,
    })
  }

  const handleNumberInputChange = (event) => {
    setFormRegistering ({
      ...formRegistering,
      number: event.target.value,
    })
  }

  const handleEmailInputChange = (event) => {
    setFormRegistering ({
      ...formRegistering,
      email: event.target.value,
    })
  }

  const handlePasswordInputChange = (event) => {
    setFormRegistering ({
      ...formRegistering,
      password: event.target.value,
    })
  }

  const handleRepeatPasswordInputChange = (event) => {
    setFormRegistering ({
      ...formRegistering,
      repeatpassword: event.target.value,
    })
  }

  const handleFormBtn = () => {
    if (!formRegistering.name) {
      setFormIsError(true)
      setFormIsSuccess(false)
      return
    }

    if (!formRegistering.surname) {
      setFormIsError(true)
      setFormIsSuccess(false)
      return
    }

    if (!formRegistering.number) {
      setFormIsError(true)
      setFormIsSuccess(false)
      return
    }

    if (!formRegistering.email) {
      setFormIsError(true)
      setFormIsSuccess(false)
      return
    }

    if (!formRegistering.password) {
      setFormIsError(true)
      setFormIsSuccess(false)
      return
    }

    if (!formRegistering.repeatpassword) {
      setFormIsError(true)
      setFormIsSuccess(false)
      return
    }

    setFormIsError(false)
    setFormIsSuccess(true)

    setFormRegistering ({
      ...formRegistering,
      name: formRegistering.name,
      surname: formRegistering.surname,
      number: formRegistering.number,
      email: formRegistering.email,
      password: formRegistering.password,
      repeatpassword: formRegistering.repeatpassword
    })
    console.log(formRegistering.name)
    console.log(formRegistering.surname)
    console.log(formRegistering.number)
    console.log(formRegistering.email)
    console.log(formRegistering.password)
    console.log(formRegistering.repeatpassword)
  }

  return (
    <div className="container">
      <div className="form-section-inner">
        <FormTitle />
        <FormText />

        { formIsError ? (<p className="form-error-text">Ошибка в форме!</p>) : '' }
        { formIsSuccess ? (<p className="form-success-text">Регистрация прошла успешно!</p>) : '' }

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
            onChange={handleSurnameInputChange}
          />

          <input
            className="form-input"
            type="text"
            number="number"
            placeholder="Номер телефона"
            onChange={handleNumberInputChange}
          />

          <input
            className="form-input"
            type="text"
            email="email"
            placeholder="Email"
            onChange={handleEmailInputChange}
          />

          <input
            className="form-input"
            type="text"
            password="password"
            placeholder="Пароль"
            onChange={handlePasswordInputChange}
          />

          <input
            className="form-input"
            type="text"
            repeatpassword="repeatpassword"
            placeholder="Повторите пароль"
            onChange={handleRepeatPasswordInputChange}
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
