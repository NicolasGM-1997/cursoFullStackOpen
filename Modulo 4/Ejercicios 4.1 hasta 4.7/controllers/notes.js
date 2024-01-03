const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

notesRouter.get('/:id_user', (request, response, next) => {
  const userId = request.params.id_user;
  Note.findOne({id_user: userId})
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

notesRouter.post('/', (request, response, next) => {
  const body = request.body

  const note = new Note({
    name: body.name,
    number : body.number,
    id_user: body.id_user
  })

  note.save()
    .then(savedNote => {
      response.json(savedNote)
    })
    .catch(error => next(error))
})

notesRouter.delete('/:id_user', (request, response, next) => {
  const userId = request.params.id_user;
  Note.findOneAndDelete({id_user: userId})
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

notesRouter.put('/:id_user', (request, response, next) => {
  const body = request.body

  const note = {
    name: body.name,
    number: body.number,
    id_user : body.id_user,
  }

  const userId = request.params.id_user;

  Note.findOneAndUpdate({ id_user: userId }, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

module.exports = notesRouter