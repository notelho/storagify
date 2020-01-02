import * as utils from './utils.js'

export function encode(k, v) {
    let key = utils.create_key(k)
    let buffer = utils.create_buffer(key)
    let value = utils.encode64(v)
    key = utils.define_key(key, value)
    return utils.apply(key, value, buffer, 'encode')
}