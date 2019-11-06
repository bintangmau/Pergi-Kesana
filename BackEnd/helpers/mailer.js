const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bintangmaulanahabib@gmail.com',
        pass: 'lhbhvhcaxeqlxwsh'
    }
});

// var mailOptions = {
//     from: 'bintangmaulanahabib@gmail.com',
//     to: 'yourfriend@gmail.com',
//     subject: 'Tiket Pesawat dan Perihal Travel',
//     text: 'Woco seng genah!'
// };

// transporter.sendMail(mailOptions, (err, info) => {
//     if (err) throw err;
//     console.log('Email sent: ' + info.response);
// });

module.exports = {
    transporter
}