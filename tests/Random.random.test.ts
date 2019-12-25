import Random from '../src/index';

test('My Greeter', () => {
  const randomNumber = Random.random();

  expect(randomNumber).toBe(Number(randomNumber));
  expect(randomNumber).toBeLessThan(1);
  expect(randomNumber).toBeGreaterThanOrEqual(0);
});
