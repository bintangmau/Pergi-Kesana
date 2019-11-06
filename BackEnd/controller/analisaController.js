const { db } = require('../database')

module.exports = {
    userTerdaftar: (req, res) => {
        var sql = `SELECT COUNT(*) as userTerdaftar from users WHERE role = "user";`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
        
            res.status(200).send(results)
        })
    },
    dikunjungiUser: (req, res) => {
        var sql = `SELECT COUNT(*) as dikunjungiUser from histori WHERE idKategori = 4;`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
        
            res.status(200).send(results)
        })
    },
    totalTopUp: (req, res) => {
        var sql = `SELECT COUNT(*) as totalTopUp from histori WHERE idKategori = 1;`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
        
            res.status(200).send(results)
        })
    },
    pendaftaranTravel: (req, res) => {
        var sql = `SELECT COUNT(*) as pendaftaranTravel FROM histori WHERE idKategori = 2;`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
        
            res.status(200).send(results)
        })
    },
    pembatalanTravel: (req, res) => {
        var sql = `SELECT COUNT(*) as pembatalanTravel FROM histori WHERE idKategori = 6;`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
        
            res.status(200).send(results)
        })
    },
    getTotalIsiUlangUser: (req, res) => {
        var sql = `SELECT * from histori h 
                    JOIN users u
                    ON u.id = h.idUser
                    WHERE h.idKategori = 1;
                    `

         db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
        
            res.status(200).send(results)
        })
    },
    getTotalPendaftaranTravel: (req, res) => {
        var sql = `SELECT * from histori h 
                    JOIN users u
                    ON u.id = h.idUser
                    WHERE h.idKategori = 2;`

         db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
        
            res.status(200).send(results)
        })
    },
    getPembatalanTravel: (req, res) => {
        var sql = `SELECT * from histori h 
        JOIN users u
        ON u.id = h.idUser
        WHERE h.idKategori = 6;`

        db.query(sql, (err, results) => {
        if(err) return res.status(500).send(err)

        res.status(200).send(results)
        })
    },
    transaksiBerhasil: (req, res) => {
        var sql = `SELECT COUNT(*) as transaksiBerhasil from histori WHERE idKategori = 5;`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
        res.status(200).send(results)
        })
    },
    transaksiBerhasilDetails: (req, res) => {
        var sql = `SELECT * FROM histori WHERE idKategori = 5;`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
        res.status(200).send(results)
        })
    }
    }