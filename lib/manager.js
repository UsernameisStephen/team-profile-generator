// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

//create Manager class to derive from employee using extend

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //using super to call constructor from employee
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    //used to override employee and return manager
    getRole () {
        return "Manger"
    }
}
module.export = Manager