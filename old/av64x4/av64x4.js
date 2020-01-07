class AvCustom64 {

    constructor(char_64_bytes) {

        if (char_64_bytes.length !== 65)
            throw new Error('Encode str must have 65 bytes')

        this.map = char_64_bytes

    }

    encode(input) {

        input = this._utf8_encode(input)

        var output = "", a, b, c, d, e, f, g, i = 0;

        while (i < input.length) {
            a = input.charCodeAt(i++);
            b = input.charCodeAt(i++);
            c = input.charCodeAt(i++);
            d = a >> 2;
            e = ((a & 3) << 4) | (b >> 4);
            f = ((b & 15) << 2) | (c >> 6);
            g = c & 63;

            if (isNaN(b))
                f = g = 64;
            else if (isNaN(c))
                g = 64;

            output += this.map.charAt(d) +
                this.map.charAt(e) +
                this.map.charAt(f) +
                this.map.charAt(g);
        }

        return output;
    }

    decode(input) {
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "")
        var output = "", a, b, c, d, e, f, g, i = 0

        while (i < input.length) {
            d = this.map.indexOf(input.charAt(i++))
            e = this.map.indexOf(input.charAt(i++))
            f = this.map.indexOf(input.charAt(i++))
            g = this.map.indexOf(input.charAt(i++))

            a = (d << 2) | (e >> 4)
            b = ((e & 15) << 4) | (f >> 2)
            c = ((f & 3) << 6) | g

            output += String.fromCharCode(a)
            if (f != 64) output += String.fromCharCode(b)
            if (g != 64) output += String.fromCharCode(c)
        }

        return this._utf8_decode(output)
            .replace(/[\u0000-\u0019]+/g, "")
            .replace(/\\n/g, "\\n")
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f")

    }

    _utf8_encode(string) {
        string = string.replace(/\r\n/g, "\n")
        var output = "", i = 0, charCode

        for (i; i < string.length; i++) {
            charCode = string.charCodeAt(i)
            if (charCode < 128)
                output += String.fromCharCode(charCode)
            else if ((charCode > 127) && (charCode < 2048)) {
                output += String.fromCharCode((charCode >> 6) | 192)
                output += String.fromCharCode((charCode & 63) | 128)
            } else {
                output += String.fromCharCode((charCode >> 12) | 224)
                output += String.fromCharCode(((charCode >> 6) & 63) | 128)
                output += String.fromCharCode((charCode & 63) | 128)
            }
        }

        return output;
    }

    _utf8_decode(string) {
        var output = "", i = 0, charCode = 0;

        while (i < string.length) {
            charCode = string.charCodeAt(i);
            if (charCode < 128) {
                output += String.fromCharCode(charCode)
                i++
            } else if ((charCode > 191) && (charCode < 224)) {
                output += String.fromCharCode(((charCode & 31) << 6) | (string.charCodeAt(i + 1) & 63))
                i += 2
            } else {
                output += String.fromCharCode(((charCode & 15) << 12) | ((string.charCodeAt(i + 1) & 63) << 6) | (string.charCodeAt(i + 2) & 63))
                i += 3
            }
        }

        return output
    }
}

const
    av_char_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    av_char_lowercase = 'abcdefghijklmnopqrstuvwxyz',
    av_char_numbers = '0123456789',
    av_char_symbols = '%/&',
    av_char_split = '$',
    av_char_64 =
        av_char_uppercase +
        av_char_lowercase +
        av_char_numbers +
        av_char_symbols,
    av_custom64 = new AvCustom64(av_char_64),
    av_tables = [],
    av_tables_functions = [
        b => {
            let t = []
            for (let i = 0; i < b.length; i++)
                for (let j = 0; j < b[i].length; j++)
                    t.push(av_char_64[b[i][j]])
            return t
        },
        b => {
            let t = []
            for (let i = b.length - 1; i >= 0; i--)
                for (let j = b[i].length - 1; j >= 0; j--)
                    t.push(av_char_64[b[i][j]])
            return t
        },
        b => {
            let odd = [], even = []
            for (let i = 0; i < b.length; i++)
                for (let j = 0; j < b[i].length; j++)
                    b[i][j] % 2 === 0 ?
                        even.push(av_char_64[b[i][j]]) :
                        odd.push(av_char_64[b[i][j]])
            return odd.concat(even)
        },
        b => {
            let even = [], odd = []
            for (let i = 0; i < b.length; i++)
                for (let j = 0; j < b[i].length; j++)
                    b[i][j] % 2 === 0 ?
                        even.push(av_char_64[b[i][j]]) :
                        odd.push(av_char_64[b[i][j]])
            return even.concat(odd)
        },
    ]

