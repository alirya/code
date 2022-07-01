//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
//
// describe("compiler compatible", function() {
//
//     let error = new TypeError('message');
//     let source = {code:1337};
//     let assigned = AssignObject(error, source);
//
//     let type : TypeError = assigned;
//     let code : Code<number> = assigned;
//     let value : number = assigned.code;
//
// });
//
// it("test", function() {
//
//     let source = {code:1337};
//     let error = new TypeError('message');
//     let assigned = AssignObject(error, source);
//
//     expect(assigned).toBeInstanceOf(TypeError);
//     expect(assigned.code).toBe(1337);
//     expect(assigned.message).toBe('message');
// });
