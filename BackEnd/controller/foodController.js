const { db } = require('../database')

module.exports = {
    getFood: (req, res) => {
        var sql = `SELECT * FROM paketwisata p
                    JOIN food f
                    ON f.idPaket = p.id;
                    `
        db.query(sql, (err, results) => {
            
                if(err) return res.status(500).send(err)
        
                res.status(200).send(results)
        })
    },
    cariFoodNama: (req, res) => {
        var sql = `select * from food where makanan like "%${req.params.namaFood}%";`

        db.query(sql, (err, results) => {

            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    cariFoodNegara: (req, res) => {
        var sql = `select f.makanan, f.deskripsi as deskripMakanan, f.pathGambar, pw.destinasi
                    from food f
                    join paketwisata pw
                    on pw.id = f.idPaket
                    where pw.destinasi like "%${req.params.namaNegara}%";   `

        db.query(sql, (err, results) => {

            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    }
}