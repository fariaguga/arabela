import React from 'react';
import './intro.css';
import blues_no from '../../img/blues_no.png'
import Contact from './contact/Contact';

const Intro = () => {
  return (
    <div>
      <div className='i'>
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className='i-intro'>Olá, </h2>
            <h1 className="i-name">Arabelos 👊 🎸</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Peça uma música</div>
                <div className="i-title-item">Choose a song</div>
                <div className="i-title-item">Elige una canción</div>
                <div className="i-title-item">曲を選ぶ</div>
              </div>
            </div>
            <div className="i-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse non metus vitae ante accumsan consectetur id a augue. Nullam quis urna ut urna cursus venenatis.
              Sed nec molestie arcu, id consequat ex.
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={blues_no} alt="" className='i-img' />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Intro;