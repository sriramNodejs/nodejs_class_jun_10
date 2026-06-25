const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const { sendMail } = require('./utils/mail')

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello from server side')
})

app.post('/signup', (req, res) => {
    const { email, password, name } = req.body;
    sendMail({
        to: email,
        subject: 'Welcome to our application',
        // text: 'Welcome to our application',
        html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <h1 style="color: red;">this is from HTML</h1>
                        <h2 style="color: blue;">From Nodemailer NPM</h2>
                        <h3 style="color: rgb(169, 17, 206);">From Gmail SMTP</h3>
                        <h1 style="color: aqua;">Hello ${name}</h1>
                    </body>
                    </html>`
    })

res.status(200).json({
    status: true,
    message: 'signup successful'
})
})



app.listen(PORT, () => {
    console.log('server is running on ' + PORT)
})