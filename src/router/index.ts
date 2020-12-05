import express = require('express')

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  return res.json('Welcome to the emotions machine learning experience ')
})

router.post(
  '/handleAndroidOptionRequest',
  (req: express.Request, res: express.Response) => {
    const webHookRequest: any = req.body
    const intentName = webHookRequest.intent.displayName
    switch (intentName) {
      case 'OS Choice IOS':
        return res.json({
          followupEventInput: {
            name: 'ios-event',
            languageCode: 'en-US',
            parameters: {
              operatingSystem: 'IOS'
            }
          }
        })
      case 'OS Choice Android':
        res.json({
          followupEventInput: {
            name: 'android-event',
            languageCode: 'en-US',
            parameters: {
              operatingSystem: 'Android'
            }
          }
        })
        return
      default:
        return null
    }
    return
  }
)

export default router
