export type TypeAction = {

    delete?: {

        key: string;

    };

    set?: {

        key: string;

        value: string;

        timestamp: number;

    }

}

export default TypeAction;