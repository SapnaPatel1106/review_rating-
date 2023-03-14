const mangoose = require('mongoose')
const { default: mongoose } = require('mongoose')


const compModelSchema = new mangoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    companyId: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    foundedOn: {
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    company_logo: {
        type: String,
    }
})

compModelSchema.set('timestamps', true)
module.exports = mongoose.model('company', compModelSchema)
