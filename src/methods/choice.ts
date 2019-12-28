import randomInt from "./randomInt";
import ThrowError from "../helpers/ThrowError";


const choice = function(sequence?: any[], ...ignoredParams: any[]) {

    if (arguments.length === 0) {
        ThrowError.argumentNotSpecified('sequence');
    }

    if (Array.isArray(sequence) === false) {
        ThrowError.invalidArgumentType('sequence');
    }

    const iterable = sequence as [];

    if (iterable.length === 0) {
        return undefined;
    }

    const randomIndex = randomInt(0, iterable.length);
    return iterable[randomIndex];
};

export default choice;
