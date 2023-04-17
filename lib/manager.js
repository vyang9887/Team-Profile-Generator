const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
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

    getOffice() {
        var thisOffice = this.office;
        return thisOffice;
    }

    getRole() {
        var thisrole = 'Manager';
        return thisrole;
    }
}

module.exports = Manager;