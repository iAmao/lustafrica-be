import 'module-alias/register'

import helmet from 'helmet'
import express from 'express'
import bodyParser from 'body-parser'

import apps from '_/'
import rh from '_/util/response.handler'

import logger from './config/logger'

const { PORT = 3000 } = process.env

const app = express()
const router = express.Router()

apps(router)

app.use(logger)
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => (
  rh(res, 200, {
    message: 'Lustafrica API',
    versions: {
      v1: '/api/v1'
    }
  })
))

app.use('/api/v1', router)

app.use('*', (req, res) => rh(res, 404, [{ message: 'resource not found' }]))

app.listen(PORT, () => console.log(`app started on PORT :${PORT}`))
