

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = ("./employee")

class Engineer extends Employee {
    constructor (name, id, github) {
        //using super to call constructor from employee
        super (name, id, email);
        
        this.github = github;
    }
    getGithub (){
        return this.github
    }    

    //used to override employee and return engineer
    getRole () {
        return "Engineer"
    }
}

//export Engineer
module.exports = Engineer;