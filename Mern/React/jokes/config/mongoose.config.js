const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DATABASE IS CONNECTED"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );
