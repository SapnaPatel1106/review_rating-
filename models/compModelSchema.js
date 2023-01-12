const mangoose=require('mongoose')

const compModelSchema= new mangoose.Schema({
    companyName : {
        type: String,
        required : true,
    },
    compID : {
        type: String,
        required : true,
    },
    location : {
        type: String,
        required : true,
    },
    city : {
        type: String,
        required : true,
    },
    foundedOn : {
        type: String,
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