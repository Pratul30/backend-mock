const services = require('../services/userServices');

const createUser = async (req, res) => {
    const tasksDb = await services.createUser(req.body);
    res.status(201).send(tasksDb);
};

const getUserDetails = async (req, res) => {
    const {userId} = req.params;
    const tasksDb = await services.findUserTasks(userId);
    res.status(200).send(tasksDb);
};

const getUsers = async (req, res) => {
    const tasksDb = await services.findUser();
    res.status(200).send(tasksDb);
};

const createTask = async (req, res) => {
    const {userId} = req.params;
    const tasksDb = await services.createTask(req.body, userId);
    res.status(201).send(tasksDb);
};

const getTasks = async (req, res) => {
    const {userId} = req.params;
    const tasksDb = await services.findUserTasks(userId);
    res.status(200).send(tasksDb);
};

const getTaskById = async (req, res) => {
    const {taskId, userId} = req.params;
    const tasksDb = await services.findTaskById(taskId, userId);
    res.status(200).send(tasksDb);
};

const patchTaskById = async (req, res) => {
    const {title} = req.body;
    const {taskId, userId} = req.params;
    const tasksDb = await services.patchTaskById(title, taskId, userId);
    res.status(200).send(tasksDb);

};

const deleteUser = async (req, res) => {
    const {userId} = req.params;
    const tasksDb = await services.deleteUser(userId);
    res.status(200).send(tasksDb);
};

const deleteTaskById = async (req, res) => {
    const {taskId, userId} = req.params;
    const tasksDb = await services.deleteTaskById(taskId, userId);
    res.status(200).send(tasksDb);
};

module.exports = {
    createUser, getUserDetails, getUsers, createTask, getTasks, getTaskById, patchTaskById, deleteUser, deleteTaskById
};