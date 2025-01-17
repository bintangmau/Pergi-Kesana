const { db } = require('../database')
const { uploader } = require('../helpers/uploader')

module.exports = {
    getFood: (req, res) => {
        var sql = `SELECT * FROM food`

            db.query(sql, (err, results) => {
                if(err) return res.status(500).send(err)
        
                res.status(200).send(results)
            })
    },
    postFood: (req, res) => {
        const path = '/image/food'
        const upload = uploader(path, 'FOOD').fields([{name: 'image'}])

        upload(req, res, (err) => {
            if(err) {
             
                return res.status(500).json({ message: 'Upload image failed !', error: err.message })
            }
            
            const { image } = req.files
            
            const data = JSON.parse(req.body.data)
            
            data.pathGambar = `${path}/${image[0].filename}` //fv
            
            var sql = `INSERT INTO food SET ?`
        
            
                db.query(sql, data, (err, results) => {
                   
                    if(err) return res.status(500).send(err)
            
                    res.status(200).send(results)
                })
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