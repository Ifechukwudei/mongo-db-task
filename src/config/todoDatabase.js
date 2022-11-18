const mongoose = require("mongoose")
const { config } = require("dotenv")
config()
async function connect(m) {
  try {
    mongoose.connect(process.env.MONGO_DB_CON)
    console.log("connected to mongodb")
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connect
