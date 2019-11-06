const express = require('express')
const tanyaJawabController = require('../controller')

const router = express.Router()

router.post('/tanyaadmin', tanyaJawabController.tanyaJawabController.tanyaAdmin)
router.post('/getsoal', tanyaJawabController.tanyaJawabController.getSoal)
router.post('/jawabuser', tanyaJawabController.tanyaJawabController.jawabUser)
router.post('/getjawabanadmin', tanyaJawabController.tanyaJawabController.getJawabanAdmin)
router.post('/getchatuser', tanyaJawabController.tanyaJawabController.getChatUser)

module.exports = router
