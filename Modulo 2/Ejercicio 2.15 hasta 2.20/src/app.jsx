import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import Filter from '/src/filter.jsx'
import Person from '/src/person.jsx'
import {ListPerson, ListPaises} from '/src/list.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  const obtenerPersonas = () => {
  axios.get('http:\/\/localhost:3001\/persons')
    .then(response => {
      setPersons(response.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  }

  const agregarPersonas = (person) => {
  axios.post('http:\/\/localhost:3001\/persons', person)
    .then(response => {
      alert("Agregar Persona "+person.name)
      obtenerPersonas()
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  }

  const eliminarPersona = ({id, name}) => {
    if(window.confirm("Desea Eliminar la persona "+name)){
      axios.delete('http:\/\/localhost:3001\/persons\/'+id)
      .then(response => {
        alert("Persona Eliminada :"+name)
        obtenerPersonas()
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
    }
  }

  const modificarPersona = (id, persona) => {
    if(window.confirm("Desea Modificar la persona "+persona.name)){
      axios.put('http:\/\/localhost:3001\/persons\/'+id , persona)
      .then(response => {
        alert("Persona Actualizada :"+persona.name)
        obtenerPersonas()
      })
      .catch(error => {
        console.error('Error fetching data:', error);
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
    setNewFilter(event.target.value);
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
      <h2>Numbers</h2>
      <ListPerson persons={personasFiltradas} eliminar={eliminarPersona}/>
    </div>
  )
}

root.render(
  <App/>
)

export default App