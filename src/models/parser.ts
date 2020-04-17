import StorageEnvironment from "./storage-environment";

export class Parser {


    constructor(env: StorageEnvironment) {

    }

}

export default Parser;


// import StorageEnvironment from './storage-environment.js';
// import Encoder from './encoder';
// import OutputParser from './output-parser';
// import OutputEncryptor from './output-encryptor';

// export class EncoderParser extends Encoder {

//     constructor(env: StorageEnvironment) {
//         super(env);
//     }

//     public when(input: OutputParser): Date {

//         const timestamp = input.timestamp;

//         const when = new Date(timestamp);

//         return when;

//     }

//     public hash(input: string): string {

//         return this._devkey + input;

//     }

//     public encode(input: any): OutputParser {

//         const now = new Date();

//         const timestamp = now.getTime();

//         const value = input;

//         return { value, timestamp };

//     }

//     public decode(input: OutputParser): any {

//         const value = input.value;

//         return value;

//     }

// }

// export default EncoderParser;