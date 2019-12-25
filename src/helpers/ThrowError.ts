export default class ThrowError {

    static argumentNotSpecified = (argumentName: string): void => {
        throw new Error(`Argument '${argumentName}' has to be specified..`)
    };

    static invalidArgumentType = (argumentName: string): void => {
        throw new Error(`Type of '${argumentName}' is invalid..`)
    };
}
