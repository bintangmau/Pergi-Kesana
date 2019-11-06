const express = require('express')
const analisaController = require('../controller')

const router = express.Router()

router.post('/userterdaftar', analisaController.analisaController.userTerdaftar)
router.post('/dikunjungiuser', analisaController.analisaController.dikunjungiUser)
router.post('/totaltopup', analisaController.analisaController.totalTopUp)
router.post('/pendaftarantravel', analisaController.analisaController.pendaftaranTravel)
router.post('/pembatalantravel', analisaController.analisaController.pembatalanTravel)
router.post('/getisiulanguser', analisaController.analisaController.getTotalIsiUlangUser)
router.post('/gettotalpendaftarantravel', analisaController.analisaController.getTotalPendaftaranTravel)
router.post('/getpembatalantravel', analisaController.analisaController.getPembatalanTravel)
router.post('/transaksiberhasil', analisaController.analisaController.transaksiBerhasil)
router.get('/transaksiberhasildetails', analisaController.analisaController.transaksiBerhasilDetails)

module.exports = router