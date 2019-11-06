const express = require('express')
const { userController } = require('../controller')

const router = express.Router()

router.post('/login', userController.userLogin)
router.post('/register', userController.userRegister)
router.post('/registerhistory', userController.registerHistory)
router.post('/loginhistory', userController.loginHistory)
router.post('/editdatauser/:id', userController.editDataUser)

module.exports = router