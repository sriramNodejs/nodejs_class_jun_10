const express = require("express");
require("dotenv").config();

const User = require("./models/user");
const Order = require("./models/order");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

const mongoose = require("mongoose");

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.get("/users", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("user not found");
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.post("/users", async (req, res, next) => {
  try {
    const users = await User.create(req.body);
    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.put("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("user not found");
    await User.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.delete("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("user not found");
    res.json(user);
  } catch (error) {
    next(error);
  }
});

//Orders CRUD

app.get("/orders", async (req, res, next) => {
  try {
    const userId = 7;
    const order = await Order.find({ userId });
    res.json(order);
  } catch (error) {
    next(error);
  }
});

app.get("/orders/:id", async (req, res, next) => {
  try {
    const userId = 7;
    const order = await Order.findById(req.params.id);
    if (!order || order.userId !== userId) {
      return res.status(404).send("order not found");
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
});

app.post("/orders", async (req, res, next) => {
  try {
    const userId = 7;
    const order = await Order.create({
      ...req.body,
      userId,
    });
    res.json(order);
  } catch (error) {
    next(error);
  }
});

app.put("/orders/:id", async (req, res, next) => {
  try {
    const userId = 4;
    const order = await Order.findById(req.params.id);
    if (!order || order.userId !== userId) {
      return res.status(404).send("order not found");
    }
    await order.update(req.body);
    res.json(order);
  } catch (error) {
    next(error);
  }
});

app.delete("/orders/:id", async (req, res, next) => {
  try {
    const userId = 4;
    const order = await Order.findById(req.params.id);
    if (!order || order.userId !== userId) {
      return res.status(404).send("order not found");
    }

    await Order.deleteOne({ _id: req.params.id, userId });
    res.json(order);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("internal server error");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
}

// API routes
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  process.exit(0);
});

module.exports = app;
