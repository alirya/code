import Value from '../../dist/code/value.js';
import Code from '../../dist/code.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatible', function() {

    const code : Code<string> = {code:'string'};

    const result : string = Value(code);

});

it('result equal', function() {

    const code : Code<string> = {code:'string'};

    const result : string = Value(code);

    expect(result).toBe('string');

});

