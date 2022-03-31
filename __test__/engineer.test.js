const Engineer = require('../lib/engineer');


describe('creates an engineer object', () => {
    const engineer = new Engineer("Willie Smitts", 15, "williesmittslaps");
    
    expect(engineer.github) .toEqual(expect.any(String));
});


describe("to get engineer github", () => {
    const engineer = new Engineer("Willie Smitts", 15, "williesmittslaps");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


describe("to get role of engineer", () => {
    const engineer = new Engineer("Willie Smitts", 15, "williesmittslaps");

    expect(engineer.getRole()).toEqual("Engineer");
});