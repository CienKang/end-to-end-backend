const { contentStorages } = require('../../database/models');
const contentStorageServices = require('../../src/services/contentStorages.services');
describe('contentStorages.services', () => {

    describe('getContentStorageForTypeId', () => {
        it('should return an array of contentStorages', async () => {

            jest.spyOn(contentStorages, 'findAll').mockResolvedValue([{
                id: 1,
                typeId: 1,
                data: {
                    'title': 'test',
                },
            }]);

            const result = await contentStorageServices.getContentStorageForTypeId(1);
            expect(result).toEqual([{
                id: 1,
                typeId: 1,
                data: {
                    'title': 'test',
                },
            }]);
        });

        it('should return an empty array when no contentStorages are found', async () => {
            jest.spyOn(contentStorages, 'findAll').mockResolvedValue([]);

            const result = await contentStorageServices.getContentStorageForTypeId(1);
            expect(result).toEqual([]);
        });
    });

    describe('postContentStorageForTypeId', () => {
        it('should return the created contentStorage', async () => {
            jest.spyOn(contentStorages, 'create').mockResolvedValue({
                id: 1,
                typeId: 1,
                data: {
                    'title': 'test',
                },
            });

            const result = await contentStorageServices.postContentStorageForTypeId(1, {
                'title': 'test',
            });
            expect(result).toEqual({
                id: 1,
                typeId: 1,
                data: {
                    'title': 'test',
                },
            });
        });
    });

    describe('updateSpecificContentStorageForTypeId', () => {
        it('should return the updated contentStorage', async () => {
            jest.spyOn(contentStorages, 'findOne').mockResolvedValue({
                id: 1,
                typeId: 1,
                data: {
                    'title': 'test',
                },
            });
            jest.spyOn(contentStorages, 'update').mockResolvedValue([1]);

            const result = await contentStorageServices.updateSpecificContentStorageForTypeId(1, {
                'title': 'test',
            });
            expect(result).toEqual([1]);
        });
    });

    describe('deleteSpecificContentStorageForTypeId', () => {
        it('should return the number of deleted contentStorages', async () => {
            jest.spyOn(contentStorages, 'destroy').mockResolvedValue(1);

            const result = await contentStorageServices.deleteSpecificContentStorageForTypeId(1, 1);
            expect(result).toEqual(1);
        });
    });

});