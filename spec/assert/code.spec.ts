import Code from '../../dist/assert/code';
import CodeInterface from '../../dist/code';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    let data : object = {};

    try {
        Code(data);

        let code : unknown = data.code;

        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});


describe('boolean', function() {

    it(`true`, () => {
        try {
            Code(new Boolean(true));
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`false`, () => {
        try {
            Code(new Boolean(false));
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});


describe('object', function() {

    it(`plain`, () => {
        try {
            Code({});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`instance`, () => {
        try {
            Code(new Map());
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        try {
            Code(function () {});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`anonymous arrow`, () => {
        try {
            Code(()=>{});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`named`, () => {
        try {
            Code(isNaN);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});




