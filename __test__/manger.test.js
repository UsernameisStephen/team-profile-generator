const Manager = require("../lib/manager");


describe("creates an Manager object", () => {
    const manager = new Manager("Willie Smitts", 15, "williesmittslaps");
    
    expect(manager.github) .toEqual(expect.any(Number));
});


describe("to get role of Intern", () => {
    const manager = new Manager("Willie Smitts", 15, "williesmittslaps");

    expect(manager.getRole()).toEqual("Manager");
});