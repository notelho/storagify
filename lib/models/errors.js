export function badRead() {
    return new Error('Trying to access a value created without the library.')
}

export function keyIsRequired() {
    return new Error('String key is required')
}

export default { badRead, keyIsRequired }