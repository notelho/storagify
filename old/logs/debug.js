export function logger(debug, str, callback) {

    if (debug)
        console.warn(str)

    if (callback)
        return callback()

}