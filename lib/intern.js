const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getName() {
        var thisName = this.name;
        return thisName;
    }

    getId() {
        var thisId = this.id;
        return thisId;
    }

    getEmail() {
        var thisEmail = this.email;
        return thisEmail;
    }

    getSchool() {
        var thisSchool = this.school;
        return thisSchool;
    }

    getRole() {
        var thisrole = 'Intern';
        return thisrole;
    }
}

module.exports = Intern;