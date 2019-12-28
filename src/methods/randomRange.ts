import * as random from "./random";

import ThrowError from "../helpers/ThrowError";
import NumberUtil from "../helpers/NumberUtil";

const randomRange = function(rangeStart?: number, rangeStop?: number, ...ignoredParams: any[]) {

    if (arguments.length === 0) {
        [rangeStart, rangeStop] = [0, 1];
    }

    if (arguments.length === 1) {
        ThrowError.argumentNotSpecified('rangeStop');
    }

    if (!NumberUtil.isNumber(rangeStart)) {
        ThrowError.invalidArgumentType('rangeStart');
    }

    if (!NumberUtil.isNumber(rangeStop)) {
        ThrowError.invalidArgumentType('rangeStop');
    }

    let start = Number(rangeStart);
    let stop = Number(rangeStop);

    if (stop < start) {
        [start, stop] = [stop, start];
    }

    if (start === stop) {
        return start;
    }

    const mapConstant = stop - start;
    return random.default() * mapConstant + start;
};

export default randomRange;
