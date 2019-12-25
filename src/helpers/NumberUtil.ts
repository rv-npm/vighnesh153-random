export default class NumberUtil {

    static isNumber = (obj: any): boolean => {
        return Number(obj) === obj;
    };

    static isInt = (n: number): boolean => {
        return n % 1 === 0;
    };
}
