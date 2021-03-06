export default class ThrowError {

    static argumentNotSpecified = (argumentName: string): void => {
        throw new Error(`Argument '${argumentName}' has to be specified..`);
    };

    static invalidArgumentType = (argumentName: string): void => {
        throw new Error(`Type of '${argumentName}' is invalid..`);
    };

    static invalidNumberOfArguments = (expectedNumber: number = 1): void => {
        throw new Error(`Invalid Number of arguments. Expected ${expectedNumber}`);
    };

    static invalidValueOfArgument = (): void => {
        throw new Error(`Argument value|s are invalid. `);
    };
}
