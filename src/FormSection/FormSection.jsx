import React from "react";
import { useState } from "react";

const FormSection = () => {
  return (
    <div className="container">
      <div className="form-section-inner">

        <h2 className="form-title">Создание аккаунта</h2>

        <p className="form-text">
          Введите свои данные, чтобы создать аккаунт в сервисе
        </p>

        <input 
        type="text" 
        name="name" 
        placeholder="Имя" />

        <input 
        type="text" 
        name="surname" 
        placeholder="Фамилия" />

        <input 
        type="text" 
        name="number" 
        placeholder="Номер телефона" />

        <input 
        type="text" 
        name="email" 
        placeholder="Email" />

        <input 
        type="text" 
        name="pass" 
        placeholder="Пароль" />

        <input 
        type="text" 
        name="repeat-pass" 
        placeholder="Повторите пароль" />

        <label>
          <input 
          type="checkbox" 
          name="checkbox" 
          id="" />
          Подтверждаю пароль
        </label>

        <button>Продолжить</button>

      </div>
    </div>
  );
};

export default FormSection;
