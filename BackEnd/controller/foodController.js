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
    }
}