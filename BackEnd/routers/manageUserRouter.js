const express = require('express')
const manageUserController = require('../controller')

const router = express.Router()

router.post('/getmanageusers', manageUserController.manageUserController.getManageUsers)
router.post('/deleteusers', manageUserController.manageUserController.deleteManageUsers)


module.exports = router