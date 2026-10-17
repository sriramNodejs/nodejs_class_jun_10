const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.get("/users", (req, res) => {
  const users = [
    { name: "max", age: 25 },
    { name: "anna", age: 26 },
    { name: "john", age: 27 },
    { name: "susan", age: 28 },
    { name: "tom", age: 29 },
  ];

  res.json(users);
});

app.listen(3000, () => {
  console.log("server running on 3000");
});
