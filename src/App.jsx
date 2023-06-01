import { useState } from 'react'
import Formulario from './components/Formulario'
import Card from './components/Card'
import './App.css'

function App() {


  const [encuesta, setEncuesta] = useState({
    name: '',
    team: ''
   })

  return (
    <>
     <Formulario setEncuesta={setEncuesta} encuesta={encuesta} />
     <Card encuesta={encuesta} />
    </>
  );
  }

export default App
