if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';

    if (typeof start !== 'number')
      start = 0;

    return start + search.length > this.length ?
      false : this.indexOf(search, start) !== -1

  };
}

function string2Bin(str) {
  return str
    .split('')
    .map(char => char.charCodeAt(0))
}

function bin2String(arr) {
  return arr
    .map(int => String.fromCharCode(int))
    .join('')
}

// ====================================================================================================

function len(n) {
  return n.length
}

function int(n) {
  return parseInt(n)
}

const
  av_char_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  av_char_lowercase = 'abcdefghijklmnopqrstuvwxyz',
  av_char_numbers = '0123456789',
  av_char_symbols = '%/&',
  av_char_64 =
    av_char_uppercase +
    av_char_lowercase +
    av_char_numbers +
    av_char_symbols,
  av_buffer_table = [    // criar as tabelas esticas a partir do hash da chave
    [50, 19, 30, 4, 52, 36, 46, 23, 15, 32],
    [5, 47, 20, 43, 51, 33, 39, 48, 53, 29],
    [55, 6, 9, 40, 12, 11, 37, 60, 45, 58],
    [10, 13, 21, 54, 56, 27, 16, 44, 59, 28],
    [17, 38, 35, 2, 57, 1, 24, 34, 31, 7],
    [3, 14, 42, 22, 49, 62, 18, 61, 25, 26],
  ],
  av_enc_functions = [
    function (k, v, l, i) {

      // criar uma tabela em memoria

      // a b c
      // b c d
      // c d e

      return v
    },
    function (k, v, l, i) {

      // baseado no index

      return v
    },
    function (k, v, l, i) {

      let bin_v = string2Bin(v)[0]
      let bin_k = string2Bin(k)[0]

      console.log(bin_v);
      console.log(bin_k);

      let arr_buffer = []

      for (let t of av_buffer_table)
        for (let r of t) arr_buffer.push(r)

      // fazer baseano só no index do binario do valor somados em um inteiro 

      return v
    },
    function (k, v) {
      return av_char_64.split('')[av_buffer_table
      [k % av_buffer_table.length]
      [av_char_64.indexOf(v) % av_buffer_table
      [k % av_buffer_table.length].length]]
    }
  ],
  av_dec_functions = [
    function (k, v, l, i) {
      return v
    },
    function (k, v, l, i) {
      return v
    },
    function (k, v, l, i) {
      return v
    },
    function (k, v, l, i) {
      return v
    }
  ]

let key = 'chavesecreta'
let value = '{ teste: true }{ teste: true }{ teste: true }{ teste: true }{ teste: true }{ teste: true }'

const custom64Encoder = require('./custom-64-encoder')(av_char_64)
key = custom64Encoder.encode(key)

key = key.split('')
  .map(char => av_char_64.indexOf(char))
  .join('')

value = custom64Encoder.encode(value)

function pseudo_random_next(k) {

  let p = int(k) * int(k)

  while (p > Number.MAX_SAFE_INTEGER)
    p /= 2

  p = p.toString()

  if (len(p) > 5) p = p.substring(
    (len(p) / 2) - 3,
    (len(p) / 2) + 1)

  return p
}

while (key.length < value.length) {
  key += pseudo_random_next(key)
}

let
  final = '',
  parsed_value = value.split(''),
  parsed_key = key.split('')

for (let i = 1; i <= len(value); i++) {

  final += av_enc_functions[i % 4](
    parsed_key[i - 1],
    parsed_value[i - 1],
    len(value),
    i - 1
  )

}

console.log('/*********************************************************************************************/');
console.log(key);
console.log(value);
console.log(final);
console.log('/*********************************************************************************************/');
