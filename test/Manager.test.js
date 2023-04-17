const Manager = require('../lib/Manager');

describe('Manager Tests', () => {
    describe('Manager Data', () => {
        it('should create an object including the employee name, id, email address, and office number', () => {
            const data = new Manager ('Hwa', 87, 'thewizard@gmail.com', 5);

            expect(data.name).toEqual('Hwa');
            expect(data.id).toEqual(87);
            expect(data.email).toEqual('thewizard@gmail.com');
            expect(data.office).toEqual(5);
        });
    });
    describe('Manager Methods', () => {
        it('should return employee data as an object', () => {
            const data = new Manager ('Wife', 1, 'blank@gmail.com', 1);

            expect(data.getName()).toEqual('Wife');
            expect(data.getId()).toEqual(1);
            expect(data.getEmail()).toEqual('blank@gmail.com');
            expect(data.getOffice()).toEqual(1);
            expect(data.getRole()).toEqual('Manager');
        });
    });
});