import { Router } from "express";
import { createTask, deletetask, getTask, getTasks, updateTask } from "../controllers/taks.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";



const routerTasks = Router();

routerTasks.get('/taks',requiredAuth, getTasks);
routerTasks.get('/taks(:id',requiredAuth, getTask);
routerTasks.post('/taks', requiredAuth, validateSchema(createTaskSchema), createTask);
routerTasks.put('/taks/:id',requiredAuth, updateTask);
routerTasks.delete('/taks/:id', requiredAuth,deletetask);

export default routerTasks;