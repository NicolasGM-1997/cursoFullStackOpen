import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import Filter from '/src/filter.jsx'
import Note from '/src/note.jsx'
import {NotificacionError, NotificacionSuccess} from '/src/notificacion.jsx'
import {ListNote, ListPaises} from '/src/list.jsx'

import '/src/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
  const [ notes, setNotes] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [ messageSuccess, setMessageSuccess] = useState('')
  const [ messageError, setMessageError] = useState('')

  const obtenerNotas = () => {
  axios.get('http:\/\/localhost:4000\/notes')
    .then(response => {
      setNotes(response.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error)
      setMessageError(error)
      setTimeout(() => {
        setMessageError('')
      }, 3000)
    })
  }

  const agregarNotas = (note) => {
  axios.post('http:\/\/localhost:4000\/notes', note)
    .then(response => {
      setMessageSuccess("Se agrego la nota:"+note.name)
      obtenerNotas()
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

  const eliminarNota = ({id, name}) => {
    if(window.confirm("Desea Eliminar la Nota "+name)){
      axios.delete('http:\/\/localhost:4000\/notes\/'+id)
      .then(response => {
        setMessageSuccess("Se elimino la Nota: "+name)
        obtenerNotas()
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

  const modificarNota = (id, note) => {
    if(window.confirm("Desea Modificar la nota "+note.name)){
      axios.put('http:\/\/localhost:4000\/notes\/'+id , note)
      .then(response => {
        setMessageSuccess("Se modifico la nota: "+note.name)
        obtenerNotas()
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

  useEffect(obtenerNotas, [])

  const enviarDatos = () =>{
    event.preventDefault()
    const newNote = {
      name: newName,
      number: newNumber,
    }
    const nombreExistente = notes.find((note) => note.name === newName)
    if(nombreExistente){
      var id = nombreExistente.id
      modificarNota(id, newNote)
    } else {
      agregarNotas(newNote)
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

  const notasFiltradas = notes.filter((note) =>
    note.name && note.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={enviarDatos}>
        <Filter text="Filter shown with" valor={newFilter} evento={cambioFiltro}/>
        <Note valorName={newName} valorNumber={newNumber} eventoName={cambioNombre} eventoNumber={cambioNumero}/>
        <div>
          <button>add</button>
        </div>
      </form>
      <NotificacionSuccess message={messageSuccess}/>
      <NotificacionError message={messageError}/>
      <h2>Numbers</h2>
      <ListNote notes={notasFiltradas} eliminar={eliminarNota}/>
    </div>
  )
}

root.render(
  <App/>
)

export default App