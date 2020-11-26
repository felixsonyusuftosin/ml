import express = require('express')
import createError from 'http-errors'
import cookieParser from 'cookie-parser'
import cors from './utils/cors'
import router from './router/index'
import producer from './kafka/index'

const app = express()
const NODE_ENV = process.env.NODE_ENV


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(router)
app.use(cors)

app.use((req, res, next) => {
  next(producer)
})
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = NODE_ENV === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json('something happened')
})

export default app