const express = require('express')
const router = express.Router()

const user = require('./userRouters')
const review = require('./reviewRoutes')
const company = require('./companyRoutes')


router.use('/user',user)
router.use('/company',company)
router.use('/review',review)

module.exports = router;
