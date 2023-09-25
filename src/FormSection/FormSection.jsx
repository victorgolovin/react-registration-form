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
    repeatpassword: '',
    checkbox: ''
  });

  const [formIsError, setFormIsError] = useState(false)
  const [formIsSuccess, setFormIsSuccess] = useState(false)
  const [formPassError, setFormPassError] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setFormRegistering ({
      ...formRegistering,
      [name]: value
    })
  }

  const handleFormBtn = () => {
    
    // if (!formRegistering.name,
    //     !formRegistering.surname,
    //     !formRegistering.number,
    //     !formRegistering.email,
    //     !formRegistering.password,
    //     !formRegistering.repeatpassword,
    //     !formRegistering.checkbox) {
    //   setFormIsError(true)
    //   setFormIsSuccess(false)
    //   return
    // }

    // setFormIsError(false)
    // setFormIsSuccess(true)

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

    if (!formRegistering.checkbox) {
      setFormIsError(true)
      setFormIsSuccess(false)
      return
    }

    if (formRegistering.password !== formRegistering.repeatpassword) {
      setFormPassError(true)
      return
    }

    setFormIsError(false)
    setFormIsSuccess(true)
    setFormPassError(false)

    setFormRegistering ({
      ...formRegistering,
      name: formRegistering.name,
      surname: formRegistering.surname,
      number: formRegistering.number,
      email: formRegistering.email,
      password: formRegistering.password,
      repeatpassword: formRegistering.repeatpassword,
      checkbox: formRegistering.checkbox
    })
    console.log(formRegistering.name)
    console.log(formRegistering.surname)
    console.log(formRegistering.number)
    console.log(formRegistering.email)
    console.log(formRegistering.password)
    console.log(formRegistering.repeatpassword)
    console.log(formRegistering.checkbox)
  }

  return (
    <div className="container">
      <div className="form-section-inner">
        <FormTitle />
        <FormText />

        { formIsError ? (<p className="form-error-text">Ошибка в форме!</p>) : '' }
        { formIsSuccess ? (<p className="form-success-text">Регистрация прошла успешно!</p>) : '' }
        { formPassError ? (<p className="form-pass-text">Пароль должен совпадать!</p>) : '' }

        <div className="form-inputs">
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Имя"
            onChange={handleInputChange}
          />

          <input
            className="form-input"
            type="text"
            name="surname"
            placeholder="Фамилия"
            onChange={handleInputChange}
          />

          <input
            className="form-input"
            type="text"
            name="number"
            placeholder="Номер телефона"
            onChange={handleInputChange}
          />

          <input
            className="form-input"
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />

          <input
            className="form-input"
            type="text"
            name="password"
            placeholder="Пароль"
            onChange={handleInputChange}
          />

          <input
            className="form-input"
            type="text"
            name="repeatpassword"
            placeholder="Повторите пароль"
            onChange={handleInputChange}
          />

          <div className="form-checkbox-inner">
          <label>
            <input
            className="form-checkbox"
            type="checkbox" 
            name="checkbox"
            // checked={formIsError ? (true) : false}
            onChange={handleInputChange} /> Подтверждаю пароль 
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