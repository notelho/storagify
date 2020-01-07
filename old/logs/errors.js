const keyIsRequired = () => storagifyError('STRING key is required.')

const cannotBeforeInit = (str) => storagifyError(`Cannot ${str} before init. Call storagify.init('mykey').`)

const callInitFunc = (str) => storagifyError(`Cannot call ${str} before initialize. Call init() first.`)

function storagifyError(str) {
    throw new Error(str)
}

export default { keyIsRequired, cannotBeforeInit, callInitFunc }