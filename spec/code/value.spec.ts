import Value from '../../dist/code/value';
import Code from '../../dist/code';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatible', function() {

    let code : Code<string> = {code:'string'};

    let result : string = Value(code);

});

it('result equal', function() {

    let code : Code<string> = {code:'string'};

    let result : string = Value(code);

    expect(result).toBe('string');

});

