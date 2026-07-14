const express = require("express");

require("dotenv").config();
const crypto = require("crypto");

const PORT = process.env.PORT || 5000;

const app = express();

const userRoutes = require("./routes/user.routes");

const { connectDB } = require("./utils/dbConnect");

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/login", (req, res) => {
  const token = crypto.randomBytes(32).toString("hex");
  res.status(200).json({
    success: true,
    token,
  });
});

app.get("/profile", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
  console.log(token);
  res.status(200).json({
    success: true,
  });
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
