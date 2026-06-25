const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})


const sendMail = ({to, subject, text, html}) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject, 
        text,
        html
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.error('error in mail sending', err)
            return;
        }

        console.log('email sent successfully')
        console.log('message id ', info.messageId)
    })
}

module.exports = {
    sendMail
}