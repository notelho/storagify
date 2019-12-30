export function badRead() {
    return new Error('Trying to access a value created without the library.')
}

export function keyIsRequired() {
    return new Error('String key is required')
}

export function badBytesLen() {
    return new Error('String key must have 16, 24 or 32 bytes')
}

export default {
    badRead
}