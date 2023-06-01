import React from 'react';

const Card = ({ encuesta }) => {
  return (
    <div className='card'>
      <h3>Muchas gracias, {encuesta && encuesta.name}</h3>
      <h2>Tu equipo favorito es: {encuesta && encuesta.team}</h2>
    </div>
  );
};

export default Card;