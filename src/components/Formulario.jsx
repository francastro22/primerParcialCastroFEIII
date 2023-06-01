import React from 'react'

const Formulario = ({setTeam}) => {

    const [nombre, setNombre] = useState({
        nombre: '',
        equipo: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(nombre.length > 3 && equipo.length > 4) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
        
    }
    console.log(team)
  return (
    <div>
        <form onSubmit={handleSubmit}/>
        <label >Nombre del participante: </label>
          <input type="text" disabled={show} onChange={(e) => setNombre({...nombre, nombre: e.target.value })} />
  
          <label >Nombre del equipo de futbol </label>
          <input type="text" disabled={show} onChange={(e) => setNombre({...nombre, equipo: e.target.value })}/>
          <button>Mandar respuesta</button>
{error && 'Verifique bien su información'}
</form>

{show ? 
<>
    <h3>Muchas gracias, {nombre.nombre}!</h3>
    <h2>Tu equipo de futbol es {nombre.equipo}.</h2>
</>
:
null
}

</div>
)
}

export default Formulario
