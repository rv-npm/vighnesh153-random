import { Greeter } from '../src/index';

test('My Greeter', () => {
  expect(Greeter('Vighnesh')).toBe('Hello, Vighnesh');
});