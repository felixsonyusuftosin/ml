import app from './App'
import http from 'http'
import { createHttpTerminator } from "http-terminator"

const { createTerminus } = require("@godaddy/terminus")


const NODE_ENV = process.env.NODE_ENV
const port = process.env.PORT
const host = process.env.HOST


const server = http.createServer(app)

const onSignal = async () => {
  console.log("server is starting cleanup")
  // start cleanup of resource, like databases or file descriptors
}

const onHealthCheck = async () => {
  console.log(" health check goes here  ")
  return
}

createTerminus(server, {
  signal: "SIGINT",
  healthChecks: { "/healthcheck": onHealthCheck },
  onSignal,
})

if (NODE_ENV === "production") {
  const httpTerminator = createHttpTerminator({ server })
  setTimeout(() => {
    httpTerminator.terminate()
  }, 1000)
}

server.listen(port, () => {
  console.log(`FTS server is running at  ${host}:${port}`)
})

