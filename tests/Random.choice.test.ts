import { Random } from "../src";


test('no argument specified should throw', () => {

    expect(() => {
        const choice = Random.choice();
    }).toThrow();
});

test('return undefined if array or string passed is empty', () => {

    expect(Random.choice([])).toBeUndefined();
    expect(Random.choice("")).toBeUndefined()
});

test('check with multiple elements', () => {

    const check = (sequence: any) => {

        expect(sequence).toContain(Random.choice(sequence));
    };

    check([1]);
    check([12, 123, 342, 22]);
    check([243, 455]);
    check([90, 21]);
    check(['a', 'ds', 44]);
    check([{ a: 1 }, 32, 55, '2']);
    check('s');
    check('some random collection of words');
    check('vighnesh');
});
