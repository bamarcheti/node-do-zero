import { fastify } from 'fastify'

const server = fastify()

server.post('/videos', () => {
  return 'Hello World'
})

server.get('/videos', () => {
  return 'Hello Rocketseat'
})

server.put('/videos/:id', () => {
  return 'Hello Node.js'
})

server.delete('/videos/:id', () => {
  return 'Hello Node.js'
})

server.listen({
  port: 3333
})