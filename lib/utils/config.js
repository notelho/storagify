export function config(instance, str, callback) {

    let ret = undefined

    if (instance['__debug'])
        console.warn(str)

    if (callback) {

        try {
            ret = callback()

            if (
                instance['__stringfy'] &&
                ret && typeof ret !== 'object'
            ) ret = JSON.stringify(ret)

        } catch (err) {
            console.warn('Something went wrong. This is probably a key conflict error. Make sure you always boot with the same key.')
        }

    }

    return ret

}

export default config 