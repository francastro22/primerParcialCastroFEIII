import React from 'react'

const Card = ({encuesta}) => {
  return (
    <div className='card'>
        <h2>Encuesta de equipos de fútbol de Argentina</h2>
        <h2>Nombre Completo: {encuesta.name}</h2>
        <h2>Su equipo es: {encuesta.team}</h2>

    </div>
  )
}

export default Card