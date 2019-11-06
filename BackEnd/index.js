const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const { userRouter, manageUserRouter, travelRouter, manageTravelRouter, tanyaJawabRouter, manageFoodRouter, foodRouter, saldoUserRouter, historyRouter
, analisaRouter, paymentRouter } = require('./routers')

app.use('/user', userRouter)    
app.use('/manageuser',manageUserRouter)
app.use('/travel', travelRouter)
app.use('/managetravel', manageTravelRouter)
app.use('/tanyajawab', tanyaJawabRouter)
app.use('/managefood', manageFoodRouter)
app.use('/food', foodRouter)
app.use('/saldouser', saldoUserRouter)
app.use('/history', historyRouter)
app.use('/analisa', analisaRouter)
app.use('/payment', paymentRouter)

app.listen(port, () => console.log('API aktif di port ' + port))