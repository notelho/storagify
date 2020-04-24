import TypeThrow from "../models/type-throw";

const errors = {

    'instance-notfound': {
        message: 'Storage instance not found',
    },

    'key-notfound': {
        message: 'String key not found',
    },

}

export function thrower(type: TypeThrow) {

    const error = errors[type];

    throw new Error(error.message);

}

export default thrower;