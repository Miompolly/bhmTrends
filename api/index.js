const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors"); // Add this line
const dbConnect = require("./database/db");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const videoRoute = require("./routes/videos");
const listRoute = require("./routes/lists");

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
app.use(express.json());

// Add the cors middleware
app.use(cors({ origin: ['http://localhost:5173'] }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);
app.use("/api/lists", listRoute);

app.listen(port, () => {
  dbConnect();
  console.log(`Backend Server is running on port: ${port}`);
});

module.exports = app;
