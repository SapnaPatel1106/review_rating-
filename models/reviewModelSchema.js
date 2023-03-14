const mongoose = require('mongoose')


const reviewModelSchema = new mongoose.Schema({
    enterYourReview: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
    company_id : {  
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'company'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
})

reviewModelSchema.set('timestamps', true)
module.exports = mongoose.model('review', reviewModelSchema)
