const router = require("express").Router();

const User = require("../models/User");

// CRUD

router.post("/create", async (req, res) => {
  try {
    const body = req.body;

    // create

    // const newUser = await User.create({
    //   name: body.name,
    //   email: body.email,
    //   age: body.age,
    //   gender: body.gender,
    // });

    // const newUser = await User.create(body);

    const newUser = new User({
      name: body.name,
      email: body.email,
      age: body.age,
      gender: body.gender,
    });

    console.log(newUser);

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      user: savedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("err");
  }
});

router.get("/", async (req, res) => {
  try {
    // const users = await User.find({}).skip(2).limit(2);

    // const users = await User.find({}, {name: 1, age: 1, _id: 0}).sort({ createdAt: -1 });

    const users = await User.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      users: users,
    });
  } catch (error) {
    res.status(500).send("err");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // const user = await User.findById(id);

    console.log(id);

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        success: false,
        users: "user not found",
      });
    }

    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(500).send("err");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // const user = await User.deleteOne({ _id: id });

    const user = await User.findOneAndDelete({ _id: id });

    console.log(user);

    if (user) {
      return res.status(200).json({
        success: true,
        message: "user deleted successfully",
      });
    }

    res.status(404).json({
      success: false,
      message: "user not found",
    });
  } catch (error) {
    res.status(500).send("err");
  }
});

router.put("/", async (req, res) => {
  try {
    const id = req.query.id;

    const data = req.body;
    console.log(data);

    const user = await User.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { returnDocument: "after" },
    );

    // const user = await User.updateOne(
    //   { _id: id },
    //   { $set: data }
    // );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    res.status(200).json({
      success: true,
      user: user,
      message: "user updated successfully",
    });
  } catch (error) {
    res.status(500).send("err");
  }
});

module.exports = router;
