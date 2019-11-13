const express = require('express')
const { foodController } = require('../controller')

const router = express.Router()

router.get('/getfood', foodController.getFood)
router.get('/carifoodnama/:namaFood', foodController.cariFoodNama)
router.get('/carifoodnegara/:namaNegara', foodController.cariFoodNegara)

module.exports = router