export class Parser {

    private _stringfy: boolean;

    constructor(stringify: boolean = true) {

        this._stringfy = stringify;

    }

    public parse(value?: any): any {

        try {

            return JSON.parse(<string>value);

        } catch (error) {

            return value;

        }

    }

    public stringfy(value?: any): string {

        try {

            const isString = typeof value === "string";

            const isFunction = typeof value === 'function';

            const isUndefined = value === undefined;

            const isNull = value === null;


            if (isString || isNull || isUndefined) {

                throw new Error();

            }

            if (isFunction) {

                value = "" + value;

            }

            return JSON.stringify(value);

        } catch (error) {

            return value;

        }

    }

    public apply(value?: any) {

        const stringfy = this._stringfy;

        if (stringfy) {

            return this.stringfy(value);

        }

        return value;

    }

}

export default Parser;