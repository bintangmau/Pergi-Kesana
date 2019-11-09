const express = require('express')
const travelController = require('../controller')

const router = express.Router()

router.post('/gettravel', travelController.travelController.getTravel)
router.post('/gettraveldetails', travelController.travelController.getTravelDetails)
router.post('/daftartrip', travelController.travelController.daftarTrip)
router.post('/gettripuser', travelController.travelController.getTripUser)
router.post('/canceltrip', travelController.travelController.cancelTrip)
router.post('/gethargatotal', travelController.travelController.getHargaTotal)
router.post('/gethargaperitem', travelController.travelController.getHargaPerItem)
router.post('/daftartriphistory', travelController.travelController.daftarTripHistory)
router.post('/getnamatravel', travelController.travelController.getNamaTravel)
router.post('/canceltriphistory', travelController.travelController.cancelTripHistory)
router.post('/tutuppendaftaran', travelController.travelController.tutupPendaftaran)
router.post('/canceltripnopay', travelController.travelController.cancelTripNoPay)

module.exports = router