const express = require("express");
const { createTask,getTasks,getTaskbyId,deleteTask,updateTask} = require("../controller/taskController.js");
const Task = require("../model/taskModel.js");



const router = express.Router();

//creating task in database
router.post("/", createTask)

//get all tasks
router.get("/", getTasks,(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
})

//get sing Task by Id

router.get("/:id",getTaskbyId);

// delete task
router.delete("/:id",deleteTask);

//update a Task
router.put("/:id",updateTask)

module.exports = router;