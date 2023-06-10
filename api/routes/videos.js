const router = require("express").Router();
import Video from "../models/Video"
const verify = require("../verifyToken")



// POST VIDEO 

router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
     const newVideo = new Video(req.body);
     try{
    const savedVideo = await newVideo.save();

    res.status(201).json(savedVideo);
     }catch(err){
        res.status(500).json(err);
     }
    } else {
      return res.status(403).json("You are not allowed !");
    }
  });

  // UPDATE VIDEO 

router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
     try{
    const updateVideo = await Video.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true});


    res.status(201).json(updateVideo);
     }catch(err){
        res.status(500).json(err);
     }
    } else {
      return res.status(403).json("You are not allowed !");
    }
  });

    // DELETE VIDEO 

router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
     try{
    await Video.findByIdAndDelete(req.params.id)
    res.status(201).json("Video has been deleted ...");
     }catch(err){
        res.status(500).json(err);
     }
    } else {
      return res.status(403).json("You are not allowed !");
    }
  });


      // GET VIDEO 

router.get("/find/:id", verify, async (req, res) => {

     try{
     const video= await Video.findById(req.params.id)
     res.status(201).json(video);
     }catch(err){
        res.status(500).json(err);
     }
    
  });


        // GET RANDOM VIDEO 

router.get("/random", verify, async (req, res) => {
const type=req.query.type;
let video;
    try{
    if(type==="isAlbum"){
        video=await Video.aggregate([
            {$match:{isAlbum:true}},
            {$sample:{size:1}}
        ])
    }else{
        video=await Video.aggregate([
            {$match:{isAlbum:false}},
            {$sample:{size:1}}
        ]) 
    }
    res.status(200).json(video);
    }catch(err){
       res.status(500).json(err);
    }
   
 });


    // GET ALL VIDEOS

    router.get("/", verify, async (req, res) => {
        if (req.user.isAdmin) {
         try{
      const videos =  await Video.find();
        res.status(201).json(videos);
         }catch(err){
            res.status(500).json(err);
         }
        } else {
          return res.status(403).json("You are not allowed !");
        }
      });
    


  
 
  
  module.exports = router;