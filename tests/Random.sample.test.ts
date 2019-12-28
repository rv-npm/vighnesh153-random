import { Random } from "../src";


test('Test if the method returns correct sample', () => {

    const start = 1, stop = 10, count = 100;
    const sample = Random.sample(start, stop, count);

    expect(sample.length).toBe(count);

    sample.forEach((item) => {
        if (start > stop) {
            expect(item).toBeLessThan(start);
            expect(item).toBeGreaterThanOrEqual(stop);
        } else {
            expect(item).toBeLessThan(stop);
            expect(item).toBeGreaterThanOrEqual(start);
        }
    });
});
