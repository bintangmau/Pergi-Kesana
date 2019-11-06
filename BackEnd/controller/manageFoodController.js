const { db } = require('../database')

module.exports = {
    getFood: (req, res) => {
        var sql = `SELECT * FROM food`

            db.query(sql, (err, results) => {
                if(err) return res.status(500).send(err)
        
                res.status(200).send(results)
            })
    },
    postFood: (req, res) => {
        var sql = `INSERT INTO food SET ?`

        db.query(sql, req.body, (err, results) => {
           
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    deleteFood: (req, res) => {
        var sql = `DELETE FROM food WHERE idfood = ${req.body.idFood}`

        db.query(sql, req.body, (err, results) => {
           
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    }
}