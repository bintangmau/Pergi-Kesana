const express = require('express')
const manageTravelController = require('../controller')

const router = express.Router()

router.post('/getmanagetravel', manageTravelController.manageTravelController.getManageTravel)
router.post('/posttravel', manageTravelController.manageTravelController.postTravel)
router.post('/deletetravel', manageTravelController.manageTravelController.deleteTravel)
router.post('/deletepeserta', manageTravelController.manageTravelController.deletePesertaTravel)
router.get('/getpeserta/:idPaket', manageTravelController.manageTravelController.getPeserta)
router.post('/getnameuser', manageTravelController.manageTravelController.getNamaUser)
router.post('/getedittravel', manageTravelController.manageTravelController.getEditTravel)
router.post('/editdestinasi', manageTravelController.manageTravelController.editDestinasi)
router.post('/editharga', manageTravelController.manageTravelController.editHarga)
router.post('/editmaskapai', manageTravelController.manageTravelController.editMaskapai)
router.post('/edithotel', manageTravelController.manageTravelController.editHotel)
router.post('/editberangkat', manageTravelController.manageTravelController.editBerangkat)
router.post('/editpulang', manageTravelController.manageTravelController.editPulang)
router.post('/editkuota', manageTravelController.manageTravelController.editKuota)
router.post('/editwisata', manageTravelController.manageTravelController.editWisata)
router.post('/editdeskripsi', manageTravelController.manageTravelController.editDeskripsi)
router.post('/editgambar', manageTravelController.manageTravelController.editGambar)
router.post('/editbatasbayar', manageTravelController.manageTravelController.editBatasBayar)
router.get('/gettravelfilter/:destinasi', manageTravelController.manageTravelController.getTravelFilter)


module.exports = router