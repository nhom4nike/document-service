const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  return res.json({
    service: 'document-service',
    api: 'https://api.04-nike.tk/document',
  })
})

module.exports = { endpoint: '/', router }
