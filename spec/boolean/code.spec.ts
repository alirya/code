import Type from '../../dist/boolean/code.js';
import Code from '../../dist/code.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    let data : object = {null:null};

    if(Type(data)) {
        let code : Code = data;
    } else {
        // @ts-expect-error
        let code : Code = data;
    }

});

describe('unvalidated value', function() {

    describe('valid', function() {

        it('string', () => {

            let code = {code : 'string'};
            expect(Type(code)).toBe(true);

        });

        it('integer', () => {

            let code = {code : 1};
            expect(Type(code)).toBe(true);

        });
    });

    describe('invalid', function() {

        it('string', () => {

            let code = {string:'string'};
            expect(Type(code)).toBe(false);

        });

        it('integer', () => {

            let code = {integer:1};
            expect(Type(code)).toBe(false);

        });
    });
});


describe('validated value', function() {

    describe('valid', function() {

        it('object', () => {

            let code = {code :{}};
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

            let code = {};
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
