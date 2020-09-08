const enhancer = require('./enhancer.js');
// test away!
describe("runs enhancement tests", () => {
    it("repairs", () => {
        expect(enhancer.repair({
            name: "Sword",
            durability: 2,
            enhancement: 10,
        })).toEqual({
            name: "Sword",
            durability: 100,
            enhancement: 10,
        })
    })
})