const company = require('./company_schema')
const compModelSchema = require('../../models/compModelSchema')


module.exports = {
    registerCompanyValidation: async (req, res, next) => {
        const value = await company.registerCompany.validate(req.body, { abortEarly: false });
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            });
        } else {
            next()
        }
    }
}
