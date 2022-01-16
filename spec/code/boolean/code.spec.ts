import Type from "../../../dist/code/boolean/code";
import ObjectType from "@alirya/object/boolean/object";
import Code from "../../../dist/code";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let data : Code = {code:1};

    if(Type(data, ObjectType)) {

        let code : object = data.code;

    } else {

        // @ts-expecerror
        let code : object = data.code;
    }

});

describe("valid", function() {

    it("object", () => {

        let code = {code :{}};
        expect(Type(code, ObjectType)).toBe(true)
    });

    it("class", () => {

        class C {
            constructor(
                public code : object = {}
            ){}
        }

        expect(Type(new C, ObjectType)).toBe(true)
    });
});

describe("invalid value", function() {

    it("object", () => {

        let code = {code :1};
        expect(Type(code, ObjectType)).toBe(false)
    });

    it("class", () => {

        class C {
            constructor(
                public code : number = 1
            ){}
        }

        expect(Type(new C, ObjectType)).toBe(false)
    });
});

