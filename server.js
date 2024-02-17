const express = require("express")
const connectDb = require("./config/db")
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes")
const errorHandler = require("./errorHandler")
const cors = require("cors")



const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/user",userRoutes)

app.use(errorHandler)

app.get("/",(req,res) => {
    res.send("API Running Nicely")
})

connectDb()



mongoose.connection.once("open", () => {
    console.log("Succesfully Connected To Db")
    app.listen(5000, () => {
    console.log('server is up and running')
  });
  })
  




