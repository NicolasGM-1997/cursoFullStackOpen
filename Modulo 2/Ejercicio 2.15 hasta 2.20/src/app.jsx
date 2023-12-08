import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import Filter from '/src/filter.jsx'
import Person from '/src/person.jsx'
import {NotificacionError, NotificacionSuccess} from '/src/notificacion.jsx'
import {ListPerson, ListPaises} from '/src/list.jsx'

import '/src/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [ messageSuccess, setMessageSuccess] = useState('')
  const [ messageError, setMessageError] = useState('')

  const obtenerPersonas = () => {
  axios.get('http:\/\/localhost:3001\/persons')
    .then(response => {
      setPersons(response.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error)
      setMessageError(error)
      setTimeout(() => {
        setMessageError('')
      }, 3000)
    })
  }

  const agregarPersonas = (person) => {
  axios.post('http:\/\/localhost:3001\/persons', person)
    .then(response => {
      setMessageSuccess("Se agrego la persona:"+person.name)
      obtenerPersonas()
      setTimeout(() => {
        setMessageSuccess('')
      }, 3000)
    })
    .catch(error => {
      console.error('Error fetching data:', error)
      setMessageError(error)
      setTimeout(() => {
        setMessageError('')
      }, 3000)
    })
  }

  const eliminarPersona = ({id, name}) => {
    if(window.confirm("Desea Eliminar la persona "+name)){
      axios.delete('http:\/\/localhost:3001\/persons\/'+id)
      .then(response => {
        setMessageSuccess("Se elimino la persona: "+name)
        obtenerPersonas()
        setTimeout(() => {
          setMessageSuccess('')
        }, 3000)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setMessageError(error)
        setTimeout(() => {
          setMessageError('')
        }, 3000)
      })
    }
  }

  const modificarPersona = (id, persona) => {
    if(window.confirm("Desea Modificar la persona "+persona.name)){
      axios.put('http:\/\/localhost:3001\/persons\/'+id , persona)
      .then(response => {
        setMessageSuccess("Se modifico la persona: "+persona.name)
        obtenerPersonas()
        setTimeout(() => {
          setMessageSuccess('')
        }, 3000)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setMessageError(error)
        setTimeout(() => {
          setMessageError('')
        }, 3000)
      })
    }
  }

  useEffect(obtenerPersonas, [])

  const enviarDatos = () =>{
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    const nombreExistente = persons.find((person) => person.name === newName)
    if(nombreExistente){
      var id = nombreExistente.id
      modificarPersona(id, newPerson)
    } else {
      agregarPersonas(newPerson)
    }
    setNewName('')
    setNewNumber('')
  }

  const cambioNombre = (event) =>{
    setNewName(event.target.value)
  }

  const cambioNumero = (event) =>{
    setNewNumber(event.target.value)
  }

  const cambioFiltro = (event) => {
    setNewFilter(event.target.value)
  }

  const personasFiltradas = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={enviarDatos}>
        <Filter text="Filter shown with" valor={newFilter} evento={cambioFiltro}/>
        <Person valorName={newName} valorNumber={newNumber} eventoName={cambioNombre} eventoNumber={cambioNumero}/>
        <div>
          <button>add</button>
        </div>
      </form>
      <NotificacionSuccess message={messageSuccess}/>
      <NotificacionError message={messageError}/>
      <h2>Numbers</h2>
      <ListPerson persons={personasFiltradas} eliminar={eliminarPersona}/>
    </div>
  )
}

root.render(
  <App/>
)

export default App