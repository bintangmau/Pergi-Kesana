const { db } = require('../database')

module.exports = {
    getSaldoUser: (req, res) => {
        var sql = `SELECT * FROM saldouser WHERE idUser = ${req.body.idUser}`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    bukaDompet: (req, res) => {
        var sql = `INSERT INTO saldouser SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    topUp: (req, res) => {
        var sql =  `UPDATE saldouser SET saldoUser = saldouser + ${req.body.saldo} WHERE idUser = ${req.body.idUser}`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    topUpHistory: (req, res) => {
        var sql = `INSERT INTO histori SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    }
}