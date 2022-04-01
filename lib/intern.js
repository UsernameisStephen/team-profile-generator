// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        //using super to call constructor from employee
        super (name, id, email);
    
        this.school = school;
    }
    getSchool (){
        return this.school;
    }    

    //used to override employee and return Intern
    getRole () {
        return "Intern";
    }
}

//export Intern
module.exports = Intern;