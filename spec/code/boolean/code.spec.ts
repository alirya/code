import Type from '../../../dist/code/boolean/code.js';
import ObjectType from '@alirya/object/boolean/object.js';
import Code from '../../../dist/code.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    const data : Code = {code:1};

    if(Type(data, ObjectType)) {

        const code : object = data.code;

    } else {

        // @ts-expect-error
        const code : object = data.code;
    }

});

describe('valid', function() {

    it('object', () => {

        const code = {code :{}};
        expect(Type(code, ObjectType)).toBe(true);
    });

    it('class', () => {

        class C {
            constructor(
                public code : object = {}
            ){}
        }

        expect(Type(new C, ObjectType)).toBe(true);
    });
});

describe('invalid value', function() {

    it('object', () => {

        const code = {code :1};
        expect(Type(code, ObjectType)).toBe(false);
    });

    it('class', () => {

        class C {
            constructor(
                public code : number = 1
            ){}
        }

        expect(Type(new C, ObjectType)).toBe(false);
    });
});

