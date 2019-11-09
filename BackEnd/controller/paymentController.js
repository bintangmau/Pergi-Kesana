const { db } = require('../database')
const { transporter } = require('../helpers/mailer')

module.exports = {
    getSaldoUser: (req, res) => {
        var sql = `SELECT * FROM saldouser WHERE idUser = ${req.body.idUser}`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    kurangSaldoUser: (req, res) => {
        var sql = `UPDATE saldouser SET saldoUser = saldoUser - ${req.body.hargaTotal} WHERE idUser = ${req.body.idUser};`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    tambahSaldoAdmin: (req, res) => {
        var sql = `INSERT INTO saldoadmin SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    gantiStatusBayar: (req, res) => {
        var sql = `UPDATE peserta SET status = "Sudah Bayar" WHERE id = ${req.body.idPeserta};`

        db.query(sql, (err, results) => {
            if(err) return res.status(500).send(err)
    
            res.status(200).send(results)
        })
    },
    historiKesanaPay: (req, res) => {
        var sql = `INSERT INTO histori SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send(err)
           
            res.status(200).send(results)
        })
    },
    kirimEmailUser: (req, res) => {
        var sql = `select * from peserta p
        join paketwisata pw
        on pw.id = p.idPaket
        join users u 
        on u.id = p.idUser
        where p.id = ${req.body.idPaket};`
        
        db.query(sql, (err, results) => {
            console.log(req.body)
            if(err) return res.status(500).send(err)
            var mailOptions = {
                from: 'Pergi-Kesana <bintangmaulanahabib@gmail.com>',
                to: results[0].email,
                subject: 'Tiket Pesawat dan Perihal Travel',
                html: `
                <center>
                    <h1>Selamat ${results[0].namaPeserta}, Anda telah terdaftar Travel kami !</h1>
                    <p>Halo ${results[0].namaPeserta}, sampai berjumpa dengan kami di Bandara Soekarno-Hatta pada tanggal ${results[0].berangkat}, <br/>
                    Kami mengarapkan kedatangan anda tepat waktu yaitu pada pukul 19.00. </p>
                    <p>Anda akan berangkat bersama kami menuju ${results[0].destinasi}, Terima kasih atas kepercayaannya ! </p>
                    <p>Kami akan mengirim beberapa berkas ke alamat ${results[0].alamat}.</p>
                    
                    <h4>Salam hangat dari Kami, Pergi-Kesana</h4>
                </center>
                `
            };
            
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) throw err;
                // console.log('Email sent: ' + info.response);
                res.status(200).send(info)
            });
            
        })
    }
}