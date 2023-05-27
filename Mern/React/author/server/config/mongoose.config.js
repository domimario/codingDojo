const mongoose = require("mongoose");
//This will create a database named "person" if one doesn't already exist (no need for mongo shell!):
mongoose
  .connect("mongodb://127.0.0.1:27017/person", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("LIDHJA ME DATABASEN U KRYE ME SUKSES"))
  .catch((err) => console.log("LIDHJA ME DATABASEN DESHTOI.", err));
