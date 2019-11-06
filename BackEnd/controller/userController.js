const { db } = require('../database')

module.exports = {
    userLogin : (req, res) => {
        var sql = `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`

        db.query(sql, (err, results) => {
            // console.log(req.body)
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    userRegister: (req, res) => {
        var sql =`SELECT * FROM users WHERE email = '${req.body.email}'`

        var sql2 = `INSERT INTO users SET ?`

        db.query(sql, (err, results) => {
            // console.log(req.body.email)
            if(err) {
                return res.status(500).send(err)
            } 

            if( results.length > 0) {
                res.status(500).send('Email sudah dipakai')
            } else {
                db.query(sql2, req.body, (err, results2) => {
                    if(err) return res.status(500).send(err)
    
                    res.status(200).send(results)
                })
            }
        })
    },
    registerHistory: (req, res) => {
        var sql = `INSERT INTO histori SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    loginHistory: (req, res) => {
        var sql = `INSERT INTO histori SET ?`
        
        db.query(sql, req.body, (err, results) => {
            // console.log(req.body)
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    editDataUser: (req, res) => {
        var sql = `UPDATE users SET ? WHERE id = ${req.params.id}`

        db.query(sql, req.body, (err, results) => {
            // console.log(req.body)
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    } 
}