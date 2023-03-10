const { bodyValidator, paramsValidator } = require('../../src/middlewares/requestValidator.middleware');
const Joi = require('joi');

describe('requestValidator', () => {

    describe('bodyValidator', () => {
        it('should call next() when body is valid', () => {
            const schema = Joi.object({
                username: Joi.string().required(),
                password: Joi.string().required(),
            });
            const req = { body: { username: 'test', password: '123' } };
            const res = {};
            const next = jest.fn();

            bodyValidator(schema)(req, res, next);

            expect(next).toHaveBeenCalled();
        });

        it('should return 400 when body is invalid', () => {
            const schema = Joi.object({
                username: Joi.string().required(),
                password: Joi.string().required(),
            });
            const req = { body: { username: 'test' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const next = jest.fn();

            bodyValidator(schema)(req, res, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: expect.any(String) });
            expect(next).not.toHaveBeenCalled();
        });
    });

    describe('paramsValidator', () => {
        it('should call next() when params are valid', () => {
            const schema = Joi.object({
                id: Joi.number().required(),
            });
            const req = { params: { id: '1' } };
            const res = {};
            const next = jest.fn();

            paramsValidator(schema)(req, res, next);

            expect(next).toHaveBeenCalled();
        });

        it('should return 400 when params are invalid', () => {
            const schema = Joi.object({
                id: Joi.number().required(),
            });
            const req = { params: { id: 'abc' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const next = jest.fn();

            paramsValidator(schema)(req, res, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: expect.any(String) });
            expect(next).not.toHaveBeenCalled();
        });
    });

});