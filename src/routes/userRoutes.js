const express = require('express');
const router = express.Router();

const {createUser, getUserDetails, getUsers, createTask, getTasks,getTaskById, patchTaskById, deleteUser,deleteTaskById} = require('../controllers/userControllers');

router.route('/').post(createUser).get(getUsers);
router.route('/:userId').get(getUserDetails).delete(deleteUser);
router.route('/:userId/tasks').post(createTask).get(getTasks);
router.route('/:userId/tasks/:taskId').get(getTaskById).patch(patchTaskById).delete(deleteTaskById);

module.exports = router;