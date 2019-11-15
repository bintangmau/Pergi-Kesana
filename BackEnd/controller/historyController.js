const { db } = require('../database')

module.exports = {
    getHistoryIsiSaldoUser: (req, res) => {
        var sql = `SELECT * FROM histori WHERE idUser = ${req.body.idUser} AND idKategori = ${req.body.idKategori}`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    adminHistori: (req, res) => {
        var sql = `INSERT INTO histori SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    userCancelTravelHistory: (req, res) => {
        var sql = `SELECT * FROM histori WHERE idUser = ${req.body.idUser} AND idKategori = ${req.body.idKategori}`

        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    pemasukanAdmin: (req, res) => {
        var sql = `SELECT * FROM saldoadmin sa
                    JOIN users u
                    ON sa.idUser = u.id;`
          
        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })           
    },
    historiTransaksiUser: (req, res) => {
        var sql = `SELECT * FROM histori WHERE idKategori = 5 AND idUser = ${req.body.idUser}`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })           
    },
    historiTransaksiTiket: (req, res) => {
        var sql = `select * from histori where idKategori = 8 AND idUser = ${req.params.idUser};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })           
    }
}