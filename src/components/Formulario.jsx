import React from 'react'
import { useState } from 'react'

const Formulario = ({setEncuesta}, {encuesta}) => {

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(encuesta.name.length > 3 && encuesta.team.length > 6) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
        
    }
    console.log({encuesta})

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label >Nombre del participante: </label>
        <input type="text" disabled={show} onChange={(e) => setEncuesta((prevEncuesta) => ({...prevEncuesta, name: e.target.value}))}/>
        <label >Nombre del equipo: </label>
        <input type="text" disabled={show} onChange={(e) => setEncuesta((prevEncuesta) => ({...prevEncuesta, team: e.target.value}))}/>
        <button>Enviar respuesta</button>
        {error && 'Por favor chequea que la información sea correcta'}
        </form>

        {show ? 
            <>
                <h2> .... </h2>
            </>
            :
            null
        }

    </div>
  )
}

export default Formulario