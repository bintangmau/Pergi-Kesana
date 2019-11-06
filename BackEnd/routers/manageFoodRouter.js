const express = require('express')
const manageFoodController = require('../controller')

const router = express.Router()

router.post('/getmanagefood', manageFoodController.manageFoodController.getFood)
router.post('/postfood', manageFoodController.manageFoodController.postFood)
router.post('/deletefood', manageFoodController.manageFoodController.deleteFood)

module.exports = router
