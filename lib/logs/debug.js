export function logger(instance, str, callback) {

    if (instance['[[debug]]'])
        console.warn(str)

    if (callback)
        return callback()

}

export default logger