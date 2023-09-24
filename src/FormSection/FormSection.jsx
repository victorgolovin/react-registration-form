import React from "react";
import { useState } from "react";
import './FormSection.css'
import FormTitle from "../FormTitle/FormTitle"
import FormText from "../FormText/FormText"


const FormSection = () => {
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
        placeholder="Имя" />

        <input 
        className="form-input"
        type="text" 
        name="surname" 
        placeholder="Фамилия" />

        <input 
        className="form-input"
        type="text" 
        name="number" 
        placeholder="Номер телефона" />

        <input 
        className="form-input"
        type="text" 
        name="email" 
        placeholder="Email" />

        <input 
        className="form-input"
        type="text" 
        name="pass" 
        placeholder="Пароль" />

        <input 
        className="form-input"
        type="text" 
        name="repeat-pass" 
        placeholder="Повторите пароль" />

        <div className="form-checkbox-inner">
          <label className="custom-checkbox" htmlFor="form-checkbox">
            <input 
          className="form-checkbox"
          type="checkbox" 
          name="checkbox" 
          id="form-checkbox" />
          Подтверждаю пароль
          </label>
        </div>
      </div>
        

      <button className="form-button">Продолжить</button>

      <div className="form-bottom-text-inner">
        <p className="form-bottom-text">Уже есть аккаунт ?</p>
        <a className="form-bottom-link" href="/">Войти</a>
      </div>
      

      </div>
    </div>
  );
};

export default FormSection;
