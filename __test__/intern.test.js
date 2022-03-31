const Intern = require("../lib/intern");



describe ("Intern Class", () => {
    describe("Init", () => {
        it ("creates an intern object", () => {
            const intern = new Intern("Willie Smitts", 15, "williesmittslaps");
            expect(intern.school) .toEqual(expect.any(String));
        });    
    });
});


describe("getschool", () => {
    it ("to get intern scool", () => {
        const intern = new Intern("Willie Smitts", 15, "williesmittslaps");
        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    });
});


describe("getRole", () => {
    it ("to get role of intern", () => {
        const intern = new intern("Willie Smitts", 15, "williesmittslaps", "WSSU");

        expect(intern.getRole()).toEqual("Intern");
    });    
});
