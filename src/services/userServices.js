const { User, Task } = require('../../database/models');


const createUser = async (user) => User.create(user);

// function to find tasks for a specific user

const findUserTasks = async (userId) => {
    const user = await User.findByPk(userId, {
        include: {
            model: Task,
            as: 'tasks',
        },
    });
    return user.tasks;
};

const findUser = async () => {
    const user = await User.findAll(
        {
            include: {
                model: Task,
                as: 'tasks',
            },
        }
    );
    return user;
};

const createTask = async (task, id) => {
    const taskDb = {
        title: task.title,
        userId: id,
    };
    return await Task.create(taskDb);
};

const findTaskById = async (taskId, userId) => {
    const user = await User.findByPk(userId, {
        include: {
            model: Task,
            as: 'tasks',
            where: {
                id: taskId,
            },
        },
    });
    return user.tasks;
};

const patchTaskById = async (title, taskId, userId) => {   
    const user = await User.findByPk(userId, {
        include: { 
            model: Task,
            as: 'tasks',
            where: {
                id: taskId,
            },
        },
    });
    const task = user.tasks[0];
    task.title = title;
    await task.save();
    return task;
};

const deleteUser = async (userId) => {
    const user = await User.findByPk(userId);
    await user.destroy();
    return user;
};

const deleteTaskById = async (taskId, userId) => {
    const user = await User.findByPk(userId, {
        include: {
            model: Task,
            as: 'tasks',
            where: {
                id: taskId,
            },
        },
    });
    const task = user.tasks[0];
    await task.destroy();
    return task;
};

module.exports = {
    createUser, findUserTasks, findUser, createTask, findTaskById, patchTaskById, deleteUser, deleteTaskById,
};