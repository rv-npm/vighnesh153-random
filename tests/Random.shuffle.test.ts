import { Random } from "../src";


test('No arguments passed, should throw error', () => {

    expect(() => {
            const shuffled = Random.shuffle();
        }
    ).toThrow();
});

test('Invalid argument type should throw error', () => {

    expect(() => {
        const shuffled = Random.shuffle(undefined);
    }).toThrow();
});

test('Passing empty sequence should return empty array', () => {

    let result = Random.shuffle([]);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(0);

    result = Random.shuffle('');
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(0);
});

test('Passing sequence with 1 element should return ' +
    'an array with that element', () => {

    let result = Random.shuffle([2344]);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(2344);

    result = Random.shuffle(['abc']);
    expect(result.length).toBe(1);
    expect(result[0]).toBe('abc');

    result = Random.shuffle('V');
    expect(result.length).toBe(1);
    expect(result[0]).toBe('V');
});

test('Passing multiple element sequence should ' +
    'return a shuffled array of the elements', () => {

    const check = (sequence: any[] | string): void => {
        const result = Random.shuffle(sequence);

        expect(result.length).toBe(sequence.length);
        for (const item of sequence) {
            expect(result).toContain(item);
        }
    };

    check([1, 2, 3]);
    check('abcde');
    check('aaaaa');
    check([1, 2, 3, 'a,', 'sja', 1343, 'sasf', 324]);
});
