const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect("mongodb+srv://rahulgohel:Rahulgohel123@cluster0.9m5lhzt.mongodb.net/database?retryWrites=true&w=majority", {
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
