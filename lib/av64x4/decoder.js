import * as utils from './utils.js'

export function decode(k, v) {
    let key = utils.create_key(k)
    let buffer = utils.create_buffer(key)
    key = utils.define_key(key, v)
    let final = utils.apply(key, v, buffer, 'decode')
    return utils.decode64(final)
}