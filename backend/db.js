const mongoose = require("mongoose");

const mongoAtlasUri ="mongodb+srv://Sandhya:Sandhya@cluster0.gss3a.mongodb.net/users?retryWrites=true&w=majority"
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" MongoDB is connected successfully.")
  );
} catch (e) {
  console.log("Error while connecting MongoDB");
}
