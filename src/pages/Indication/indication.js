import React, { useState } from 'react';
import './indication.css';
import p1 from '../../images/p1.jpg';
import p3 from '../../images/p3.jpg';
import p2 from '../../images/whatsapp.png';

function Indication() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // Substitua "NUMERO_DE_TELEFONE" pelo número de telefone real, incluindo o código de área e código do país, sem espaços ou caracteres especiais.
  const whatsappLink = 'https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONE';

  const text = ['Sou a Laiza, psicóloga especialista em Terapia Cognitivo Comportamental, experiência voltada principalmente a tratamento de ansiedade e depressão. Ajudar pessoas a encontrar seu ponto de equilíbrio é minha verdadeira paixão.',
                'Sou uma psicóloga que trabalha com a abordagem comportamental. Meu trabalho envolve compreender e transformar comportamentos, promovendo o bem-estar e o crescimento pessoal.'
                ];

  return (
    <div className='container'>
      <div
        className={`card top ${isHovered1 ? 'hovered' : ''}`}
        style={{ backgroundColor: '#5bc0be' }}
        onMouseOver={() => setIsHovered1(true)}
        onMouseOut={() => setIsHovered1(false)}
      >
        <div className='card-content'>
          <div className="image-container">
            <div className={`image-flip ${isHovered1 ? 'hovered' : ''}`}>
              <div className='image-front'>
                <a href={whatsappLink}>
                  <img
                    className='profile-image'
                    src={p3}
                    alt='Nome do Usuário'
                  />
                </a>
              </div>
              <div className='image-back'>
                <img
                  className='profile-image'
                  src={p2}
                  alt='Nome do Usuário'
                />
              </div>
            </div>
          </div>
          <h2 className='name primeira'>Fabiane Garbato</h2>
          <p className='description description1'>{text[1]}</p>
        </div>
      </div>
      <div
        className={`card bottom ${isHovered2 ? 'hovered' : ''}`}
        style={{ backgroundColor: '#fff' }}
        onMouseOver={() => setIsHovered2(true)}
        onMouseOut={() => setIsHovered2(false)}
      >
        <div className='card-content'>
          <div className="image-container">
            <div className={`image-flip ${isHovered2 ? 'hovered' : ''}`}>
              <div className='image-front'>
                <a href={whatsappLink}>
                  <img
                    className='profile-image image-center'
                    src={p1}
                    alt='Nome do Usuário'
                  />
                </a>
              </div>
              <div className='image-back'>
                <img
                  className='profile-image image-center'
                  src={p2}
                  alt='Nome do Usuário'
                />
              </div>
            </div>
          </div>
          <h2 className='name segunda'>Laiza Stefankowski</h2>
          <p className='description description2'>{text[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default Indication;