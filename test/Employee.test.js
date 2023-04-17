const Employee = require('../lib/Employee');

describe('Employee Tests', () => {
    describe('Employee Data', () => {
        it('should create an object including the employee name, id, and email address', () => {
            const data = new Employee ('Vic', 1, 'vyang@gmail.com');

            expect(data.name).toEqual('Vic');
            expect(data.id).toEqual(1);
            expect(data.email).toEqual('vyang@gmail.com');
        });
    });
    describe('Employee Methods', () => {
        it('should return employee data as an object', () => {
            const data = new Employee ('Nicole', 2, 'NChon@gmail.com');

            expect(data.getName()).toEqual('Nicole');
            expect(data.getId()).toEqual(2);
            expect(data.getEmail()).toEqual('NChon@gmail.com');
            expect(data.getRole()).toEqual('Employee');
        });
    });
});