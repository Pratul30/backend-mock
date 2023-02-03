const controllers = require('../../src/controllers/userControllers');
const services = require('../../src/services/userServices');

describe('create user', () => {
    it('should create a user', async () => {
        jest.spyOn(services, 'createUser').mockResolvedValue({
            name: 'test',
            email: 'test.com'
        });
        const req = {
            body: {
                name: 'test',
                email: 'test.com'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        await controllers.createUser(req, res);
        expect(res.status).toBeCalledWith(201);
        expect(res.send).toBeCalledWith({
            name: 'test',
            email: 'test.com'
        });
    });
    it('should return http error', async () => {
        jest.spyOn(services, 'createUser').mockResolvedValue(null);
        const mockReq = {
            body: {
                name: 'test',
                email: 'test.com'
            }
        };

        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        await controllers.createUser(mockReq,mockRes);
        expect(mockRes.status).toBeCalledWith(400);
        expect(mockRes.send).toBeCalledWith('User already exists');
    });
    it('should return internal error', async () => {
        jest.spyOn(services, 'createUser').mockRejectedValue(null);
        const mockReq = {
            body: {
                name: 'test',
                email: 'test.com'
            }
        };

        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        await controllers.createUser(mockReq,mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.send).toBeCalledWith('Internal server error');
    });
});

describe('get user details', () => {
    it('should get user details', async () => {
        jest.spyOn(services, 'findUserTasks').mockResolvedValue({
            name: 'test',
            email: 'test.com'
        });
        const req = {
            params: {
                userId: 'test'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        await controllers.getUserDetails(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledWith({
            name: 'test',
            email: 'test.com'
        });
    });
    it('should return http error', async () => {
        jest.spyOn(services, 'findUserTasks').mockResolvedValue(null);
        const mockReq = {
            params: {
                userId: 'test'
            }
        };

        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        await controllers.getUserDetails(mockReq,mockRes);
        expect(mockRes.status).toBeCalledWith(400);
        expect(mockRes.send).toBeCalledWith('User not found');
    });
    it('should return internal error', async () => {
        jest.spyOn(services, 'findUserTasks').mockRejectedValue(null);
        const mockReq = {
            params: {
                userId: 'test'
            }
        };

        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        await controllers.getUserDetails(mockReq,mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.send).toBeCalledWith('Internal server error');
    });
});

describe('get all users', () => {
    it('should get all users', async () => {
        jest.spyOn(services, 'findUser').mockResolvedValue({
            name: 'test',
            email: 'test.com'
        });
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        await controllers.getUsers(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledWith({
            name: 'test',
            email: 'test.com'
        });
    });
    it('should return http error', async () => {
        jest.spyOn(services, 'findUser').mockResolvedValue(null);
        const mockReq = {};

        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        await controllers.getUsers(mockReq,mockRes);
        expect(mockRes.status).toBeCalledWith(400);
        expect(mockRes.send).toBeCalledWith('User not found');
    });
    it('should return internal error', async () => {
        jest.spyOn(services, 'findUser').mockRejectedValue(null);
        const mockReq = {};

        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        await controllers.getUsers(mockReq,mockRes);
        expect(mockRes.status).toBeCalledWith(500);
        expect(mockRes.send).toBeCalledWith('Internal server error');
    });
});