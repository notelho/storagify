import Storagify from "./storagify";
import getFrom from "../utils/get-from";

export class Convertor {

    readonly separator: string = '$T'


    constructor() {

    }

    value(instance: Storagify, encvalue: string): any {

        const { calls, encoder, convertor } = getFrom(instance);

    }

    // when(xxxx) {

    // }

    // is(xxxx) {

    // }

}

export default Convertor;