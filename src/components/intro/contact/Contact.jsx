import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import Instagram from "../../../img/instagram.png";
import Phone from "../../../img/phone.png";
import Email from "../../../img/email.png";
import Admin from '../../admin/Admin';

const Contact = () => {
  const formRef = useRef();

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
  };

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
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder='Nome'
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder='Email'
                name="user_email"
                required
              />

              <input
                type="number"
                placeholder='Wpp'
                name="user_wpp"
                required
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder='Música e Artista'
                required
              >
              </textarea>
              <button type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <Admin />
    </div>
  );
};

export default Contact;