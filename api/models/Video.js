import mongoose from "mongoose";

const VideoSchema= new mongoose.Schema({
   title :{type:String,require:true,unique:true},
   disc:{type:String},
   img :{type:String},
   imgTitle:{type:String},
   imgSm: {type:String},
    trailler :{type:String},
    video : {type:String},
    year : {type:String},
    limit : {type:Number},
    genre : {type:String},
    isAlbum:{type:Boolean,default:false}
    

},{timestamps:true});

module.exports=mongoose.model("Video",VideoSchema);