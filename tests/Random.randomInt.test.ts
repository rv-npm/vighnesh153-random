import Random from '../src/index';


test('invalid number of arguments', () => {

    expect(() => {
        Random.randomInt();
    }).toThrow();

    expect(() => {
        Random.randomInt(1);
    }).toThrow();
});

test('"randomInt" non-integer argument ' +
    'passed to start should throw error', () => {

    expect(() => {
        Random.randomInt(0.1, 3)
    }).toThrow();
});

test('"randomInt" non-integer argument ' +
    'passed to stop should throw error', () => {

    expect(() => {
        Random.randomInt(0.0, 13.2)
    }).toThrow();
});

test('"randomInt" non-integer argument ' +
    'passed to step should throw error', () => {

    expect(() => {
        Random.randomInt(3, 3, 0.9)
    }).toThrow();
});

test('if start equals stop, ' +
    'then start should be returned', () => {

    expect(
        Random.randomInt(4, 4, 0)
    ).toBe(4);
});

test('"randomInt" step is 0 ' +
    'and start not equals stop should throw error', () => {

    expect(() => {
        Random.randomInt(2, 3, 0)
    }).toThrow();
});

test('if start less than stop and step is negative,' +
    ' then "randomInt" should throw error as empty range', () => {

    expect(() => {
        Random.randomInt(-4, 10, -5);
    }).toThrow();
});

test('random number should lie between the ' +
    'start(inclusive) and stop(exclusive)', () => {

    const check = (rangeStart: number, rangeStop: number): void => {
        const randomNumber = Random.randomInt(rangeStart, rangeStop);

        expect(randomNumber).toBeGreaterThanOrEqual(rangeStart);
        expect(randomNumber).toBeLessThan(rangeStop);
    };

    check(2, 3);
    check(2, 3);
    check(2, 3);

    check(3, 5);
    check(3, 5);
    check(3, 5);

    check(2, 10);
    check(2, 10);
    check(2, 10);

    check(-2, 40);
    check(-2, 40);
    check(-2, 40);

    check(-999, 1000);
    check(-999, 1000);
    check(-999, 1000);
});

test('random number should lie between the ' +
    'start(inclusive) and stop(exclusive) and also, should be on the step', () => {

    const check = (rangeStart: number, rangeStop: number, rangeStep: number): void => {
        const randomNumber = Random.randomInt(rangeStart, rangeStop, rangeStep);

        expect(randomNumber).toBeGreaterThanOrEqual(rangeStart);
        expect(randomNumber).toBeLessThan(rangeStop);
        expect((randomNumber - rangeStart) % rangeStep === 0).toBeTruthy();
    };

    check(3, 5, 10);
    check(3, 5, 1);
    check(3, 7, 2);

    check(2, 10, 4);
    check(2, 10, 3);
    check(2, 10, 5);

    check(-2, 40, 7);
    check(-2, 40, 13);
    check(-2, 40, 19);

    check(-999, 1000, 243);
    check(-999, 1000, 23);
    check(-999, 1000, 6);
});

test('check for negative step', () => {

    const check = (rangeStart: number, rangeStop: number, rangeStep: number): void => {
        const randomNumber = Random.randomInt(rangeStart, rangeStop, rangeStep);

        expect(randomNumber).toBeGreaterThan(rangeStop);
        expect(randomNumber).toBeLessThanOrEqual(rangeStart);
        expect((randomNumber - rangeStart) % rangeStep === 0).toBeTruthy();
    };

    check(100, -52, -9);
    check(43928, -4286, -247);
    check(1342876400, -523423987, -38);
    check(100, 99, -1);
    check(100, 45, -1);
    check(100, 45, -1);
    check(100, 45, -1);
    check(100, 45, -1);
    check(100, 45, -1);
    check(100, 45, -1);
    check(100, 45, -1);
});
