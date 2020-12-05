import express = require('express')

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  return res.json('Welcome to the emotions machine learning experience ')
})

router.get('/handleAndroidOptionRequest',(req: express.Request, res: express.Response) => {
  const webHookRequest: any = req.body
  return res.json({
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            "Text response from webhook"
          ]
        }
      }
    ]
  })
})

export default router