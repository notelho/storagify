export const
    av_char_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    av_char_lowercase = 'abcdefghijklmnopqrstuvwxyz',
    av_char_numbers = '0123456789',
    av_char_symbols = '%/&',
    av_char_64 =
        av_char_uppercase +
        av_char_lowercase +
        av_char_numbers +
        av_char_symbols,
    av_enc_functions = [av_enc_1, av_enc_2, av_enc_3, av_enc_4,],
    av_dec_functions = [av_dec_1, av_dec_2, av_dec_3, av_dec_4,]

// ====================================================================================================

export function av_enc_1(k, v, b) {


    return v
}

export function av_enc_2(k, v, b) {

    return v
}

export function av_enc_3(k, v, b) {

    return v
}

export function av_enc_4(k, v, b) {

    let list = av_char_64.split('')

    // lista de letras do buffer 
    let buffer = []
    for (let i = 0; i < len(b); i++) {
        for (let j = 0; j < len(b[i]); j++) {
            buffer.push(av_char_64[b[i][j]])
        }
    }

    let where = int(list.indexOf(v)) + int(k)

    if (where < 0)
        where += 64

    if (where > 64)
        where -= 64

    return buffer[where]


}

// ====================================================================================================

export function av_dec_1(k, v, b) {
    return v
}

export function av_dec_2(k, v, b) {
    return v
}

export function av_dec_3(k, v, b) {
    return v
}

export function av_dec_4(k, v, b) {

    let list = av_char_64.split('')

    // lista de letras do buffer 
    let buffer = []
    for (let i = 0; i < len(b); i++) {
        for (let j = 0; j < len(b[i]); j++) {
            buffer.push(av_char_64[b[i][j]])
        }
    }

    let where = int(buffer.indexOf(v)) - int(k)

    if (where < 0)
        where += 64

    if (where > 64)
        where -= 64

    return list[where]


}

// ====================================================================================================

export const string2Bin = (str) =>
    str
        .split('')
        .map(char => char.charCodeAt(0))


export const bin2String = (arr) =>
    arr
        .map(int => String.fromCharCode(int))
        .join('')

export const len = (n) => n.length

export const int = (n) => parseInt(n)

export const it = (b, n) => n % b.length

export const jt = (b, n, i) => av_char_64.indexOf(n) % b[i].length

export const pr = (k) => {

    let p = int(k) * int(k)

    while (p > Number.MAX_SAFE_INTEGER)
        p /= 2

    p = p.toString()

    if (len(p) > 5) p = p.substring(
        (len(p) / 2) - 3,
        (len(p) / 2) + 1)

    return p
}

// ====================================================================================================

function mtx(l, el) {
    var m = [], i, k

    for (i = 0, k = -1; i < len(l); i++) {

        if (i % el === 0)
            m[++k] = []

        m[k].push(l[i])
    }

    return m;
}

export function create_buffer(k) {

    let pos = new Array(64),
        add = [],
        odd = [],
        even = [],
        keys = []

    for (let i = 0, p = k.split(''); i < len(p); i++) {
        if (i !== 0) {

            let t = null

            if (i % 4 !== 0)
                t = '' + p[i] + p[i - 1]
            else
                t = '' + p[i]

            if (keys.indexOf(t) === -1)
                keys.push(t)
        }
    }

    for (let i = 0; i < len(pos); i++) {

        pos[i] = i

        keys.indexOf(JSON.stringify(pos[i])) === -1 ?
            int(pos[i]) % 2 === 0 ?
                even.push(pos[i]) :
                odd.push(pos[i]) :
            add.push(pos[i])

    }

    return mtx([].concat(add, odd, even), 8)
}

