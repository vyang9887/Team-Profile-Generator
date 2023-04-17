
const Engineer = require('../lib/Engineer');

describe('Engineer Tests', () => {
    describe('Engineer Data', () => {
        it('should create an object including the employee name, id, email address and github', () => {
            const data = new Engineer ('Vince', 1988, 'tzong@gmail.com', 'tzong88');

            expect(data.name).toEqual('Vince');
            expect(data.id).toEqual(1988);
            expect(data.email).toEqual('tzong@gmail.com');
            expect(data.github).toEqual('tzong88');
        });
    });
    describe('Engineer Methods', () => {
        it('should return employee data as an object', () => {
            const data = new Engineer ('Max', 1995, 'mxwll@gmail.com', 'mxwll95');

            expect(data.getName()).toEqual('Max');
            expect(data.getId()).toEqual(1995);
            expect(data.getEmail()).toEqual('mxwll@gmail.com');
            expect(data.getGithub()).toEqual('mxwll95');
            expect(data.getRole()).toEqual('Engineer');
        });
    });
});