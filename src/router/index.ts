import express = require('express')

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  return res.json('Welcome to the emotions machine learning experience ')
})

router.post('/handleAndroidOptionRequest',(req: express.Request, res: express.Response) => {
  const webHookRequest: any = req.body
  return res.json({
    "followupEventInput": {
      "name": "android-event",
      "languageCode": "en-US",
      "parameters": {
        "operatingSystem": "Android"
      }
    }
  })
})

export default router