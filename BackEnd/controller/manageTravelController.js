const { db } = require('../database')
const { uploader } = require('../helpers/uploader')
const fs = require('fs')

module.exports = {
    getManageTravel: (req, res) => {
        var sql = `SELECT * FROM paketwisata`   

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    postTravel: (req, res) => {
        const path = '/image/travel'
        const upload = uploader(path, 'TRAVEL').fields([{name: 'image'}])

        upload(req, res, (err) => {
            if(err) {
                return res.status(500).json({ message: 'Upload image failed !', error: err.message })
            }
        })

        const { image } = req.files //
        console.log(image)

        console.log(req.body)
        const data = JSON.parse(req.body.data) //setelah menerima JSON, diparse menjadi object biasa lagi, lalu ditampung dalam constdata
        console.log(data)

        data.gambar = `${path}/${image[0].filename}` //fv

        var sql = `INSERT INTO paketwisata SET ?`

        db.query(sql, data, (err, results) => {
            // console.log(req.body , ' ini body')
            // console.log(req.file , ' ini file')
            if(err) {
                // fs.unlinkSync('./public' + path + '/' + gambar[0].filename)
                return res.status(500).send(err)
            } 
            res.status(200).send(results)
        })
    },
    deleteTravel: (req, res) => {
        var sql = `DELETE FROM paketwisata WHERE id = ${req.body.id}`

        db.query(sql, req.body, (err, results) => {
            // console.log(req.body)
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    deletePesertaTravel: (req, res) => {
        var sql = `delete from peserta where idPaket = ${req.body.idPaket};`

        
        db.query(sql, req.body, (err, results) => {
            // console.log(req.body)
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    getPeserta: (req, res) => {
        var sql = `SELECT * FROM peserta WHERE idPaket = ${req.body.idPaket}`

        db.query(sql, req.body, (err, results) => {
            // console.log(req.body)
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    getNamaUser: (req, res) => {
        var sql = `SELECT * FROM users WHERE id = ${req.body.name}`

        db.query(sql, req.body, (err, results) => {
            // console.log(req.body)
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    getEditTravel: (req, res) => {
        var sql = `SELECT * FROM paketwisata WHERE id = ${req.body.id}`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editDestinasi: (req, res) => {
        var sql = `UPDATE paketwisata SET destinasi = "${req.body.destinasiNew}" WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editHarga: (req, res) => {
        var sql = `UPDATE paketwisata SET harga = ${req.body.hargaNew} WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editMaskapai: (req, res) => {
        var sql = `UPDATE paketwisata SET maskapai = "${req.body.maskapaiNew}" WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editHotel: (req, res) => {
        var sql = `UPDATE paketwisata SET hotel = "${req.body.hotelNew}" WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editBerangkat: (req, res) => {
        var sql = `UPDATE paketwisata SET berangkat = "${req.body.berangkatNew}" WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editPulang: (req, res) => {
        var sql = `UPDATE paketwisata SET pulang = "${req.body.pulangNew}" WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editKuota: (req, res) => {
        var sql = `UPDATE paketwisata SET kuota = ${req.body.kuotaNew} WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editWisata: (req, res) => {
        var sql = `UPDATE paketwisata SET wisata = "${req.body.wisataNew}" WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editDeskripsi: (req, res) => {
        var sql = `UPDATE paketwisata SET deskripsi = "${req.body.deskripsiNew}" WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editGambar: (req, res) => {
        var sql = `UPDATE paketwisata SET gambar = "${req.body.gambarNew}" WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editBatasBayar: (req, res) => {
        var sql = `UPDATE paketwisata SET batasBayar = "${req.body.batasBayarNew}" WHERE id = ${req.body.id};`

        db.query(sql, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    }

}