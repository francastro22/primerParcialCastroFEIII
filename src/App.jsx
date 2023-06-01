import { useState } from 'react'
import Card from '../components/Card';
import './App.css'
import Formulario from './components/Formulario';

function App() {

  const [team, setTeam] = useState({
    name: '',
    team: ''
   })

  return (
    <>
      <Formulario setTeam={setTeam} />
      <Card team={team}/>
    </>
  );
}

export default App
