import Task from '../models/task.model.js';

export const getTasks = async(requese, response) => {
    const tasks = await Task.find();
    response.json(tasks);
}
export const getTask = async(requese, response) => {    
    const task = await Task.findById(requese.params.id);
    if(!task) return response.status(404).json({message: 'tasks Not Found'});
    response.status(200).json(task);
}
export const createTask = async(requese, response) => {
    const { title, description, date} = requese.body;
    const newTaks = new Task({
        title,
        description,
        date
    });
    const savedTask = await newTaks.save();
    response.status(200).json(savedTask);
}
export const updateTask = async(requese, response) => {
    const task = await Task.findByIdAndUpdate(requese.params.id, requese.body);
    if(!task) return response.status(404).json({message: 'tasks Not Found'});
    response.status(201).json(task);
}
export const deletetask = async(requese, response) => {
    const task = await Task.findByIdAndDelete(requese.params.id);
    if(!task) return response.status(404).json({message: 'tasks Not Found'});
    response.status(204)
};
