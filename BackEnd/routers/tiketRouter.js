const express = require('express')
const { tiketController } = require('../controller')

const router = express.Router()

router.get('/getalltiket', tiketController.getAllTiket)
router.post('/posttiket', tiketController.postTicket)
router.post('/editmaskapai', tiketController.editMaskapai)
router.post('/editcode', tiketController.editCode)
router.post('/editdari', tiketController.editDari)
router.post('/editto', tiketController.editTo)
router.post('/editberangkat', tiketController.editBerangkat)
router.post('/editdurasi', tiketController.editDurasi)
router.post('/editseat', tiketController.editSeat)
router.post('/edittime', tiketController.editTime)
router.post('/caritiket', tiketController.cariTiket)
router.post('/getbookingtiket', tiketController.getBookingTiket)
router.post('/deletetiket', tiketController.deleteTiket)
router.post('/getmytiket', tiketController.getMyTicket)
router.post('/getcaritiketadmin', tiketController.getCariTiketAdmin)
router.get('/progressTiket/:idTiket', tiketController.progressTiket)

module.exports = router