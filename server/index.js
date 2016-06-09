import http from 'http'
import express from 'express'
import config from '../config'


const app = express()
app.disable('x-powered-by')

app.use(express.static(config.paths.build));
app.use(require('./middleware/spa'))

const httpServer = http.createServer(app)


export default httpServer
  