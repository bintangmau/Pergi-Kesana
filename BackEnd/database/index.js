const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abc123',
    database: 'pergi_kesana'
})

module.exports = {
    db: db
}