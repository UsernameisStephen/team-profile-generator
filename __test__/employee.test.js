const Employee = require("../lib/employee")

describe("creates an employee object", () => {
    const employee = new Employee("Willie Smitts", "15", "williesmittslaps");

    expect(employee.name).toEqual(expect.any(String));

    expect(employee.id).toEqual(expect.any(Number));

    expect(employee.email).toEqual(expect.any(String));


});
describe('to get employee name', () => {
    const employee = new Employee("Willie Smitts", "15", "williesmittslaps");

    expect(employee.getName()).toEqual(expect.any(String));
})
describe('to get employee ID', () => {
    const employee = new Employee("Willie Smitts", "15", "williesmittslaps");

    expect(employee.getID()).toEqual(expect.any(Number));
})


describe('to get employee email', () => {
    const employee = new Employee("Willie Smitts", "15", "williesmittslaps");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

describe('to get employee role', () => {
    const employee = new employee("Willie Smitts", "15", "williesmittslaps");

    expect(employee.getRole()).toEqual("employee");
})