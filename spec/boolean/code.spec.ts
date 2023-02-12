import Type from '../../dist/boolean/code.js';
import Code from '../../dist/code.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    const data : object = {null:null};

    if(Type(data)) {
        const code : Code = data;
    } else {
        // @ts-expect-error
        const code : Code = data;
    }

});

describe('unvalidated value', function() {

    describe('valid', function() {

        it('string', () => {

            const code = {code : 'string'};
            expect(Type(code)).toBe(true);

        });

        it('integer', () => {

            const code = {code : 1};
            expect(Type(code)).toBe(true);

        });
    });

    describe('invalid', function() {

        it('string', () => {

            const code = {string:'string'};
            expect(Type(code)).toBe(false);

        });

        it('integer', () => {

            const code = {integer:1};
            expect(Type(code)).toBe(false);

        });
    });
});


describe('validated value', function() {

    describe('valid', function() {

        it('object', () => {

            const code = {code :{}};
            expect(Type(code)).toBe(true);
        });

        it('class', () => {

            class C {
                constructor(
                    public code : object = {}
                ){}
            }

            expect(Type(new C)).toBe(true);
        });
    });

    describe('invalid code', function() {

        it('object', () => {

            const code = {};
            expect(Type(code)).toBe(false);
        });

        it('class', () => {

            class C {
                constructor(
                    public string : string = '1'
                ){}
            }

            expect(Type(new C)).toBe(false);
        });
    });
});
