const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const user=new Schema({
    email:{
        type:String,
        required:true
    },
    hashedPassword:{
        type:String,
        required:true
    }
    isVerified:{
        type:Boolean,
        required:true
    }
})

