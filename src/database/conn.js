const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(`mongodb+srv://rahulgohel:Rahulgohel123@cluster0.9m5lhzt.mongodb.net/database`, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
   
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("No Connection");
    console.log(e);
  });
