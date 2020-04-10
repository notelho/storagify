// import * as cryptojs from 'crypto-js';

// /*
//  * Key AES (key)
//  */
// const ak: string = 'QENPTk5FQ1RNSVgyMDE5'

// /*
//  * Key SHA (value)
//  */
// const sk: string = 'MjAxOUNPTk5FQ1RNSVhA'

// export class Encoder {

//     constructor(key: string) {

//     }

//     // when(str) {
//     //  return this.av64x4.when(str)
//     // }

//     /*
//      * SHA1 HASH
//      */
//     hash(str) {
//         return cryptojs.SHA1(sk + key)
//     }

//     value(str) {
//         return AV.decode64(str)
//     }

//     /*
//     * AES ENCRYPT
//     */
//     encode(str, timestamp = null) {

//         cryptojs.AES.encrypt(value, ak)
//     }

//     /*
//      * AES DECRYPT
//      */
//     decode(str) {

//         let d = cryptojs.AES.decrypt(value, ak)

//         return d.toString(cryptojs.enc.Utf8)

//     }

// }