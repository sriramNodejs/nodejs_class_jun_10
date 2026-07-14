const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.error("err in db connection", err);
    });

  mongoose.connection.on("connected", () => {
    console.log("mongodb connected", "from event");
  });

  mongoose.connection.on("error", () => {
    console.log("mongodb connection error", "from event");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected", "from event");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("mongodb reconnected", "from event");
  });
}


module.exports = {connectDB};