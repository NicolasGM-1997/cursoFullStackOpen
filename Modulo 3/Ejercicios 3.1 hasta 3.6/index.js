const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use(express.static(path.join(__dirname, '/dist')))

// configuracion base de datos mongo db
const mongoURI = 'mongodb+srv://Nicolas1997:ZLtmOEhBZP9hKMSF@cluster0.0vvy4j1.mongodb.net/notas_ejemplo?retryWrites=true&w=majority'
mongoose.connect(mongoURI)

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  name: "Juan",
  number: "12345",
  id: 1000,
})

/*note.save().then(result => {
  console.log('note saved!')
})*/

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})



app.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body && console.log('Request Body:', req.body)
  }
  next()
})

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

const fechaHoraActual = new Date();
const fechaHoraCompleta = fechaHoraActual.toLocaleString();
const numNotas = notes.length

app.get('/info', (request, response) => {
  response.send(
  	"<p>"
  	+"Phonebook has info for "+numNotas+" people<br>"
  	+fechaHoraCompleta+" :"+note
  	+"</p>"
  )
})

app.get('/notes', (request, response) => {
  response.json(notes)
})

app.get('/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

app.post('/notes', (request, response) => {

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


app.put('/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const updatedNoteData = req.body;

  // Encuentra la nota correspondiente en el array 'notes'
  const noteToUpdate = notes.find((note) => note.id === id);

  if (!noteToUpdate) {
    return res.status(404).send('Nota no encontrada');
  }

  // Actualiza los campos de la nota con los nuevos datos
  noteToUpdate.name = updatedNoteData.name || noteToUpdate.name;
  noteToUpdate.number = updatedNoteData.number || noteToUpdate.number;

  res.json(noteToUpdate);
});

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})