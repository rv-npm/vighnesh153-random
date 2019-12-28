import ThrowError from "../helpers/ThrowError";
import NumberUtil from "../helpers/NumberUtil";

import randomRange from "./randomRange";


const sample = function(rangeStart?: number,
                        rangeStop?: number,
                        count?: number,
                        ...ignoredParams: any) {

    if (arguments.length === 0) {
        ThrowError.argumentNotSpecified(
            'rangeStart, rangeStop, count'
        );
    }
    if (arguments.length === 1) {
        ThrowError.argumentNotSpecified('rangeStop, count');
    }
    if (arguments.length === 2) {
        ThrowError.argumentNotSpecified('count');
    }

    if (!NumberUtil.isNumber(rangeStart)) {
        ThrowError.invalidArgumentType('rangeStart');
    }
    if (!NumberUtil.isNumber(rangeStop)) {
        ThrowError.invalidArgumentType('rangeStop');
    }
    if (!NumberUtil.isNumber(count)) {
        ThrowError.invalidArgumentType('count');
    }

    const start = Number(rangeStart);
    const stop = Number(rangeStop);
    let numbersNeeded = Number(count);

    const collection = [];
    while (numbersNeeded > 0) {
        collection.push(randomRange(start, stop));
        numbersNeeded--;
    }

    return collection;
};

export default sample;
