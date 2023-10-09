import React from "react";
import "./FormFooter.css";

const FormFooter = () => {
  return (
    <footer className="form-footer">
      <div className="container">
        <div className="form-footer-inner">
          <div className="form-footer-text-inner">
            <p className="form-footer-text">Уже есть аккаунт ?</p>
            <a className="form-footer-link" href="/">
              Войти
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FormFooter;
