

import { Custom64 } from './custom64.js'
import {
    av_char_64,
    av_pr,
    len,
    av_dec_functions,
    av_create_buffer
} from './core.js'

import * as utils from './utils.js'

export function decode(k, v) {

    const custom64 = new Custom64(av_char_64)

    let key = custom64
        .encode(k)
        .split('')
        .map(char => av_char_64.indexOf(char))
        .join('')

    const key_to_buffer = av_create_buffer(key)

    let value = v

    while (key.length < value.length)
        key += av_pr(key)

    let
        final = '',
        parsed_value = value.split(''),
        parsed_key = key.split('')

    for (let i = 1; i <= len(value); i++) {

        final += av_dec_functions[i % 4](
            parsed_key[i - 1],
            parsed_value[i - 1],
            key_to_buffer
        )

    }

    return custom64.decode(final)
}