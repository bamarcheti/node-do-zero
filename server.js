// import { createServer } from 'node:http';

// const server = createServer((resquest, response) => {
//   response.write('Hello World');

//   return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
  return 'Hello World'
})

server.get('/hello', () => {
  return 'Hello Rocketseat'
})

server.get('/node', () => {
  return 'Hello Node.js'
})

server.listen({
  port: 3333
})