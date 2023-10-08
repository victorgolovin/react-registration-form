import React from "react";
import { useState } from "react";
import "./FormSection.css";
import FormTitle from "../FormTitle/FormTitle";
import FormText from "../FormText/FormText";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FromInput/FormInput";


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
  const [formCheckboxIsChecked, setFromCheckboxIsChecked] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setFormRegistering ({
      ...formRegistering,
      [name]: value,
    })
  }
 
  const handleFormBtn = () => {

    if(!formRegistering.name,
      !formRegistering.surname,
      !formRegistering.number,
      !formRegistering.email) {
        setFormIsError(true)
        setFormIsSuccess(false)
        return
      }

    setFormIsError(false)

    if (!formRegistering.password,
      !formRegistering.repeatpassword) {
      setFormIsError(true)
      setFormIsSuccess(false)
      return
    }

    if (formRegistering.password !== formRegistering.repeatpassword) {
      setFormPassError(true)
      return
    }

    setFormPassError(false)

    if (!formRegistering.checkbox) {
      setFormIsSuccess(false)
      setFromCheckboxIsChecked(true)
      return
    }
    
    setFormIsSuccess(true)
    setFromCheckboxIsChecked(false)
    

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
    console.log(typeof formRegistering.number)
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
        { formCheckboxIsChecked ? (<p className="form-checkbox-text">Нажмите "Подтверждаю пароль"!</p>) : '' }


        <div className="form-inputs">

          <FormInput
          className={"form-input"}
          type={"text"}
          name={"name"}
          placeholder={"Имя"}
          onChange={handleInputChange}
           />

          <FormInput
          className={"form-input"}
          type={"text"}
          name={"surname"}
          placeholder={"Фамилия"}
          onChange={handleInputChange}
           />

          <FormInput
          className={"form-input"}
          type={"number"}
          name={"number"}
          placeholder={"Номер телефона"}
          onChange={handleInputChange}
           />

          <FormInput
          className={"form-input"}
          type={"text"}
          name={"email"}
          placeholder={"Email"}
          onChange={handleInputChange}
           />

          <FormInput
          className={"form-input"}
          type={"text"}
          name={"password"}
          placeholder={"Пароль"}
          onChange={handleInputChange}
           />

          <FormInput
          className={"form-input"}
          type={"text"}
          name={"repeatpassword"}
          placeholder={"Повторите пароль"}
          onChange={handleInputChange}
           />

          <div className="form-checkbox-inner">
          <label className="form-checkbox">            
            <input
            className="form-checkbox-input"
            type="checkbox" 
            name="checkbox"
            onChange={handleInputChange} /> Подтверждаю пароль
            <span className="check-box"></span>
          </label>
          </div>
        </div>

        <FormButton
        className={"form-button"}
        onClick={handleFormBtn}
        text={"Продолжить"}
         />

        <div className="form-footer-text-inner">
          <p className="form-footer-text">Уже есть аккаунт ?</p>
          <a className="form-footer-link" href="/">
            Войти
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormSection;