const contentStorageServices = require('../../src/services/contentStorages.services');
const contentStoragesController = require('../../src/controllers/contentStorages.controller');

describe('ContentStoragesController', () => {
    describe('getContentStorageForTypeId', () => {

        it('should return status 200 and contentStorage when passed with correct typeId', async () => {
            const req = {
                params: {
                    typeId: '1'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(contentStorageServices, 'getContentStorageForTypeId').mockResolvedValue({ id: 1, typeId: 1, content: 'test' });

            await contentStoragesController.getContentStorageForTypeId(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ id: 1, typeId: 1, content: 'test' });
        });

        it('should return status 404 and error message when passed with incorrect typeId', async () => {
            
            const req = {
                params: {
                    typeId: '1'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(contentStorageServices, 'getContentStorageForTypeId').mockRejectedValue(new Error('error'));
            await contentStoragesController.getContentStorageForTypeId(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'error' });
        });
    });

    describe('postContentStorageForTypeId', () => {

        it('should return status 201 and contentStorage when passed with correct typeId and content', async () => {
            const req = {
                params: {
                    typeId: '1'
                },
                body: {
                    data: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(contentStorageServices, 'postContentStorageForTypeId').mockResolvedValue({ id: 1, typeId: 1, content: 'test' });

            await contentStoragesController.postContentStorageForTypeId(req, res);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ id: 1, typeId: 1, content: 'test' });
        });

        it('should return status 404 and error message when passed with incorrect typeId and data', async () => {
                
            const req = {
                params: {
                    typeId: '1'
                },
                body: {
                    data: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
    
            jest.spyOn(contentStorageServices, 'postContentStorageForTypeId').mockRejectedValue(new Error('error'));
            await contentStoragesController.postContentStorageForTypeId(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'error' });
        });
    });

    describe('updateSpecificContentStorageOfTypeId', () => {

        it('should return status 201 and contentStorage when passed with correct typeId and content', async () => {
            const req = {
                params: {
                    typeId: '1'
                },
                body: {
                    content: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(contentStorageServices, 'updateSpecificContentStorageForTypeId').mockResolvedValue({ id: 1, typeId: 1, content: 'test' });

            await contentStoragesController.updateSpecificContentStorageOfTypeId(req, res);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ id: 1, typeId: 1, content: 'test' });
        });

        it('should return status 404 and error message when passed with incorrect typeId and data', async () => {
                
            const req = {
                params: {
                    typeId: '1'
                },
                body: {
                    content: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
    
            jest.spyOn(contentStorageServices, 'updateSpecificContentStorageForTypeId').mockRejectedValue(new Error('error'));
            await contentStoragesController.updateSpecificContentStorageOfTypeId(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'error' });
        });
    });

    describe('deleteSpecificContentStorageOfTypeId', () => {
            
        it('should return status 204 and contentStorage when passed with correct typeId and content', async () => {
            const req = {
                params: {
                    typeId: '1'
                },
                body: {
                    content: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
    
            jest.spyOn(contentStorageServices, 'deleteSpecificContentStorageForTypeId').mockResolvedValue({ id: 1, typeId: 1, content: 'test' });
    
            await contentStoragesController.deleteSpecificContentStorageOfTypeId(req, res);
            expect(res.status).toHaveBeenCalledWith(204);
            expect(res.json).toHaveBeenCalledWith({ id: 1, typeId: 1, content: 'test' });
        });
    
        it('should return status 404 and error message when passed with incorrect typeId and data', async () => {
                    
            const req = {
                params: {
                    typeId: '1'
                },
                body: {
                    content: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
        
            jest.spyOn(contentStorageServices, 'deleteSpecificContentStorageForTypeId').mockRejectedValue(new Error('error'));
            await contentStoragesController.deleteSpecificContentStorageOfTypeId(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'error' });
        });
    });

});