const express = require('express')
const { historyController } = require('../controller')

const router = express.Router()

router.post('/gethistorysaldouser', historyController.getHistoryIsiSaldoUser)
router.post('/adminhistori', historyController.adminHistori)
router.post('/usercanceltravelhistory', historyController.userCancelTravelHistory)
router.get('/pemasukanadmin', historyController.pemasukanAdmin)
router.post('/historitransaksiuser', historyController.historiTransaksiUser)
router.get('/historitransaksitiket/:idUser', historyController.historiTransaksiTiket)

module.exports = router