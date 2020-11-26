import express = require('express')
import cors from 'cors'

type CorsOptions = {
  origin?: boolean
}
const whiteList = process.env.CORS_WHITELIST?.split('')

const corsOptionsDelegate = (
  req: express.Request,
  callback: (val: null, options: CorsOptions) => void
) => {
  let corsOptions: CorsOptions = {}
  const origin = req.header('Origin') as string
  if (whiteList?.indexOf(origin) !== -1) {
    corsOptions['origin'] = true
  } else {
    corsOptions['origin'] = false
  }
  callback(null, corsOptions)
}

export default corsOptionsDelegate
