const nodemailer = require('nodemailer');
const isEnDay = require('../functions/isEnDay');
const receivers = [process.env.RCV_ONE, process.env.RCV_TWO];


const sendEmail = (req, res) => {
    const activateEnDay = isEnDay();

    if (activateEnDay === false) return res.status(204).json({ message: `Today it's not English Day` });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    for (let rcv in receivers) {
        const mailOptions = {
            from: process.env.EMAIL,
            to: receivers[rcv],
            subject: 'ENGLISH DAY',
            text: `Hello ${receivers[rcv]}, it's time to pratice English!`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) return res.status(500).json({ error: error.message });

            return res.status(200).json(info.response);
        });
    }
}

module.exports = { sendEmail };