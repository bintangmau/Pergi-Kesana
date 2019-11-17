const { db } = require('../database')

module.exports = {
    getAllTiket: (req, res) => {
        var sql = `SELECT * FROM tiket`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    postTicket: (req, res) => {
        var sql = `INSERT INTO tiket SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            } else {
                var sql2 = `CREATE EVENT create_tiket_${results.insertId}
                            ON SCHEDULE AT "${req.body.berangkat} ${req.body.time}"
                            DO delete from tiket where id = ${results.insertId};`

                db.query(sql2, (err, results2) => {
                           
                    res.status(200).send(results2)
                }) 
            } 
        })
    },
    editMaskapai: (req, res) => {
        var sql = `UPDATE tiket SET maskapai = "${req.body.maskapaiNew}" WHERE id = ${req.body.id};`

         db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editCode: (req, res) => {
        var sql = `UPDATE tiket SET kodepesawat = "${req.body.kodeNew}" WHERE id = ${req.body.id};`

         db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editDari: (req, res) => {
        var sql = `UPDATE tiket SET dari = "${req.body.dariNew}" WHERE id = ${req.body.id};`

         db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editTo: (req, res) => {
        var sql = `UPDATE tiket SET ke = "${req.body.keNew}" WHERE id = ${req.body.id};`

         db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editBerangkat: (req, res) => {
        var sql = `UPDATE tiket SET berangkat = "${req.body.berangkatNew}" WHERE id = ${req.body.id};`

         db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editDurasi: (req, res) => {
        var sql = `UPDATE tiket SET durasi = ${req.body.durasiNew} WHERE id = ${req.body.id};`

         db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editSeat: (req, res) => {
        var sql = `UPDATE tiket SET seat = ${req.body.seatNew} WHERE id = ${req.body.id};`

         db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editTime: (req, res) => {
        var sql = `UPDATE tiket SET time = "${req.body.timeNew}" WHERE id = ${req.body.id};`

         db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    cariTiket: (req, res) => {
        var sql = `SELECT * FROM tiket WHERE ke LIKE "%${req.body.ke}%"`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    getBookingTiket: (req, res) => {
        var sql = `SELECT * FROM tiket WHERE id = ${req.body.id}`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    deleteTiket: (req, res) => {
        var sql = `DELETE from tiket WHERE id = ${req.body.id}`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    getMyTicket: (req, res) => {
        var sql = `select * from penumpang p
        join tiket t
        on t.id = p.idTiket
        join users u
        on u.id = p.idUser
        where idUser = ${req.body.idUser}`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    getCariTiketAdmin: (req, res) => {
        var sql = `SELECT * FROM tiket WHERE ke LIKE "%${req.body.ke}%"`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    progressTiket: (req, res) => {
        var sql = `select * from penumpang p
                    join tiket t
                    on t.id = p.idTiket
                    where p.idTiket = ${req.params.idTiket};`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    }
}