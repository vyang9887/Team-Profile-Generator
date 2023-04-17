const Intern = require('../lib/Intern');

describe('Intern Tests', () => {
    describe('Intern Data', () => {
        it('should create an object including the employee name, id, email address, and school name', () => {
            const data = new Intern ('Hubert', 93, 'hoobs@gmail.com', 'GSU');

            expect(data.name).toEqual('Hubert');
            expect(data.id).toEqual(93);
            expect(data.email).toEqual('hoobs@gmail.com');
            expect(data.school).toEqual('GSU');
        });
    });
    describe('Intern Methods', () => {
        it('sshould return employee data as an object', () => {
            const data = new Intern ('Shnozzberry', 1000000, 'shnozz@gmail.com', 'Father Time');

            expect(data.getName()).toEqual('Shnozzberry');
            expect(data.getId()).toEqual(1000000);
            expect(data.getEmail()).toEqual('shnozz@gmail.com');
            expect(data.getSchool()).toEqual('Father Time');
            expect(data.getRole()).toEqual('Intern');
        });
    });
});