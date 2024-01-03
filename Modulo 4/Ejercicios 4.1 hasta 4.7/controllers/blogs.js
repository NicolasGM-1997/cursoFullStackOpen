const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  Blog.find({})
    .then(blogs => {
      response.json(blogs)
    })
})

blogsRouter.get('/:id_author', async (request, response, next) => {
  const userAuthor = parseInt(request.params.id_author)
  Blog.findOne({id_author: userAuthor})
    .then(blog => {
      if (blog) {
        response.json(blog)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body

  const blog = new Blog({
    title: body.title,
    author: body.author,
    likes: body.likes,
    id_author: body.id_author,
  })

  blog.save()
    .then(savedBlog => {
      response.json(savedBlog)
    })
    .catch(error => next(error))
})

blogsRouter.delete('/:id_author', async (request, response, next) => {
  const userAuthor = parseInt(request.params.id_author)
  Blog.findOneAndDelete({id_author: userAuthor})
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

blogsRouter.put('/:id_author', async (request, response, next) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    likes: body.likes,
  }

  const userAuthor = parseInt(request.params.id_author)

  Blog.findOneAndUpdate({id_author: userAuthor}, blog, { new: true })
    .then(updatedBlog => {
      response.json(updatedBlog)
    })
    .catch(error => next(error))
})

module.exports = blogsRouter