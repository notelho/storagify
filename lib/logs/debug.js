export function logger(debug, str, callback) {

    if (debug) {
        console.log(str);
    }

    return callback()

}