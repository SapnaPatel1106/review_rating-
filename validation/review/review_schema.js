const joi = require("joi")
const { required } = require("joi");


const ReviewSchema = {
    addReview: joi.object({
        enterYourReview: joi.string().required(),
        rating: joi.number().integer().max(5).required(),
        company_id: joi.string().required(),
        userId: joi.string().required(),
    }).unknown(true),
}

module.exports = ReviewSchema
