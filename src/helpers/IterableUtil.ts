export default class IterableUtil {

    static isArrayOrString = (object: any) => {
        if (Array.isArray(object)) {
            return true;
        }
        return typeof object === 'string' || object instanceof String;
    };

    static isIterableEmpty = (iterable: any[] | string): boolean => {
        return iterable.length === 0;
    }
}
