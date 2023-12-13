const express = require('express')
const app = express()

let notes = [
	{
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

const fechaHoraActual = new Date();
const fechaHoraCompleta = fechaHoraActual.toLocaleString();
const numNotas = notes.length

app.get('/info', (request, response) => {
  response.send(
  	"<p>"
  	+"Phonebook has info for "+numNotas+" people<br>"
  	+fechaHoraCompleta
  	+"</p>"
  )
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

app.use(express.json())

app.post('/api/notes', (request, response) => {

  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id)) 
    : 0

  const newNote = request.body
  newNote.id = maxId + 1

  const nombreExistente = notes.find((note) => note.name === newNote.name)

  if(nombreExistente){
  	return response.send("<p>Nombre existente</p>")
  }

  if(newNote.name==='' || newNote.number===''){
  	return response.send("<p>Nombre o numeros Nulos</p>")
  }

  notes = notes.concat(newNote)

  response.json(newNote)
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})