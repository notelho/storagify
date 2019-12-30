export function badRead() {
    return new Error('Trying to access a value created without the library. Use storagify.instance.setItem() instead.')
}

export default {
    badRead
}