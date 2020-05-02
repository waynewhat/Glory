const mongoose=require('mongoose')
mongoose.set('useFindAndModify', false)

const schema=new mongoose.Schema({
    name:{ type:String },
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:'category'}
})

module.exports=mongoose.model('category',schema)