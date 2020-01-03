export function badRead() {
    return new Error('Trying to access a value created without the library.')
}

export function keyIsRequired() {
    return new Error('String key is required')
}

export function cannotBeforeInit(str) {
    return new Error(`Cannot ${str} before init. Call storagify.init('mykey').`)
}

export default { badRead, keyIsRequired, cannotBeforeInit }