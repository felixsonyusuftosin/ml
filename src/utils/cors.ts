import express = require('express')

type CorsOptions = {
  origin?: boolean
}
const whiteList = process.env.CORS_WHITELIST?.split('')

const corsOptionsDelegate = (
  req: express.Request,
  callback: any
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
