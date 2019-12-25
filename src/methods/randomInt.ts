import ThrowError from "../helpers/ThrowError";
import NumberUtil from "../helpers/NumberUtil";


const randomInt = (start: number, stop: number, step: number = 1): number => {
    if (start === undefined) {
        ThrowError.argumentNotSpecified('start');
    }

    if (stop === undefined) {
        ThrowError.argumentNotSpecified('stop');
    }

    if (!NumberUtil.isNumber(start) || !NumberUtil.isInt(start)) {
        ThrowError.invalidArgumentType('start');
    }

    if (!NumberUtil.isNumber(stop) || !NumberUtil.isInt(stop)) {
        ThrowError.invalidArgumentType('stop');
    }

    if (!NumberUtil.isNumber(step) || !NumberUtil.isInt(step)) {
        ThrowError.invalidArgumentType('step');
    }

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

    if (start > stop) {
        [start, stop] = [stop, start];
        step *= -1;
    }

    let totalNumbersInRange = Math.ceil((stop - start) / step);
    if (totalNumbersInRange * step + start === stop) {
        totalNumbersInRange--;
    }

    const randomIndex = Math.floor(Math.random() * totalNumbersInRange);
    return start + randomIndex * step;
};

export default randomInt;
