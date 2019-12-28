import sampleGenerator from "./sampleGenerator";


const sample = function(rangeStart?: number,
                        rangeStop?: number,
                        count?: number,
                        ...ignoredParams: any) {

    return sampleGenerator(rangeStart, rangeStop, count);
};

export default sample;
