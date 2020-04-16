// encoder extends encoder

// import Parsed from "../models/parsed";

// export function parser(

//     any: any,

// ): Parsed {


// }

import StorageEnvironment from './storage-environment.js';

export class EncoderParser {

    constructor(env: StorageEnvironment) { }


    when(str) {

    }


    hash(str) {

    }

    value(str) {

    }


    encode(str, timestamp = null) {


        //     return {

        //         value: '',

        //         timestamp: 1

        //     }



    }


    decode(str) {


    }


}

export default EncoderParser;