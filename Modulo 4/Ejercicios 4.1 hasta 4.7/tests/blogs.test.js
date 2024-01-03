const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are one blog', async () => {
  const response = await api.get('/blogs')
  expect(response.body)
})

test('the first note is about HTTP methods', async () => {
  const response = await api.get('/blogs')
  expect(response.body[0].title).toBe('El viaje 7')
})

test('the first note is about HTTP methods', async () => {
  const response = await api.get('/blogs')
  expect(response.body[0].author).toBe('Nicolas')
})

test('the first note is about HTTP methods', async () => {
  const response = await api.get('/blogs')
  expect(response.body[0].likes).toBe(2100)
})

test('the first note is about HTTP methods', async () => {
  const response = await api.get('/blogs')
  expect(response.body[0].id_author).toBe(1200)
})

afterAll(() => {
  mongoose.connection.close()
})