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

module.exports = router