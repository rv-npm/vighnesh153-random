import sampleGenerator from "./sampleGenerator";
import randomInt from "./randomInt";


const sampleInt = function(rangeStart?: number,
                        rangeStop?: number,
                        count?: number,
                        ...ignoredParams: any) {

    return sampleGenerator(rangeStart, rangeStop, count, randomInt);
};

export default sampleInt;
