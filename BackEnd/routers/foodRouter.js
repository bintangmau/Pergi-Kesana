const express = require('express')
const foodController = require('../controller')

const router = express.Router()

router.post('/getfood', foodController.foodController.getFood)

module.exports = router