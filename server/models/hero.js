const mongoose=require('mongoose')
mongoose.set('useFindAndModify', false)

const schema=new mongoose.Schema({
    name:{ type:String },
    avatar:{type:String},
    title:{type:String},
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    scores:{
        difficult:{tpe:Number},
        skills:{tpe:Number},
        attack:{tpe:Number},
        survive:{tpe:Number},        
    },
    skills:[{
        icon:{type:String},
        name:{type:String},
        description:{type:String},
        tips:{type:String},
    }],
    items1:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
    items2:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
    usageTips:{type:String},
    battleTips:{type:String},
    teamTips:{type:String},
    partners:[{
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
        description:{type:String},

    }],




})

module.exports=mongoose.model('Hero',schema)