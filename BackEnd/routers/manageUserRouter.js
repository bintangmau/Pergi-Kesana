const express = require('express')
const { manageUserController } = require('../controller')

const router = express.Router()

router.post('/getmanageusers', manageUserController.getManageUsers)
router.post('/deleteusers', manageUserController.deleteManageUsers)
router.post('/cariuser', manageUserController.cariUser)

module.exports = router