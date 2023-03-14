const express = require('express')
const router = express.Router()
const { validationError } = require('@hapi/joi/lib/errors');

const { upload } = require('../middlewares/imageStorage')
const company = require('../controllers/companyController');
const validation = require('../validation/company/company_validation');


router.post('/addCompany/:id', upload.single("company_logo"),validation.registerCompanyValidation, company.companyAdd);
router.get('/getCompanyList',company.getCompanyList)
router.get('/search',company.searchCompany)
router.get('/companyDetail/:id',company.companyDetail)

module.exports = router;
