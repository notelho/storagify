import { Custom64 } from './custom64.js'
import {
    av_char_64,
    av_pr,
    av_enc_functions,
    av_dec_functions,
    av_create_buffer
} from './core.js'

const custom64 = new Custom64(av_char_64)

export const create = () => {
    if (!String.prototype.includes)
        String.prototype.includes = function (search, start) {
            'use strict';

            if (typeof start !== 'number')
                start = 0;

            return start + search.length > this.length ?
                false : this.indexOf(search, start) !== -1

        }
}

export const create_key = (k) => custom64
    .encode(k)
    .split('')
    .map(char => av_char_64.indexOf(char))
    .join('')

export const create_buffer = (k) => av_create_buffer(k)

export const encode64 = (str) => custom64.encode(str)

export const decode64 = (str) => custom64.decode(str)

export const define_key = (k, v) => {

    while (k.length < v.length)
        k += av_pr(k)

    return k
}

export const apply = (k, v, b, t) => {

    let
        final = '',
        parsed_value = v.split(''),
        parsed_key = k.split('')

    for (let i = 1; i <= v.length; i++)

        t === 'encode ' ?
            final += av_enc_functions[i % 4](parsed_key[i - 1], parsed_value[i - 1], b) :
            final += av_dec_functions[i % 4](parsed_key[i - 1], parsed_value[i - 1], b)

    return final
}

