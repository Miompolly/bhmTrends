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
  // GET
  // GET ALL
  // GET USERS STATS
  
  module.exports = router;