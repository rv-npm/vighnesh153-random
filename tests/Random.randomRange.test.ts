import { Random } from "../src";


test('check for when no arguments are passed', () => {

    const check = () => {
        const randomNumber = Random.randomRange();

        expect(randomNumber).toBeLessThan(1);
        expect(randomNumber).toBeGreaterThanOrEqual(0);
    };

    check();
    check();
    check();
    check();
    check();
});

test('passing just 1 argument should throw', () => {

    expect(() => {
        const randomNumber = Random.randomRange(2);
    }).toThrow();
});

test('passing invalid argument types should throw', () => {

    expect(() => {
        const randomNumber = Random.randomRange(undefined);
    }).toThrow();

    expect(() => {
        const randomNumber = Random.randomRange(
            undefined, undefined
        );
    }).toThrow();

    expect(() => {
        const randomNumber = Random.randomRange(
            32, undefined
        );
    }).toThrow();
});

test('check for when start and stop are same', () => {

    const check = (start: number): void => {
        const randomNumber = Random.randomRange(start, start);

        expect(randomNumber).toBe(start);
    };

    check(4);
    check(243);
    check(.313);
    check(424324);
    check(4324.5434);
    check(75643.242);
});

test('check for the reverse arguments', () => {

    const check = (start: number, end: number) => {
        const randomNumber = Random.randomRange(start, end);

        expect(randomNumber).toBeLessThan(start);
        expect(randomNumber).toBeGreaterThanOrEqual(end);
    };

    check(434, 43);
    check(12, 11);
    check(-32, -45);
    check(0, -1);
    check(1, 0);
    check(1, -1);
});
