const authTokenValidaton= require('../../src/middlewares/authTokenValidation.middleware');

describe('authoTokenValidation', () => {
    describe('authTokenValidation', () => {

        it('should call next when passed with correct token', async () => {
            const req = {
                headers: {
                    authorization: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();

            jest.spyOn(global, 'fetch').mockResolvedValue({ status: 200 });
            await authTokenValidaton(req, res, next);
            expect(next).toHaveBeenCalled();
        });

        it('should return status 403 and error message when passed with incorrect token', async () => {
            const req = {
                headers: {
                    authorization: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();

            jest.spyOn(global, 'fetch').mockResolvedValue({ status: 403 });
            await authTokenValidaton(req, res, next);
            expect(res.status).toHaveBeenCalledWith(403);
            expect(res.send).toHaveBeenCalledWith('Forbidden');
        });

        it('should return status 500 and error message when error occurs', async () => {
            const req = {
                headers: {
                    authorization: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();

            jest.spyOn(global, 'fetch').mockRejectedValue(new Error('error'));
            await authTokenValidaton(req, res, next);

        });

    });
});