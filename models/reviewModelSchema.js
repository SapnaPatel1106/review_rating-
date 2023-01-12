const mangoose=require('mongoose')

const reviewModelSchema= new mangoose.Schema({
    userName : {
        type: String,
        required : true,
    },
    userEmail : {
        type: String,
        required : true,
    },
    subject : {
        type: String,
        required : true,
    },
    enterYourReview : {
        type: String,
        required : true,
    },
    rating : {
        type: Number,
        required : true,
    },
    
    isActive : {
        type: Boolean,
        required : true,
        default : true,
    },
})
compModelSchema.set('timestamps',true)
module.exports=mongoose.model('user',compModelSchema)