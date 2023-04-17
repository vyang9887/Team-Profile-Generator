const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGithub() {
        var thisGithub = this.github;
        return thisGithub;
    }

    getRole() {
        var thisrole = 'Engineer';
        return thisrole;
    }
}

module.exports = Engineer;
