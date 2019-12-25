import Random from "../src";


test('check for the randomRange method', () => {

    const check = (start: number = 0, end: number = 1) => {
        const randomNumber = Random.randomRange(start, end);

        expect(randomNumber).toBeLessThan(end);
        expect(randomNumber).toBeGreaterThanOrEqual(start);
    };

    check();
    check(3, 6);
    check(.32432, .3243243);
    check(.227834682734, .324378643823243)
});
