const express = require("express")
const { json } = require("express")
const connect = require("./config/todoDatabase")
const todoRoute = require("./router/todoRouter")

connect()
const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("zuri mongodb task")
})
app.listen(port, () => console.log(`server is running on port ${port}`))
