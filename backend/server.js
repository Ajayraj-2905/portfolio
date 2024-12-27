const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
const corsOptions = {
    origin: "https://myportfolio-theta-lime-55.vercel.app",
    methods: "GET,POST",
}
app.use(cors(corsOptions))
app.use(bodyParser.json())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
})

app.get('/', (req, res) => {
    res.send('Welcome to home page!')
})

app.post('/api/sendMail', async (req, res) => {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' })
    }

    const mailToAdmin = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Portfolio Contact: ${name}`,
        html: `
            <p><strong>Hello Ajay!,</strong></p>
            <p>You have received a new message through your contact form. Here are the details:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <br>
            <p>Thank you!</p>
        `,
    };

    const mailToUser = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Acknowledgment of Your Inquiry",
        html: `
            <p>Hello <strong>${name}</strong>,</p>
            <p>Thank you for contacting us. We have received your message and will get back to you shortly.</p>
            <p>Here’s a summary of your inquiry for your reference:</p>
            <p><strong>Your Message:</strong></p>
            <p>${message}</p>
            <br>
            <p>We appreciate your presence and visit to my portfolio.</p>
            <p>Thank you!</p>
        `,
    };


    try {
        await transporter.sendMail(mailToAdmin)
        await transporter.sendMail(mailToUser)
        console.log('Email sent successfully')
        res.status(200).json({ success: 'Email sent successfully!' })
    } catch (error) {
        console.log('Error sending email: ', error)
        res.status(500).json({ error: 'Failed to send email. Please try again later' })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:5000`)
})