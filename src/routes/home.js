const express = require('express')
const { document } = require('../controllers/index')

const router = express.Router()

router.get('/linkupload', async (req, res, next) => {
  try {
    const uri = await document.createLinkUpload(req)
    res.status(200).json({ uri })
  } catch (err) {
    next(err)
  }
})
router.get('/', async (req, res) => {
  return res.json({
    service: 'document-service',
    api: 'https://api.04-nike.tk/document'
  })
})

module.exports = { endpoint: '/', router }
