const Manager = require("../lib/manager");


describe("Manager Class", () => {
    describe("Init", () => {
        it("creates an Manager object", () => {
            const manager = new Manager("Willie Smitts", 15, "williesmittslaps");
            expect(manager.github) .toEqual(expect.any(Number));
        });    
    });    
});


describe("getRole", () => {
    it("to get role of Intern", () => {
        const manager = new Manager("Willie Smitts", 15, "williesmittslaps");

        expect(manager.getRole()).toEqual("Manager");
    });
});