const config = require('./utils/config.js')
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const notesRouter = require('./controllers/notes.js')
const middleware = require('./utils/middleware.js')
const logger = require('./utils/logger.js')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(morgan('dev'))
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.get('/', (request, response) => {
  response.send(
  	"<p>Hola Mundo</p>"
  )
})

app.use('/notes', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)



module.exports = app