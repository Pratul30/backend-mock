const services = require('../../src/services/userServices');
const { User, Task } = require('../../database/models');

describe('create user', () => {
    it('should create a new user' , async ()=>{
        jest.spyOn(User,'create').mockResolvedValue({
            name: 'test',
            email: 'test.com'
        });
        const user = await services.createUser({
            name: 'test',
            email: 'test.com'
        });
        expect(user).toEqual({
            name: 'test',
            email: 'test.com'
        });
    });
});

describe('find user tasks', () => {
    it('should find user tasks', async () => {
        jest.spyOn(User, 'findByPk').mockResolvedValue({
            tasks: [
                {
                    title: 'test',
                    userId: 1,
                },
            ],
        });
        const tasks = await services.findUserTasks(1);
        expect(tasks).toEqual([
            {
                title: 'test',
                userId: 1,
            },
        ]);
    });
});

describe('find user', () => {
    it('should find user', async () => {
        jest.spyOn(User, 'findAll').mockResolvedValue([
            {
                name: 'test',
                email: 'test.com',
                tasks: [
                    {
                        title: 'test',
                        userId: 1,
                    },
                ],
            },
        ]);
        const user = await services.findUser();
        expect(user).toEqual([
            {
                name: 'test',
                email: 'test.com',
                tasks: [
                    {
                        title: 'test',
                        userId: 1,
                    },
                ],
            },
        ]);
    });
});

describe('create task', () => {
    it('should create a new task', async () => {
        jest.spyOn(Task, 'create').mockResolvedValue({
            title: 'test',
            userId: 1,
        });
        const task = await services.createTask({
            title: 'test',
        }, 1);
        expect(task).toEqual({
            title: 'test',
            userId: 1,
        });
    });
});
