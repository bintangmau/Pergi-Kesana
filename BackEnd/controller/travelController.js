const { db } = require('../database')

module.exports = {
    getTravel: (req, res) => {
        var sql = `SELECT * FROM paketwisata`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    }, getTravelDetails: (req, res) => {
        var sql = `SELECT * FROM paketwisata WHERE id = ${req.body.id}`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    daftarTrip: (req, res) => {
        var sql = `INSERT INTO peserta SET ?`

        var sql3 = `UPDATE paketwisata SET kuota = kuota - 1 WHERE id = ${req.body.idPaket};`


        db.query(sql, req.body, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            } else {
                    db.query(sql3, (err, results3) => {
                        if(err) return res.status(500).send(err)
                    })
                }
            
            res.status(200).send(results)
        })
    },
    getTripUser: (req, res) => {
        var sql = `SELECT p.id as idPeserta, namaPeserta, usiaPeserta, status, idPaket, noPaspor, alamat, noTelp, pw.destinasi, pw.harga,
                    pw.berangkat, pw.pulang
                    FROM peserta p
                    JOIN paketwisata pw
                    on p.idPaket = pw.id
                    WHERE p.idUser = ${req.body.idUser};
                    `

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    cancelTrip: (req, res) => {
        var sql = `DELETE FROM peserta WHERE id = ${req.body.id}`

        var sql2 = `UPDATE paketwisata SET kuota = kuota + 1 WHERE id = ${req.body.idPaket}`

        db.query(sql, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            }
        })
        db.query(sql2, (err, results2) => {
            if(err) return res.status(500).send(err)
        })
        res.status(200).send()
    },
    getHargaTotal: (req, res) => {
        var sql = `SELECT SUM(pw.harga) as totalHarga FROM peserta p
                    JOIN paketwisata pw
                    on p.idPaket = pw.id
                    WHERE p.idUser = ${req.body.idUser} AND p.status = "Belum Bayar";`
           
            db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })           
    },
    getHargaPerItem: (req, res) => {
        var sql = `select * from peserta p
                    join paketwisata pw
                    on p.idPaket = pw.id
                    where p.id = ${req.body.idPaket};`
        
        db.query(sql, (err, results) => {
            // console.log(req.body)
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })           
    },
    daftarTripHistory: (req, res) => {
        var sql = `INSERT INTO histori SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })  
    },
    getNamaTravel: (req, res) => {
        var sql = `SELECT * from paketwisata WHERE id = ${req.body.idPaket}`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    cancelTripHistory: (req, res) => {
        var sql = `INSERT INTO histori SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    }
}