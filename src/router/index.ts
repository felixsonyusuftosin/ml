import express = require('express')

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  return res.json('Welcome to the emotions machine learning experience ')
})

router.post(
  '/handleAndroidOptionRequest',
  (req: express.Request, res: express.Response) => {
    const webHookRequest: any = req.body
    console.log( webHookRequest, ' ===>')
    const intentName = webHookRequest.queryResult.intent.displayName

    let response
    switch (intentName) {
      case 'OS Choice IOS':
        response = {
          followupEventInput: {
            name: 'ios-event',
            languageCode: 'en-US',
            parameters: {
              operatingSystem: 'IOS'
            }
          }
        }
        break
      case 'OS Choice Android':
        response = {
          followupEventInput: {
            name: 'android-event',
            languageCode: 'en-US',
            parameters: {
              operatingSystem: 'Android'
            }
          }
        }
        break
      default:
        break
    }
    res.json(response)
  }
)

export default router
