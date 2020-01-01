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

// let bin = string2Bin('abcdefghijklmnopqrstuvwxyz"{/*')
// let str = bin2String(bin)

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
  av_calc_functions = [
    function (k, v) {
      return v
    },
    function (k, v) {
      return v
    },
    function (k, v) {
      return v
    },
    function (k, v) {
      return v
    }
  ]

// chave
let key = 'chavesecreta'
// valor
let value = '{ teste: true }{ teste: true }{ teste: true }{ teste: true }{ teste: true }{ teste: true }'

// conveter a chave pra base 64 custom usando o av_char_64
const custom64Encoder = require('./custom-64-encoder')(av_char_64)
key = custom64Encoder.encode(key)

// conveter cada letra da chave para um numero equivalente no av_char_64
key = key.split('')
  .map(char => av_char_64.indexOf(char))
  .join('')

// conveter o valor para base 64 usando o av_char_64
value = custom64Encoder.encode(value)

// usar esse numero para gerar um numero pseudo aleatório to tamanho da mensagem
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

  final += av_calc_functions[i % 4](
    parsed_key[i - 1],
    parsed_value[i - 1]
  )

}

console.log('/*********************************************************************************************/');
console.log(key);
console.log(value);
console.log(final);
console.log('/*********************************************************************************************/');



//=====================================================================================================







// converter valor pra base 64 ( criar os offsets qdo precisar )

// valor = AbaerakVAdakwcaC&

// valor.len = key.len 


// array = array com 4 funções que pega uma letra do valor 
// e um numero e transforma em outra coisa

//=====================================================================================================