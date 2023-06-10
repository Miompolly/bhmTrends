const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dbConnect = require("./database/db");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const videoRoute = require("./routes/videos")

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);

app.listen(port, () => {
  dbConnect();
  console.log(`Backend Server is running on port: ${port}`);
});

module.exports = app;
