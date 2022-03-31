const Intern = require("../lib/intern");


describe("creates an Intern object", () => {
    const intern = new Intern("Willie Smitts", 15, "williesmittslaps");
    
    expect(intern.github) .toEqual(expect.any(String));
});


describe("to get Intern school", () => {
    const intern = new Intern("Willie Smitts", 15, "williesmittslaps");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


describe("to get role of Intern", () => {
    const intern = new Intern("Willie Smitts", 15, "williesmittslaps");

    expect(intern.getRole()).toEqual("Intern");
});