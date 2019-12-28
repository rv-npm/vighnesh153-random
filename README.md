<h1>Welcome to @vighnesh153/random 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.3-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/rv-npm/vighnesh153-random/blob/master/LICENSE" target="_blank">
    <img alt="License: GPL--3.0--or--later" src="https://img.shields.io/badge/License-GPL--3.0--or--later-yellow.svg" />
  </a>
  
  <a href="https://travis-ci.com/rv-npm/vighnesh153-random" target="_blank">
    <img src="https://travis-ci.com/rv-npm/vighnesh153-random.svg?branch=master" alt="">
  </a>
  
  <a href="https://coveralls.io/github/rv-npm/vighnesh153-random?branch=master" target="_blank">
      <img src="https://coveralls.io/repos/github/rv-npm/vighnesh153-random/badge.svg?branch=master" alt="">
  </a>
  
  <img alt="npm" src="https://img.shields.io/npm/dt/@vighnesh153/random">
</p>

> A collection of some 'random-generation' functions

### 🏠 [Homepage](https://github.com/rv-npm/vighnesh153-random#readme)

## Installation
```
npm i -S @vighnesh153/random
``` 

## Usage

#### Include in TS 
```
import { Random } from '@vighnesh153/random';
```

#### Include in JS
```
const { Random } = require('@vighnesh153/random');
```

#### random()
Generate a random floating point number between 0 (inclusive) and 1 (exclusive).
```JS
const someRandomNumber = Random.random();
```

#### randomInt(start: number, stop: number, [step: number])
Generate a random integer between `start` (inclusive) and `stop` (exclusive) with steps of `step`.
Default `step` is `1`.
```JS
// Get a random integer between 3 and 30 with steps of 5 ie., choose one of 3, 8, 13, 18, 23, 28.
const someRandomNumber = Random.randomInt(3, 30, 5);
```

#### randomRange(start: number, stop: number)
Generate a random floating point between `start` (inclusive) and `stop` (exclusive).
```JS
// Get a random floating point number between 5 and 10.
const someRandomNumber = Random.randomInt(5, 10);
```

#### choice(array: [])
Get a random element from the array.
```JS
const someRandomElement = Random.choice([1, 2, 'a', 'b']);
```

#### shuffle(sequence: [] | string)
Generates a random permutation of the provided sequence. Input accepted is `array` or `string` and output will be array. 
In case of string, each character of the string will be an element of the return array.
```JS
const shuffledSequence = Random.choice([1, 2, 3, 4, 5]);
```

#### sampleInt(start: number, stop: number, count: number)
Returns an array with `count` elements and each element will be 
a random integer between `start`(inclusive) and `stop`(exclusive).
```JS
const sampleIntegers = Random.sample(2, 10, 5);
```

#### sample(start: number, stop: number, count: number)
Returns an array with `count` elements and each element will be 
a random floating point number between `start`(inclusive) and `stop`(exclusive).
```JS
const sampleNumbers = Random.choice(0.54, 8, 4);
```

## Author

👤 **Vighnesh Raut**


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/rv-npm/vighnesh153-random/issues). You can also take a look at the [contributing guide](https://github.com/rv-npm/vighnesh153-random/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

