const services = require('../services/userServices');
const HTTPError = require('../utils/error/HTTPError');

const createUser = async (req, res) => {
    try{
        const tasksDb = await services.createUser(req.body);
        //console.log(tasksDb);
        if(!tasksDb){
            throw new HTTPError('User already exists');
        }
        res.status(201).send(tasksDb);
    }catch(error){
        if(error instanceof HTTPError){
            res.status(400).send(error.message);
        }else{
            res.status(500).send('Internal server error');
        }
    }
};

const getUserDetails = async (req, res) => {
    try{
        const {userId} = req.params;
        const tasksDb = await services.findUserTasks(userId);
        if(!tasksDb){
            throw new HTTPError('User not found');
        }
        res.status(200).send(tasksDb);
    }catch(error){
        if(error instanceof HTTPError){
            res.status(400).send(error.message);
        }else{
            res.status(500).send('Internal server error');
        }
    }
};

const getUsers = async (req, res) => {
    try{
        const tasksDb = await services.findUser();
        if(!tasksDb){
            throw new HTTPError('User not found');
        }
        res.status(200).send(tasksDb);
    }catch(error){
        if(error instanceof HTTPError){
            res.status(400).send(error.message);
        }else{
            res.status(500).send('Internal server error');
        }
    }
};

const createTask = async (req, res) => {
    try{
        const {userId} = req.params;
        const tasksDb = await services.createTask(req.body, userId);
        if(!tasksDb){
            throw new HTTPError('User not found');
        }
        res.status(201).send(tasksDb);
    }catch(error){
        if(error instanceof HTTPError){
            res.status(400).send(error.message);
        }else{
            res.status(500).send('Internal server error');
        }
    }
};

const getTasks = async (req, res) => {
    try{
        const {userId} = req.params;
        const tasksDb = await services.findUserTasks(userId);
        if(!tasksDb){
            throw new HTTPError('User not found');
        }
        res.status(200).send(tasksDb);
    }catch(error){
        if(error instanceof HTTPError){
            res.status(400).send(error.message);
        }else{
            res.status(500).send('Internal server error');
        }
    }
};

const getTaskById = async (req, res) => {
    try{
        const {taskId, userId} = req.params;
        const tasksDb = await services.findTaskById(taskId, userId);
        res.status(200).send(tasksDb);
    }catch(error){
        if(error instanceof Error){
            res.status(400).send(error.message);
        }else{
            res.status(500).send('Internal server error');
        }
    }
};

const patchTaskById = async (req, res) => {
    try{
        const {title} = req.body;
        const {taskId, userId} = req.params;
        const tasksDb = await services.patchTaskById(title, taskId, userId);
        if(!tasksDb){
            throw new HTTPError('User not found');
        }
        res.status(200).send(tasksDb);
    }catch(error){
        if(error instanceof Error){
            res.status(400).send(error.message);
        }else{
            res.status(500).send('Internal server error');
        }
    }

};

const deleteUser = async (req, res) => {
    try{
        const {userId} = req.params;
        const tasksDb = await services.deleteUser(userId);
        if(!tasksDb){
            throw new HTTPError('User not found');
        }
        res.status(200).send(tasksDb);
    }catch(error){
        if(error instanceof Error){
            res.status(400).send(error.message);
        }else{
            res.status(500).send('Internal server error');
        }
    }
};

const deleteTaskById = async (req, res) => {
    try{
        const {taskId, userId} = req.params;
        const tasksDb = await services.deleteTaskById(taskId, userId);
        res.status(200).send(tasksDb);}
    catch(error){
        if(error instanceof Error){
            res.status(400).send(error.message);
        }else{
            res.status(500).send('Internal server error');
        }
    }
};

module.exports = {
    createUser, getUserDetails, getUsers, createTask, getTasks, getTaskById, patchTaskById, deleteUser, deleteTaskById
};