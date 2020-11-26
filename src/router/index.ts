import express = require('express')

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  return res.json('Welcome to the emotions machine learning experience ')
})

export default router