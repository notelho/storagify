const keyIsRequired = () => storagify_error('String key is required')

const cannotBeforeInit = (str) => storagify_error(`Cannot ${str} before init. Call storagify.init('mykey').`)

function storagify_error(str) {
    throw new Error(str)
}

export default { keyIsRequired, cannotBeforeInit }