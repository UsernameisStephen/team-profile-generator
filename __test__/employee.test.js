const Employee = require("../lib/employee")

describe("Employee Class", () => {
    describe("int", () => {
        it("creates an employee object", () => {
            const employee = new Employee("Willie Smitts", "15", "williesmittslaps");

            expect(employee.name).toEqual(expect.any(String));

            expect(employee.id).toEqual(expect.any(Number));

            expect(employee.email).toEqual(expect.any(String));
        });    
   });

});
describe("getName", () => {
    it("to get employee name", () => {
        const employee = new Employee("Willie Smitts", "15", "williesmittslaps");

        expect(employee.getName()).toEqual(expect.any(String));
    });    
});
describe("getId", () => {
    it("to get employee ID", () => {

        const employee = new Employee("Willie Smitts", "15", "williesmittslaps");

        expect(employee.getID()).toEqual(expect.any(Number));
    });
});


describe("getEmail", () => {
    it ("to get employee email", () => {
        const employee = new Employee("Willie Smitts", "15", "williesmittslaps");

        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });   
});

describe("getRole", () => {
    it ("to get employee role", () => {
         const employee = new employee("Willie Smitts", "15", "williesmittslaps");

        expect(employee.getRole()).toEqual("employee");
    });    
});