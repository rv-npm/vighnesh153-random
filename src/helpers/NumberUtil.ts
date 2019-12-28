export default class NumberUtil {

    static isNumber = (obj: any): boolean => {
        return Number(obj) === obj;
    };

    static isInt = (n: number | undefined): boolean => {
        return Number(n) % 1 === 0;
    };
}
