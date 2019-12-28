import * as random from "./random";

import ThrowError from "../helpers/ThrowError";
import NumberUtil from "../helpers/NumberUtil";



// Using the 'function' keyword, instead of arrow functions,
// to get access to the 'arguments' object within it.
// Arrow functions don't have an 'arguments' object, at least in TypeScript.
const randomInt = function (rangeStart?: number, rangeStop?: number,
                            rangeStep?: number, ...ignoredParams: any[]): number {

    if (arguments.length === 0) {
        ThrowError.argumentNotSpecified('start, stop');
    }

    if (arguments.length === 1) {
        ThrowError.argumentNotSpecified('stop');
    }

    if (!NumberUtil.isNumber(rangeStart) || !NumberUtil.isInt(rangeStart)) {
        ThrowError.invalidArgumentType('start');
    }

    if (!NumberUtil.isNumber(rangeStop) || !NumberUtil.isInt(rangeStop)) {
        ThrowError.invalidArgumentType('stop');
    }

    if (rangeStep === undefined) {
        rangeStep = 1;
    }

    if (!NumberUtil.isNumber(rangeStep) || !NumberUtil.isInt(rangeStep)) {
        ThrowError.invalidArgumentType('step');
    }

    const start = Number(rangeStart);
    const stop = Number(rangeStop);
    const step = Number(rangeStep);

    if (start === stop) {
        return start;
    }

    if (step === 0) {
        throw new Error("'step' can't be 0");
    }

    if ((start > stop && step > 0) ||
        (start < stop && step < 0)) {
        throw new Error('Range is empty.')
    }

    let totalNumbersInRange = Math.abs(Math.ceil((stop - start) / step)) + 2;
    const comparisionMultiple = step < 0 ? -1 : 1;
    let lastNumber;
    do {
        lastNumber = (start + step * (totalNumbersInRange - 1))
                    * comparisionMultiple;
        totalNumbersInRange--;
    }
    while (lastNumber >= stop * comparisionMultiple);

    const randomIndex = Math.floor(random.default() * totalNumbersInRange);
    return start + randomIndex * step;
};

export default randomInt;
