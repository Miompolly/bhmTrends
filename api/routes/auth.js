import express from "express"
const router = express.Router();
const User = require("../models/User");
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER
router.post("/register", async(req, res) => {
  const salt= await bcrypt.genSalt(10);
  const hashedPassword=await bcrypt.hash(req.body.password,salt);
    const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  });
  try{
     const user= await newUser.save() 
     res.status(201).json(user);

  }catch(err){
    res.status(500).json(err);
  }
 
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong Email or Password!");

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    !isMatch && res.status(401).json("Wrong Email or Password!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin
      },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );
    const { password, ...info } = user._doc;
    res.status(200).json({ accessToken, ...info });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
