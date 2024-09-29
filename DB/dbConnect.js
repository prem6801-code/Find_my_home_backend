const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  const connectionURL =
    "mongodb+srv://tatkariprem6801:Mongodb%401234@agrotech.y6ynkzu.mongodb.net/";
  try {
    await mongoose.connect(connectionURL);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("error connecting the mongodb");
    console.log("error", error);
  }
};

module.exports = dbConnect;
