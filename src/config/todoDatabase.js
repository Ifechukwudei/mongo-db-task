const mongoose = require("mongoose")
const { config } = require("dotenv")
config()
async function connect(uri) {
  try {
    mongoose.connect(uri || process.env.MONGO_DB_CON)
    console.log("connected to mongodb")
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connect
