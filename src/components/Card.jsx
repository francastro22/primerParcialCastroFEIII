import React from 'react'

const Card = ({team}) => {
  return (
    <div className='card'>

    <h3>Nombre: {team.name}</h3>
    <h2>Tu equipo favorito es: {team.team}</h2> 
    </div>
  )
}

export default Card