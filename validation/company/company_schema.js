const joi = require("joi")
const { required } = require("joi");
const Joi = require("joi").extend(require("@joi/date"));


const CompanySchema = {
    registerCompany: joi.object({
        companyName: joi.string().max(20).required(),
        companyId: joi.string().email().required(),
        location: joi.string().required(),
        city: joi.string().required(),
        foundedOn: Joi.date().format("DD/MM/YYYY").required(),
        userId: joi.string().required(),
    }).unknown(true),
}

module.exports = CompanySchema
