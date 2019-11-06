const express = require('express')
const saldoUserController = require('../controller')

const router = express.Router()

router.post('/getsaldouser', saldoUserController.saldoUserController.getSaldoUser)
router.post('/bukadompet', saldoUserController.saldoUserController.bukaDompet)
router.post('/topup', saldoUserController.saldoUserController.topUp)
router.post('/topuphistory', saldoUserController.saldoUserController.topUpHistory)

module.exports = router