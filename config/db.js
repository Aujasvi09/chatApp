const mongoose = require("mongoose")

const connectDb = async () => {
    try{
      await mongoose.connect("mongodb+srv://aujaschaudhry:bansilal69@cluster0.tfmgvig.mongodb.net/?retryWrites=true&w=majority")
    }
    catch(err){
      console.log("Failed To Connect To DB", err)
    }
    
  }
  
  module.exports = connectDb