import Random from "../src";


test('No arguments passed should throw error', () => {

    expect(() => {
        const sample = Random.sample();
    }).toThrow();
});

test('stop and count not passed should throw error', () => {

    expect(() => {
        const sample = Random.sample(1);
    }).toThrow();
});

test('count not passed should throw error', () => {

    expect(() => {
        const sample = Random.sample(1, 2);
    }).toThrow();
});

test('Invalid type of start, stop, or ' +
    'count should throw error', () => {

    expect(() => {
        const sample = Random.sample(
            undefined, 1, 1
        );
    }).toThrow();

    expect(() => {
        const sample = Random.sample(
            1, undefined, 1
        );
    }).toThrow();

    expect(() => {
        const sample = Random.sample(
            1, 1, undefined
        );
    }).toThrow();

    expect(() => {
        const sample = Random.sample(
            undefined, undefined, 1
        );
    }).toThrow();

    expect(() => {
        const sample = Random.sample(
            1, undefined, undefined
        );
    }).toThrow();

    expect(() => {
        const sample = Random.sample(
            undefined, 1, undefined
        );
    }).toThrow();

    expect(() => {
        const sample = Random.sample(
            undefined, undefined, undefined
        );
    }).toThrow();
});

test('Passing correct arguments should ' +
    'result in correct output', () => {

    const check = (start: number, stop: number, count: number) => {
        const sample = Random.sample(start, stop, count);

        expect(sample.length).toBe(count);
        sample.forEach((item) => {
            if (start <= stop) {
                expect(item).toBeLessThan(stop);
                expect(item).toBeGreaterThanOrEqual(start);
            } else {
                expect(item).toBeLessThan(start);
                expect(item).toBeGreaterThanOrEqual(stop);
            }
        });
    };

    check(1, 5, 10);
    check(0.242, 0.32432, 100);
    check(-23487234, 13498293, 39487);
    check(0, -1, 100);
});
