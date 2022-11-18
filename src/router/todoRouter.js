const router = require("express").Router()
const controller = require("../controller/todoController")
router.get("/", controller.getAllTask)
router.get("/:id", controller.getSingleTask)
router.post("/", controller.createTask)
router.put("/:id", controller.updateTask)
router.delete("/:id", controller.deleteTask)

module.exports = router
