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
        icon:{string},
        name:{string},
        description:{string},
        tips:{string},
    }],
    items1:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
    items2:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
    usageTips:{type:string},
    battleTips:{type:string},
    teamTips:{type:string},
    partners:[{
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
        description:{type:string},

    }],




})

module.exports=mongoose.model('Hero',schema)