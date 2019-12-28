import randomInt from "./randomInt";

import ThrowError from "../helpers/ThrowError";
import IterableUtil from "../helpers/IterableUtil";


const randomizeIndicesFrom0ToN_minus_1 = (count: number): number[] => {
    // Array to hold indices
    const indices = [];

    // set all positions to 0
    while (count > 0) {
        indices.push(0);
        count--;
    }

    // Randomize the positions of indices
    let indexUpperBound = indices.length;
    while (indexUpperBound >= 1) {
        const randomInteger = randomInt(0, indexUpperBound);
        let zeroesCount = 0, arrayIndex = 0;

        // Try foreach
        while (true) {
            if (indices[arrayIndex] === 0) {
                zeroesCount++;
                if (zeroesCount > randomInteger) {
                    break
                }
            }
            arrayIndex++;
        }

        indices[arrayIndex] = --indexUpperBound;
    }

    return indices;
};

const shuffle = function(sequence?: any[] | string) {

    if (arguments.length === 0) {
        ThrowError.argumentNotSpecified('sequence');
    }

    if (!IterableUtil.isArrayOrString(sequence)) {
        ThrowError.invalidArgumentType('sequence');
    }

    const iterable = sequence as ([] | string);
    if (IterableUtil.isIterableEmpty(iterable)) {
        return [];
    }

    // Build the iterable array from the random indices
    const shuffled: any[] = [];
    const indices = randomizeIndicesFrom0ToN_minus_1(iterable.length);
    for (const index of indices) {
        shuffled.push(iterable[index]);
    }

    return shuffled;
};

export default shuffle;
