import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Card from './components/Card';
import './App.css';

function App() {
  const [encuesta, setEncuesta] = useState({
    name: '',
    team: '',
  });
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = () => {
    setShowCard(true);
  };

  return (
    <>
      <Formulario
        setEncuesta={setEncuesta}
        encuesta={encuesta}
        onSubmit={handleSubmit}
      />
      {showCard && <Card encuesta={encuesta} />}
    </>
  );
}

export default App;

