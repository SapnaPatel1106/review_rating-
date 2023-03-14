const express = require('express')
const app = express();
app.use(express.json());
require('./models/config')
const dotenv = require('dotenv')  //.env file 
dotenv.config()
const cron = require("node-cron");
const { application } = require("express");
app.use(express.urlencoded({ extended: true }));
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

const userRouter = require('./Routers/userRouters')
const commonRoutes = require('./Routers/commonRoutes')
const reviewRoutes = require('./Routers/reviewRoutes')
const companyRoutes = require('./Routers/companyRoutes')
const userModelSchema = require('./models/userModelSchema')
const { transporter, mailOptions } = require('./Service/emailService')

app.use("/",commonRoutes)

const server = app.listen(process.env.PORT, function (req, res) {
    console.log(`server is running on port no :${process.env.port}`);
})

module.exports = server
