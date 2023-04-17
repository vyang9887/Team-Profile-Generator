class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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

    getRole() {
        var thisrole = 'Employee';
        return thisrole;
    }
}

module.exports = Employee;