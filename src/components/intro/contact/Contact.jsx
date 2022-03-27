import React, { useRef, useState, useEffect } from 'react';
import Axios from "axios";
// import emailjs from '@emailjs/browser';
import "./contact.css";
import Instagram from "../../../img/instagram.png";
import Phone from "../../../img/phone.png";
import Email from "../../../img/email.png";
// import Admin from '../../admin/Admin';
// import api from '../../../services/api';

const Contact = () => {
  
  const [values, setValues] = useState();
  /* const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3x78m87',
      'template_e5dezao',
      formRef.current,
      'user_Y1zIKI834nrxKTcE6rylR'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    const forms = document.querySelector('form');
    forms.reset();
  }; */

   const handleClick = () => {
      Axios.post("https://arabela-backend.herokuapp.com/user", {
       name: values.user_name,
       email: values.user_email,
       wpp: values.user_wpp,
       music: values.message,
     }).then((response) => {
       console.log(response);
     })
  }

  const handleChange = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  return (
    <div>
      <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Nos contrate!</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img
                  src={Instagram}
                  alt=""
                  className="c-icon"
                />
                @Arabela.banda
              </div>
              <div className="c-info-item">
                <img
                  src={Phone}
                  alt=""
                  className="c-icon"
                />
                15991274518
              </div>
              <div className="c-info-item">
                <img
                  src={Email}
                  alt=""
                  className="c-icon"
                />
                Arabela.contato@gmail.com
              </div>
            </div>
          </div>
          <div className="c-right">
            <h1>Escolha sua Música e/ou Artista!</h1>
              <input
                type="text"
                placeholder='Nome'
                name="user_name"
                onChange={ handleChange }
                required
              />
              <input
                type="text"
                placeholder='Email'
                name="user_email"
                onChange={ handleChange }
                required
              />

              <input
                type="text"
                placeholder='Wpp'
                name="user_wpp"
                onChange={ handleChange }
                required
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder='Música e Artista'
                onChange={ handleChange }
                required
              >
              </textarea>
              <button
               type=''
               onClick={ () => handleClick() }
               >
                 Enviar
                 </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;