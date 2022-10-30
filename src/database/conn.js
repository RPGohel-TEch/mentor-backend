const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("No Connection");
    console.log(e);
  });
