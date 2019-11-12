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
    },
    paymentTicket: (req, res) => {
        var sql = `UPDATE saldouser SET saldoUser = saldoUser - ${req.body.hargaTiket} WHERE idUser = ${req.body.idUser};`

        var sql2 = `insert into saldoadmin values (null, ${req.body.hargaTiket}, ${req.body.idUser}, "${req.body.waktuBayar}");`

        var sql3 = `INSERT INTO penumpang VALUES (null, "${req.body.namaPenumpang}", ${req.body.usiaPenumpang}, "${req.body.alamatPenumpang}", ${req.body.idTiket}, ${req.body.idUser}); `

        var sql5 = `UPDATE tiket SET seat = seat - 1 WHERE id = ${req.body.idTiket}`


        db.query(sql, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            } else {
                db.query(sql2, (err, results2) => {
                    if(err)  {
                        return res.status(500).send(err)
                    } else {
                        db.query(sql3, (err, results3) => {
                            if(err) {
                                return res.status(500).send(err)
                            } else {
                                var sql4 = `select * from penumpang p
                                join tiket t
                                on t.id = p.idTiket
                                join users u
                                on u.id = p.idUser
                                where p.idPenumpang = ${results3.insertId};
                                `
                                
                                db.query(sql4, (err, results4) => {
                                    
                                    if(err) return res.status(500).send(err)
                                    var mailOptions = {
                                        from: 'Pergi-Kesana <bintangmaulanahabib@gmail.com>',
                                        to: results4[0].email,
                                        subject: 'E-Ticket Pergi-Kesana',
                                        html: `
                                        <center>
                                        <h1>Selamat ${results4[0].namaPenumpang}, E-Ticket Berhasil !</h1>
                                        <p>Age: ${results4[0].usiaPenumpang} </p>
                                        <p>Address: ${results4[0].alamatPenumpang} </p>
                                        <p>Flights: ${results4[0].maskapai} - ${results4[0].kodepesawat}</p>
                                        <p>From: ${results4[0].dari} - To: ${results4[0].ke} - At: ${results4[0].berangkat} ${results4[0].time} </p>
                                        <p>${results4[0].price} USD</p>
                                        
                                        <h3>Kode Booking Anda: ${results4[0].idPenumpang + 1323}</h3>
                                        <h4>Salam hangat dari Kami, Pergi-Kesana</h4>
                                        </center>
                                        `
                                    };
                                    
                                    transporter.sendMail(mailOptions, (err, info) => {
                                        if (err) {
                                            throw err;
                                            // console.log('Email sent: ' + info.response);
                                        } else {
                                            var sql6 = `INSERT INTO histori VALUES (null, "Telah melakukan pembayaran Tiket menuju ${results4[0].ke} sebesar ${req.body.hargaTiket}", 
                                            ${req.body.idUser}, 8, "${req.body.waktuBayar}");`

                                            db.query(sql5, (err, results5) => {
                                                if(err) {
                                                    return res.status(500).send(err)
                                                } else {
                                                    db.query(sql6, (err, results6) => {
                                                        if(err) return res.status(500).send(err)
                                                
                                                        res.status(200).send(results6)
                                                    })
                                                }
                                            })
                                        }
                                        
                                    });
                                    
                                })
                            }
                        })
                    }
                })
            }
    
            
        })
    }
}