const av_fetch_index = (k, v, o, l) => {
    let
        i = parseInt(l.indexOf(v)),
        j = parseInt(k),
        w = o === '+' ?
            i + j :
            i - j
    if (w < 0) w += 64
    if (w > 64) w -= 64
    return w
}

function av_mtx(l, el) {
    var m = [], i, k
    for (i = 0, k = -1; i < l.length; i++) {
        if (i % el === 0)
            m[++k] = []
        m[k].push(l[i])
    }
    return m
}

function av_create_buffer(k) {

    let pos = new Array(65),
        add = [],
        odd = [],
        even = [],
        keys = []

    for (let i = 0, p = k.split(''); i < p.length; i++) {
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

    for (let i = 0; i < pos.length; i++) {
        pos[i] = i
        keys.indexOf(JSON.stringify(pos[i])) === -1 ?
            parseInt(pos[i]) % 2 === 0 ?
                even.push(pos[i]) :
                odd.push(pos[i]) :
            add.push(pos[i])
    }

    return av_mtx([].concat(add, odd, even), 8)
}

const av_core = {
    start: (b) => {
        if (!String.prototype.includes) {
            String.prototype.includes = function (search, start) {
                'use strict';
                if (typeof start !== 'number')
                    start = 0;
                return start + search.length > this.length ?
                    false : this.indexOf(search, start) !== -1
            }
        }

        for (let i = 0; i < av_tables_functions.length; i++)
            av_tables[i] = av_tables_functions[i](b)
    },

    create_key: (k) => av_custom64
        .encode(k)
        .split('')
        .map(char => av_char_64.indexOf(char))
        .join(''),

    create_buffer: (k) => av_create_buffer(k),

    encode64: (str) => av_custom64.encode(str),

    decode64: (str) => av_custom64.decode(str),

    define_key: (k, v) => {
        while (k.length < v.length)
            k += k
        return k
    },

    apply: (k, v, t) => {

        let
            final = '',
            parsed_value = v.split(''),
            parsed_key = k.split('')

        for (let i = 1; i <= v.length; i++)
            final += t === 'encode' ?
                av_tables[i % 4][av_fetch_index(
                    parsed_key[i - 1],
                    parsed_value[i - 1],
                    '+',
                    av_char_64.split(''))
                ] :
                av_char_64.split('')[av_fetch_index(
                    parsed_key[i - 1],
                    parsed_value[i - 1],
                    '-',
                    av_tables[i % 4])
                ]

        return final
    },

    get_date: () => {
        return JSON.stringify(new Date().getTime())
    },

    parse_date: ms => {
        return new Date(parseInt(ms))
    },

    fake_date: ms => {
        return JSON.stringify(new Date(parseInt(ms)).getTime())
    },

    mix: (h, d) => `${h}${av_char_split}${d}`,

    split: (h) => h.split(av_char_split)

}

export class AV64X4 {

    constructor(key) {
        if (key)
            this.init(key)
    }

    init(key) {
        const av_key = av_core.create_key(key)
        const av_buffer = av_core.create_buffer(av_key)
        const av_date = av_core.create_key('timestamp')
        this['[[av_key]]'] = av_key
        this['[[av_date]]'] = av_date
        av_core.start(av_buffer)
    }

    encode(str, timestamp = null) {
        this._doCheck('encode')

        try {
            let value = av_core.encode64(str)
            let date = !timestamp ?
                av_core.get_date() :
                av_core.fake_date(timestamp)
            let value_key = av_core.define_key(this['[[av_key]]'], value)
            let date_key = av_core.define_key(this['[[av_date]]'], date)
            return av_core.mix(
                av_core.apply(value_key, value, 'encode'),
                av_core.apply(date_key, date, 'encode'))
        } catch (err) {
            throw new Error('Encode failed.')
        }
    }

    decode(str) {
        this._doCheck('decode')

        try {
            let value = av_core.split(str)[0]
            let key = av_core.define_key(this['[[av_key]]'], value)
            let final = av_core.apply(key, value, 'decode')
            return av_core.decode64(final)
        } catch (err) {
            throw new Error('Encode failed.')
        }
    }

    when(str) {
        this._doCheck('check when')

        try {
            let date = av_core.split(str)[1]
            let key = av_core.define_key(this['[[av_date]]'], date)
            let final = av_core.apply(key, date, 'decode')
            return av_core.parse_date(final)
        } catch (err) {
            throw new Error('When failed.')
        }
    }

    _doCheck(str) {
        if (!this['[[av_key]]'])
            throw new Error(`Cannot ${str} before initiation. Call AV64X4.init("your_key")`)
    }

}

export const encode64 = str => av_core.encode64(str)
export const decode64 = str => av_core.decode64(str)