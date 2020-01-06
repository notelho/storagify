const key_is_required = () => storagify_error('STRING key is required.')

const cannot_before_init = (str) => storagify_error(`Cannot ${str} before init. Call storagify.init('mykey').`)

const call_init_func = (str) => storagify_error(`Cannot call ${str} before initialize. Call init() first.`)

function storagify_error(str) {
    throw new Error(str)
}

export default {
    key_is_required,
    cannot_before_init,
    call_init_func
}