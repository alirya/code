// import Code from "../../dist/code";
// import Value from "../../dist/code/value";
// import Assign from "../../dist/error/assign";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
//
// describe("compiler compatible", function() {
//
//     let error = new TypeError('message');
//     let assigned = Assign(error, 1337);
//
//     let type : TypeError = assigned;
//     let code : Code<number> = assigned;
//     let value : number = assigned.code;
//
// });
//
// it("test", function() {
//
//     let error = new TypeError('message');
//     let assigned = Assign(error, 1337);
//
//     expect(assigned).toBeInstanceOf(TypeError);
//     expect(assigned.code).toBe(1337);
//     expect(assigned.message).toBe('message');
// });
