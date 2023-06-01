import React, { useState } from 'react';
import Card from './Card';

const Formulario = ({ setEncuesta, encuesta }) => {
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (encuesta.name.length > 3 && encuesta.team.length > 6) {
      setShowCard(true);
      setError(false);
    } else {
      setShowCard(false);
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre del participante: </label>
        <input
          type="text"
          onChange={(e) =>
            setEncuesta((prevEncuesta) => ({
              ...prevEncuesta,
              name: e.target.value,
            }))
          }
        />
        <label>Nombre del equipo: </label>
        <input
          type="text"
          onChange={(e) =>
            setEncuesta((prevEncuesta) => ({
              ...prevEncuesta,
              team: e.target.value,
            }))
          }
        />
        <button>Enviar respuesta</button>
        {error && <p>Por favor, verifica que la información sea correcta.</p>}
      </form>

      {showCard && !error && <Card encuesta={encuesta} />}
    </div>
  );
};

export default Formulario;
