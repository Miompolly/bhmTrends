const router = require("express").Router();
import User from "../models/User"
import bcrypt from "bcrypt";
const verify = require("../verifyToken")



// UPDATE 

router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      try {
        if (req.body.password) {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(req.body.password, salt);
          req.body.password = hashedPassword;
        }
        
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        
        res.status(200).json(updatedUser);
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can only update your Account");
    }
  });
  
  // DELETE

  router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      try {
     
    await User.findByIdAndDelete(req.params.id);
        
        res.status(200).json("User has been deleted ...");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can only dlete your Account");
    }
  });

  // GET

  router.get("/find/:id", async (req, res) => {
    try {
     
        const user = await User.findById(req.params.id);
        
        const { password, ...info } = user._doc;
        res.status(200).json(info);
      } catch (err) {
        return res.status(500).json(err);
      }
    
  });
  // GET ALL

  router.get("/", verify, async (req, res) => {

    const query=req.query.new;
    if (req.user.isAdmin) {
      try {
     
    const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find();
        
        res.status(200).json(users);
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You are not allowed to see all users");
    }
  });
  // GET USERS STATS
  
  module.exports = router;