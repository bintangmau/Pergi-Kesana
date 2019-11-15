const express = require('express')
const paymentController = require('../controller')

const router = express.Router()

router.post('/getsaldouser', paymentController.paymentController.getSaldoUser)
router.post('/kurangsaldouser', paymentController.paymentController.kurangSaldoUser)
router.post('/tambahsaldoadmin', paymentController.paymentController.tambahSaldoAdmin)
router.post('/gantistatusbayar', paymentController.paymentController.gantiStatusBayar)
router.post('/historikesanapay', paymentController.paymentController.historiKesanaPay)
router.post('/kirimemailuser', paymentController.paymentController.kirimEmailUser)
router.post('/paymenttiket', paymentController.paymentController.paymentTicket)
router.post('/buktitransfer', paymentController.paymentController.buktiTransfer)
router.post('/atmpayment', paymentController.paymentController.atmPayment)
router.get('/getidpaket/:idPeserta', paymentController.paymentController.getIdpaket)
router.put('/paymentconfirm', paymentController.paymentController.paymentConfirm)
router.post('/tiketatmpayment', paymentController.paymentController.tiketAtmPayment)

module.exports = router