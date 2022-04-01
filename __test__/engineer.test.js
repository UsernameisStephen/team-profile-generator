const Engineer = require("../lib/engineer");


describe ("Engineer Class", () => {
    describe("init", () => {
        it ("creates an engineer object", () => {
            const engineer = new Engineer("Willie Smitts", 15, "williesmittslaps");
            expect(engineer.github) .toEqual(expect.any(String));
        });    
    });
});


describe("getGithub", () => {
    it ("to get engineer github", () => {
        const engineer = new Engineer("Willie Smitts", 15, "williesmittslaps");

        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });
});


describe("getRole", () => {
    it ("to get role of engineer", () => {
        const engineer = new Engineer("Willie Smitts", 15, "williesmittslaps");

         expect(engineer.getRole()).toEqual("Engineer");
    });    
});