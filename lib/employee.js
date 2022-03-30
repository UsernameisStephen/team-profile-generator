// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`. 


//begin employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //return name input
    getName() {
        return this.name;
    }
    //retrun ID input
    getId () {
        return this.id;
    }
    //retrun email input
    getEmail () {
        return this.email;
    }    
    //return role and type 
    getRole () {
        return "Employee";
    }
}

//export Employee
module.export = Employee