const { db } = require('../database')

module.exports = {
    tanyaAdmin: (req, res) => {
        var sql = `INSERT INTO soal SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    getSoal: (req, res) => {
        var sql = `select distinct u.username, u.id from soal s
                    join users u
                    on s.idUser = u.id;`
         
        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    jawabUser: (req, res) => {
        var sql =  `INSERT INTO jawaban SET ?`


        db.query(sql, req.body, (err, results) => {
            // console.log(req.body)
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    getJawabanAdmin: (req, res) => {
        var sql = `select * from soal s
                    join jawaban j
                    on s.idsoal = j.idSoal
                    where s.idUser = ${req.body.idUser};`
         
        db.query(sql, req.body, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })

    },
    getChatUser: (req, res) => {
        var sql = `select * from soal where idUser = ${req.body.idUser};`

        db.query(sql, req.body, (err, results) => {
            
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    }
}