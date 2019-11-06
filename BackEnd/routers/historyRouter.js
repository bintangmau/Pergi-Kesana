const express = require('express')
const historyController = require('../controller')

const router = express.Router()

router.post('/gethistorysaldouser', historyController.historyController.getHistoryIsiSaldoUser)
router.post('/adminhistori', historyController.historyController.adminHistori)
router.post('/usercanceltravelhistory', historyController.historyController.userCancelTravelHistory)
router.get('/pemasukanadmin', historyController.historyController.pemasukanAdmin)
router.post('/historitransaksiuser', historyController.historyController.historiTransaksiUser)

module.exports = router