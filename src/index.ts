import * as random from "./methods/random";
import * as randomInt from "./methods/randomInt";
import * as randomRange from "./methods/randomRange";
import * as choice from "./methods/choice";

export default class Random {

    static random = random.default;
    static randomInt = randomInt.default;
    static randomRange = randomRange.default;
    static choice = choice.default;
}
