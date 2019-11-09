const { db } = require('../database')

module.exports = {
    getManageUsers: (req, res) => {
        var sql = `SELECT * FROM users WHERE role = 'user'`

        db.query(sql, (err, results) => {
            // console.log(req.body)
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
           
        }) // console.log(results)
    },
    deleteManageUsers: (req, res) => {
        var sql = `DELETE from users WHERE id = ${req.body.id}`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    cariUser: (req, res) => {
        var sql = `select * from users where username like "%${req.body.username}%" and role = "user";`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    }
}