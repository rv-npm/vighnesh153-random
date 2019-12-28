import { Random } from '../src';


const check = () => {
  const randomNumber = Random.random();

  expect(randomNumber).toBe(Number(randomNumber));
  expect(randomNumber).toBeLessThan(1);
  expect(randomNumber).toBeGreaterThanOrEqual(0);
};

test('"random" method test 1', () => {
  check();
});

test('"random" method test 2', () => {
  check();
});

test('"random" method test 3', () => {
  check();
});
