const ContentTypeServices = require('../../src/services/contentTypes.services');
const ContentTypeController = require('../../src/controllers/contentTypes.controller');

describe('ContentTypeController', () => {
    describe('getContentTypes', () => {
        it('should return status 200 and contentTypes when passed with correct typeId', async () => {
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(ContentTypeServices, 'getAllContentTypes').mockResolvedValue([{ id: 1, name: 'test', fields: [] }]);

            await ContentTypeController.getContentTypes(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'test', fields: [] }]);
        });

        it('should return status 404 and error message when passed with incorrect typeId', async () => {
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(ContentTypeServices, 'getAllContentTypes').mockRejectedValue(new Error('error'));
            await ContentTypeController.getContentTypes(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'error' });
        });
    });

    describe('postNewContentType', () => {
        it('should return status 201 and newContentType when passed with correct typeId and content', async () => {
            const req = {
                body: {
                    typeName: 'test',
                    fields: []
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(ContentTypeServices, 'createNewContentType').mockResolvedValue({ id: 1, name: 'test', fields: [] });
            await ContentTypeController.postNewContentType(req, res);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'test', fields: [] });
        });

        it('should return status 404 and error message when passed with incorrect typeId', async () => {
            const req = {
                body: {
                    typeName: 'test',
                    fields: []
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(ContentTypeServices, 'createNewContentType').mockRejectedValue(new Error('error'));
            await ContentTypeController.postNewContentType(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'error' });
        });
    });

    describe('addNewFieldInSpecificContentType', () => {
        it('should return status 200 and newField when passed with correct typeId and content', async () => {
            const req = {
                params: {
                    typeName: 'test'
                },
                body: {
                    field: {
                        name: 'test',
                        type: 'string'
                    }
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(ContentTypeServices, 'addNewFieldContentType').mockResolvedValue({ name: 'test', type: 'string' });
            await ContentTypeController.addNewFieldInSpecificContentType(req, res);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ name: 'test', type: 'string' });
        });

        it('should return status 404 and error message when passed with incorrect typeId', async () => {
            const req = {
                params: {
                    typeName: 'test'
                },
                body: {
                    field: {
                        name: 'test',
                        type: 'string'
                    }
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(ContentTypeServices, 'addNewFieldContentType').mockRejectedValue(new Error('error'));
            await ContentTypeController.addNewFieldInSpecificContentType(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'error' });
        });
    });

    describe('deleteFieldInSpecificContentType', () => {
        it('should return status 200 and success message when passed with correct typeId and content', async () => {
            const req = {
                params: {
                    typeName: 'test'
                },
                body: {
                    fieldName: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(ContentTypeServices, 'deleteFieldContentType').mockResolvedValue({ message: 'success' });
            await ContentTypeController.deleteFieldInSpecificContentType(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'success' });
        });

        it('should return status 404 and error message when passed with incorrect typeId', async () => {
            const req = {
                params: {
                    typeName: 'test'
                },
                body: {
                    fieldName: 'test'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(ContentTypeServices, 'deleteFieldContentType').mockRejectedValue(new Error('error'));
            await ContentTypeController.deleteFieldInSpecificContentType(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'error' });

        });

        describe('renameContentType', () => {
            it('should return status 200 and success message when passed with correct typeId and content', async () => {
                const req = {
                    params: {
                        typeName: 'test'
                    },
                    body: {
                        newTypeName: 'test'
                    }
                };
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn()
                };

                jest.spyOn(ContentTypeServices, 'renameContentType').mockResolvedValue({ newTypeName: 'test' });
                await ContentTypeController.renameContentType(req, res);
                expect(res.status).toHaveBeenCalledWith(200);
                expect(res.json).toHaveBeenCalledWith({ newTypeName: 'test' });
            });

            it('should return status 404 and error message when passed with incorrect typeId', async () => {
                const req = {
                    params: {
                        typeName: 'test'
                    },
                    body: {
                        newTypeName: 'test'
                    }
                };
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn()
                };

                jest.spyOn(ContentTypeServices, 'renameContentType').mockRejectedValue(new Error('error'));
                await ContentTypeController.renameContentType(req, res);
                expect(res.status).toHaveBeenCalledWith(404);
                expect(res.json).toHaveBeenCalledWith({ message: 'error' });
            });
        });

        describe('getFieldsInSpecificContentType', () => {
            it('should return status 200 and success message when passed with correct typeId and content', async () => {
                const req = {
                    params: {
                        typeName: 'test'
                    }
                };
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn()
                };

                jest.spyOn(ContentTypeServices, 'getFieldsInSpecificContentType').mockResolvedValue({ fields: [] });
                await ContentTypeController.getFieldsInSpecificContentType(req, res);
                expect(res.status).toHaveBeenCalledWith(200);
                expect(res.json).toHaveBeenCalledWith({ fields: [] });
            });

            it('should return status 404 and error message when passed with incorrect typeId', async () => {
                const req = {
                    params: {
                        typeName: 'test'
                    }
                };
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn()
                };

                jest.spyOn(ContentTypeServices, 'getFieldsInSpecificContentType').mockRejectedValue(new Error('error'));
                await ContentTypeController.getFieldsInSpecificContentType(req, res);
                expect(res.status).toHaveBeenCalledWith(404);
                expect(res.json).toHaveBeenCalledWith({ message: 'error' });
            });
        });

    });
});