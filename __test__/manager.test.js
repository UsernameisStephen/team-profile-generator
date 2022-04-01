const Manager = require("../lib/manager");


describe("Manager Class", () => {
    describe("init", () => {
        it("creates an Manager object", () => {
            const manager = new Manager("Willie Smitts", 15, "williesmittslaps");
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });    
    });    
});


describe("getRole", () => {
    it("to get role of Intern", () => {
        const manager = new Manager("Willie Smitts", 15, "williesmittslaps");

        expect(manager.getRole()).toEqual("Manager");
    });
});