const Todo = require("../model/todoModel")
//create task
exports.createTask = async (req, res) => {
  try {
    let todo = await req.body
    let created = await Todo.create(todo)
    if (!created)
      return (
        res.status(400),
        json({
          success: false,
          message: "task creation failed",
        })
      )
    return res.status(201).json({
      success: true,
      message: "task created sucessfully",
      task: created,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    })
  }
}

// retrieve all task
exports.getAllTask = async (req, res) => {
  try {
    let todo = await Todo.find()
    if (todo.length === 0)
      return res.status(404).json({
        success: false,
        message: "no task were found",
      })
    res.status(200).json({
      sucess: true,
      message: "todo lists found sucessfully",
      todo,
    })
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "internal server error",
      error: error.message,
    })
  }
}

// retrieve single task
exports.getSingleTask = async (req, res) => {
  try {
    let id = { _id: req.params.id }
    let todo = await Todo.findOne(id)
    if (!todo)
      return res.status(404).json({
        success: false,
        message: "task not found",
      })
    res.status(200).json({
      success: true,
      message: "task",
      todo,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "intarnal server error",
      error: error.message,
    })
  }
}

//update task
exports.updateTask = async (req, res) => {
  try {
    let id = { _id: req.params.id }
    let todo = await req.body
    let update = await Todo.findOneAndUpdate(id, todo, { new: true })
    if (!update)
      return res.status(400).json({
        success: false,
        message: "todo list updated",
      })
    return res.status(200).json({
      success: true,
      message: "todo list updated",
      todo: update,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    })
  }
}

//delete task
exports.deleteTask = async (req, res) => {
  try {
    let id = { _id: req.params.id }
    let deleted = await Todo.findOneAndRemove(id)
    if (!deleted)
      return res.status(400).json({
        success: false,
        message: "user not deleted",
      })
    return res.status(200).json({
      success: true,
      message: " task deleted sucesssfully",
      deleted,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    })
  }
}
