import fs from 'fs'
import path from 'path'
import morgan from 'morgan'
import rfs from 'rotating-file-stream'

const logDirectory = path.join(__dirname, 'logs')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
const accessLogStream = rfs('logfile.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})

const logger = morgan('combined', { stream: accessLogStream })

export default logger
