export default function (req, res) {
    require('dotenv').config();
    const nodemailer = require('nodemailer');
    
    const mailData = {
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL,
        subject: `MIDNIGHT MOTORSPORTS: Message From ${req.body.fullName}`,
        text: req.body.message,
        html:
            `<div>
                <p>
                    Hi Chris, you've received a message from ${req.body.fullName} via the Midnight Motorsports Contact Page about: ${req.body.subject}.
                </p>
                <p>
                    ${req.body.message}
                </p>
                <p>
                    Reply to them via: ${req.body.email}
                </p>
            </div>`
    }

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD,
        },
        secure: true,
    });

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })

    res.status(200)
}