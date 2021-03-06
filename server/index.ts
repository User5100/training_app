import { createServer } from 'http'
import app from './server'

const server = createServer(app)
const PORT = 3000
let currentApp = app

server.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

if (module.hot) {
  module.hot.accept(['./server'], () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}
