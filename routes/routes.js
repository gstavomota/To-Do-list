const routes = require('express').Router()
const TaskController = require('../controller/TaskController');

routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getbyId);
routes.post("/updateOne/:id", TaskController.updateOneTask);
routes.get("/deleteOne/:id", TaskController.deleOneTask);

module.exports = routes;