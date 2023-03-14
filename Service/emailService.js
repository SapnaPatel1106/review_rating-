var nodemailer = require("nodemailer")
const dotenv = require('dotenv').config();

const { resetPasswordEmail } = require('../controllers/userController')


const sendEmail = (userEmail, token, id) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "patel.sapnapatel11@gmail.com",
            pass: "bgpdtdmadmfdbemz"
        }
    });
    var mailOptions = {
        from: "patel.sapnapatel11@gmail.com",
        to: `${userEmail}`,
        subject: "Password reset",
        html: `
        <p> You requested for password reset </p>
        <h5>Click in this <a href:"http://localhost/3000/reset/${token}"> link </a> to reset password </h5>
        `
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email Sent Successfully' + info.response);
        }
    })
}

module.exports = {
    sendEmail
}
