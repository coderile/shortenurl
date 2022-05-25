const express = require("express");
const router = express.Router()
const urlController = require('../controller/url.controller')
router
.get('/:shortid',urlController.originalUrl)
.post('/short_url',urlController.shortUrl)

module.exports = router